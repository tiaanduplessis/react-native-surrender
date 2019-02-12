#!/usr/bin/env node
'use strict'

const parse = require('get-them-args')
const commandExists = require('command-exists')

const args = parse(process.argv)

const androidCommands = require('./commands/android')
const podCommands = require('./commands/pods')
const rnCommands = require('./commands/rn')

async function commandsExist () {
  await commandExists('watchman')
  console.log('watchman exists ✔')

  if (args.pnpm) {
    await commandExists('pnpm')
    console.log('pnpm exists ✔')
  } else if (args.yarn) {
    await commandExists('yarn')
    console.log('yarn exists ✔')
  } else {
    await commandExists('npm')
    console.log('npm exists ✔')
  }
}

(async () => {
  try {
    await commandsExist()

    let packager = 'npm'

    if (args.pnpm) {
      packager = 'pnpm'
    }

    if (args.yarn) {
      packager = 'yarn'
    }

    await podCommands(args.pods)
    await androidCommands(args.android)
    await rnCommands(packager, args.start)
  } catch (e) {
    console.error(e)
  }
})()

process.on('SIGTERM', function () {
  process.exit()
})
