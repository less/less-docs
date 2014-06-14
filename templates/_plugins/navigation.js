/**
 * Heavily Adapted From https://github.com/assemble/assemble-contrib-nav
 */

var cheerio = require('cheerio');

module.exports = function navigationPlugin(params, callback) {
  'use strict';

  // load current page content
  var $ = cheerio.load(params.content);

  // get all the anchor tags from inside the headers
  var anchors = $('h1[id],h2[id],h3[id]'),
    nav = [],
    duplicateChecker = {},
    dupesFound = false;

  function findLocation(nav, depth) {
    if (depth === 1) {
      return nav;
    }

    var loc = nav[nav.length - 1];
    if (!loc) {
      loc = {
        children: []
      };
      nav.push(loc);
    } else if (!loc.children) {
      loc.children = [];
    }
    return findLocation(loc.children, depth - 1);
  }

  anchors.map(function (i, e) {
    var $e = $(e);
    var text = $e.text().trim();
    var link = $e.attr("id");
    var node = {
      text: text,
      link: link,
      $e: $e
    };
    var header = parseInt(e.name.replace(/h/gi, ''), 10);
    var depth = header <= 1 ? 1 : 2;
    var location = findLocation(nav, depth);
    location.push(node);
  });

  function toHtml(nav, first, sParentLink) {
    return "<ul class=\"nav" + (first ? " sidenav" : "") + "\">" + nav.map(function (loc) {

      loc.link = (sParentLink ? sParentLink + "-" : "") + loc.link;
      loc.$e.attr("id", loc.link);

      if (!duplicateChecker[loc.link]) {
        duplicateChecker[loc.link] = loc;
      } else {
        console.error("\nDuplicate found, names are " + duplicateChecker[loc.link].text + " and " + loc.text + " with link " + loc.link);
        dupesFound = true;
      }

      return '<li><a href="#' + loc.link + '">' + loc.text + '</a>' +
        (loc.children ? toHtml(loc.children, false, loc.link) : "") + '</li>';
    }).join("") + "</ul>";
  }

  if (dupesFound) {
    throw new Error("Stopping because of duplicates");
  }

  $("#navigation").append(toHtml(nav, true));

  params.content = $.html();
  callback();
};

module.exports.options = {
  stage: 'render:post:page'
};;