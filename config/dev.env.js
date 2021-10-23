'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"http://djang-djang-1jbf2yejlfw2x-1817461688.us-west-2.elb.amazonaws.com"'
})
