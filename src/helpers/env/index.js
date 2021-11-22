const ENVIRONMENT_DEVELOPMENT = "development"
const ENVIRONMENT_STAGING = "staging"
const ENVIRONMENT_PRODUCTION = "production"

export function isDevelopment() {
  return process.env.NODE_ENV.toLowerCase() === ENVIRONMENT_DEVELOPMENT
}

export function showDebugData() {
  const messages = []
  const options = "background: #111; color: #f14668; padding: 8px"

  messages.push(`Environment: ${process.env.NODE_ENV}`)

  messages.forEach((message) => {
    console.log(`%c${message}`, options)
  })
}
