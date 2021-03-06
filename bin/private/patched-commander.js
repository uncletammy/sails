/**
 * Module dependencies
 */

var _ = require('@sailshq/lodash');
var program = require('commander');


//
//
// Monkey-patch commander
//
//

// Allow us to display help(), but omit the wildcard (*) command.
program.Command.prototype.usageMinusWildcard = program.usageMinusWildcard = function() {
  program.commands = _.reject(program.commands, {
    _name: '*'
  });
  program.help();
};

// Force commander to display version information.
program.Command.prototype.versionInformation = program.versionInformation = function() {
  program.emit('version');
};

module.exports = program;
