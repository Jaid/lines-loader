/** @module lines-loader */

import {getOptions, parseQuery} from "loader-utils"
import validateOptions from "schema-utils"

import optionsSchema from "./optionsSchema.yml"

/**
 * @param {string} source
 * @return {string}
 */
export default function (source) {
  const options = {
    sort: false,
    ...getOptions(this),
    ...this.resourceQuery ? parseQuery(this.resourceQuery) : undefined,
  }
  validateOptions(optionsSchema, options, _PKG_TITLE)
  const lines = source.split(/[\n\r]/)
  let processedLines = lines
    .map(line => line.trim())
    .filter(line => line.length)
  if (options.sort) {
    processedLines = processedLines.sort()
  }
  return `export default ${JSON.stringify(processedLines)}`
}