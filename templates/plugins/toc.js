/**
 * Heavily Adapted From https://github.com/assemble/assemble-contrib-toc
 */

var options = {
    stage: 'render:post:page'
};

var cheerio = require('cheerio');

module.exports = function(params, callback) {
    'use strict';

    // load current page content
    var $ = cheerio.load(params.content);

    // get all the anchor tags from inside the headers
    var anchors = $('h1[id],h2[id],h3[id]'),
        toc = [],
        duplicateChecker = {},
        dupesFound = false;

    function findLocation(toc, depth) {
        if (depth === 1) {
            return toc;
        }

        var loc = toc[toc.length - 1];
        if (!loc) {
            loc = { children: [] };
            toc.push(loc);
        } else if (!loc.children) {
            loc.children = [];
        }
        return findLocation(loc.children, depth - 1 );
    }

    anchors.map(function(i, e) {
        var text  = $(e).text().trim();
        var link  = e.attribs.id;
        var node = { text: text, link: link };

        if (!duplicateChecker[link]) {
            duplicateChecker[link] = node;
        } else {
            console.error("\nDuplicate found, names are " + duplicateChecker[link].text + " and " + text + " with link " + link);
            dupesFound = true;
        }
        
        var depth = Math.min(2, parseInt(e.name.replace(/h/gi, ''), 10));
        var location = findLocation(toc, depth);
        location.push( node );
    });
    
    if (dupesFound) {
        throw new Error("Stopping because of duplicates");
    }

    function toHtml(toc, first) {
        return "<ul class=\"nav" + (first ? " sidenav" : "") + "\">" + toc.map(function(loc) {
            return '<li><a href="#' + loc.link + '">' + loc.text + '</a>' +
                (loc.children ? toHtml(loc.children) : "") + '</li>';
        }).join("") + "</ul>";
    }

    $("#toc").append(toHtml(toc, true));

    params.content = $.html();
    callback();
};

module.exports.options = options;