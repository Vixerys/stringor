'use strict';

/**
 * @param {number} length
 */

var randomstring = function(length) {
  var result = '';
  var strings = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&*+,-.';
  var stringslength = strings.length;
  for ( var i = 0; i < length; i++ ) {
    result += strings.charAt(Math.floor(Math.random() * stringslength));
  }
  return result;
};

module.exports = {
  randomstring: randomstring
}