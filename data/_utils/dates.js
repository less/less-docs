var path = require('path');

var re = /(\d{4})-(\d{2})-(\d{2})-(.+)/;

var extname = function(str) {
  return path.basename(str, path.extname(str));
};

var year = exports.year = function(str) {
  return extname(str).replace(re, '$1');
};

var month = exports.month = function(str) {
  return extname(str).replace(re, '$2');
};

var day = exports.day = function(str) {
  return extname(str).replace(re, '$3');
};

var slug = exports.slug = function(str) {
  return extname(str).replace(re, '$4');
};

exports.toPost = function(str) {
  return extname(str).replace(re, '$1/$2/$3/$4');
};
