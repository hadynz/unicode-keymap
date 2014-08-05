'use strict';

var keys = require('../lib/unicode-keymap.js');

exports.unicodeKeymap = {
  'Keys map to their ASCII references': function(test) {
    test.equal(keys.ENTER, '\uE007', 'Enter key code maps to \uE007 in ASCII');
    test.equal(keys.ARROW_UP, '\uE013', 'Arrow up key code maps to \uE013 in ASCII');
    test.equal(keys.DELETE, '\uE017', 'Delete key code maps to \uE017 in ASCII');
    test.done();
  }
};
