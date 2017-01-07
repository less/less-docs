/**
 * Heavily Adapted From https://github.com/assemble/assemble-contrib-nav
 */

var path = require('path');
var template = require('template');
var cheerio = require('cheerio');
var log = require('verbalize');


module.exports = function navigationPlugin(params, callback) {
    'use strict';

    var assemble = params.assemble;

    // load current page content
    var $ = cheerio.load(params.content);

    var anchorOpts = assemble.options.anchors || {};
    var navOpts = assemble.options.navigation || {};

    // get all the anchor tags from inside the headers
    var headings = $('h1[id],h2[id],h3[id],h4[id],h5[id]');
    var navMax = 3;
    var navigation = [];
    var duplicateChecker = {};
    var dupesFound = false;

    function findLocation(navigation, depth) {
        if (depth === 1) {
            return navigation;
        }
        var loc = navigation[navigation.length - 1];
        if (!loc) {
            loc = {
                children: []
            };
            navigation.push(loc);
        } else if (!loc.children) {
            loc.children = [];
        }
        return findLocation(loc.children, depth - 1);
    }

    headings.map(function (i, e) {
        var $e = $(e);
        var text = $e.html().trim();
        var link = $e.attr('id');
        var level = parseInt(e.name.replace(/h/gi, ''), 10);
        var node = {
            level: level,
            text: text,
            link: link,
            $e: $e
        };
        var depth = level <= 1 ? 1 : 2;
        var location = findLocation(navigation, depth);
        location.push(node);
    });

    function setLinkNames(navigation, sParentLink) {
        return navigation.filter(function (loc) {
            loc.link = (sParentLink ? sParentLink + '-' : '') + loc.link;
            loc.$e.attr('id', loc.link);

            if (!duplicateChecker[loc.link]) {
                duplicateChecker[loc.link] = loc;
            } else {
                log.warn('\n>> Duplicate found [text]:"' + duplicateChecker[loc.link].text + '" and "' + loc.text + '", [link]: ' + loc.link);
                dupesFound = true;
            }

            if (loc.children) {
                loc.children = setLinkNames(loc.children, loc.link);
            }

            return loc.level <= navMax;
        });
    }

    navigation = setLinkNames(navigation);

    if (dupesFound) {
        throw new Error("Stopping, duplicates found.");
    }

    function buildHTML(navigation, first) {
        return '<ul class="nav' + (first ? ' sidenav' : '') + '">' + navigation.map(function (loc) {

            var childHTML = "";
            if (loc.children && loc.children.length) {
                childHTML = buildHTML(loc.children, false);
            }

            return '<li><a href="#' + loc.link + '">' + loc.text + '</a>' + childHTML + '</li>';
        }).join('\n') + '</ul>';
    }

    $(navOpts.id || '#navigation').append(buildHTML(navigation, true));


    var anchorTemplate = [
        '<span class="anchor-target" id="<%= id %>"></span>',
        '<a href="#<%= id %>" name="<%= id %>" class="anchor glyphicon glyphicon-link"></a>'
    ].join('\n');


    // If an anchor template is specified in the options, use that instead.
    if (anchorOpts && anchorOpts.template) {
        anchorOpts.template = path.resolve(anchorOpts.template);
        anchorTemplate = require(anchorOpts.template);
    }

    headings.map(function (i, e) {
        var $e = $(e);
        var id = $e.attr('id');

        // // Anchor template
        var anchor = template(anchorTemplate, {
            id: id
        });
        $(this).prepend(anchor);

        // Adjust heading
        $(this).removeAttr('id').addClass('docs-heading');
        // $(this).addClass('docs-heading');

        // if ($(this).prev().children().hasClass('source-link')) {
        //     var sourceLink = $(this).prev().children('.source-link');
        //     $(this).append(sourceLink);
        // }
    });

    params.content = $.html();
    callback();
};

module.exports.options = {
    stage: 'render:post:page'
};
;
