// Init
const hazel = require('./hazel')

const {
  INTERVAL: interval,
  ACCOUNT: account,
  REPOSITORY: repository,
  PRE: pre,
  TOKEN: token,
  URL: PRIVATE_BASE_URL,
  NOW_URL
} = process.env

const url = NOW_URL || PRIVATE_BASE_URL
const private_base_url = process.env.PRIVATE_BASE_URL || PRIVATE_BASE_URL || process.env.URL
const project_id = process.env.PROJECT_ID || null

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url,
  private_base_url,
  project_id
})
