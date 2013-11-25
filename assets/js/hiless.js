/**!
 * hiless - LESS Syntax Highlighter
 * Copyright (c) 2010 Alexis Sellier
 */

(function () {

  // All elements which match this will be syntax highlighted.
  var selector = 'code';

  if (!Object.keys || ![].forEach) {
    return
  }


  /**
   * Syntax definition
   * The key becomes the class name of the <span> around the matched block of code.
   */
  var syntax = {
    'string'   : /("(?:(?!")[^\\]|\\.)*"|'(?:(?!')[^\\]|\\.)*')/g,
    'comment'  : /(\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/[^\n]*)/mg,
    'keyword'  : /\b(when)\b/g,
    'color'    : /(#[a-fA-F0-9]{8}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3})(\b|$)/mg, //(?=[^\{\}]*[\};])
    'nth'      : /(\([n0-9+-]+\))(?=[^\{\}]*\{)/g,
    'number'   : /\b((?:-?\d*\.?\d+)(?:px|%|em|pc|ex|in|deg|s|ms|pt|cm|mm)?)/g,
    'class'    : /([\.:]([\w-]+|@\{[\w-]+\}))(?=[^\{\};]*\{)/mg,
    'variable' : /(@@?-?[-a-z_0-9]+\s*)/g,
    'attribute': /(\*?-?[-a-z_0-9]+\s*)(?=:[^\{\};]*[\};])/mg,
    'selector' : /(\[[a-z]+)/g,
    'id'       : /(#[\w-]+)(?=[^\{\}]*\{)/mg,
    'mixin'    : /([#\.][\w-]+)(?=[^;\{\}]*[;\}])/g,
    'element'  : /\b([a-z]+[0-9]?)\b(?=[^\{\}\);]*\{)/mg,
    'special'  : /(! *important)\b/g,
  };


  var nodes = document.querySelectorAll(selector);
  var table = {};

  for (var i = 0, children; i < nodes.length; i++) {
    children = nodes[i].childNodes;

    for (var j = 0, str; j < children.length; j++) {
      code = children[j];

      if (code.length >= 0) { // It's a text node
        // Don't highlight command-line snippets
        if (!/^\$/.test(code.nodeValue.trim()) && !/^var /.test(code.nodeValue.trim())) {
          Object.keys(syntax).forEach(function (s) {
            code.nodeValue = code.nodeValue.replace(syntax[s], function (_, m) {
              return '\u00ab' + encode(s) + '\u00b7' + encode(m) + '\u00b7' + encode(s) + '\u00bb';
            });
          });
        }
      }
    }
  }
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].innerHTML = nodes[i].innerHTML.replace(/\u00ab(.+?)\u00b7(.+?)\u00b7\1\u00bb/g, function (_, name, value) {
      value = value.replace(/\u00ab.+?\u00b7/g, '').replace(/\u00b7.+?\u00bb/g, '');
      return '<span class="' + decode(name) + '">' + decode(value) + '</span>';
    });
  }

  // Encode ASCII characters to, and from Braille

  function encode(str, encoded) {
    table[encoded = str.split('').map(function (s) {
      if (s.charCodeAt(0) > 127) {
        return s;
      }
      return String.fromCharCode(s.charCodeAt(0) + 0x2800);
    }).join('')] = str;
    return encoded;
  }

  function decode(str) {
    if (str in table) {
      return table[str];
    } else {
      return str.trim().split('').map(function (s) {
        if (s.charCodeAt(0) - 0x2800 > 127) {
          return s;
        }
        return String.fromCharCode(s.charCodeAt(0) - 0x2800);
      }).join('');
    }
  }

})();