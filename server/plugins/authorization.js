/* global Config */
'use strict'

module.exports = {
  register: require('hapi-authorization'),
  options: {
    roles: Config.roles
  }
}
