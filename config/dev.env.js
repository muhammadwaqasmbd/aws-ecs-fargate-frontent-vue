'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"http://djang-djang-3cj0sdcdtehj-1662529209.us-west-2.elb.amazonaws.com"'
})
