#!/usr/bin/env node

const fs = require('fs')
const replace = require('replace-in-file')
const { Command, flags } = require('@oclif/command')

class PackageLockSanitizer extends Command {
  async run() {
    const {flags} = this.parse(PackageLockSanitizer)
    const replaceOptions = {
        files: process.cwd() + '/' + flags.lockfile,
        from: /(https?[^"@]+)(\/@.+|\/[^/]+\/-\/.+tgz)/g,
        to: flags.registry + '$2'
    }
    console.log("Rewrote registry URLs in ", replace.sync(replaceOptions).join(', '))
  }
}

PackageLockSanitizer.description = "Bulk change all NPM registry URLs in package-lock.json."

PackageLockSanitizer.flags = {
  version: flags.version(),
  help: flags.help(),
  
  registry: flags.string({
    char: 'r',
    default: "https://registry.npmjs.org",
    description: 'NPM registry to use'
  }),

  lockfile: flags.string({
    char: 'l',
    default: "package-lock.json",
    description: "File to process"
  }),
}

module.exports = PackageLockSanitizer
