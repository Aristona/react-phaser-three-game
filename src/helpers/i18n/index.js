import {
  LANGUAGE_EN,
  LANGUAGE_DEFAULT,
  MISSING_TRANSLATION_MESSAGE,
} from "constants"

const languages = {
  [LANGUAGE_EN]: require("translations/en-GB.json"),
}

export function translate(key, params = {}) {
  const locale = store.getState().app.language
  key = key.toLowerCase()

  let translation = languages[locale][key]

  if (!translation) {
    console.error(`Translation key not found for locale ${locale} and key ${key}`)
    translation = key
  }

  const errorMessage = `${MISSING_TRANSLATION_MESSAGE}: ${key}`
  const replacements = Object.keys(params)

  // We will replace each parameter (e.g :name) with actual values.
  replacements.forEach(key => {
    translation = translation.replace(`:${key}`, params[key])
  })

  return translation || errorMessage
}