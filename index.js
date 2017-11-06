#!/usr/bin/env node
'use strict'

const parse = require('get-them-args')
const commandExists = require('command-exists')
const sh = require('shell-exec')

const args = parse(process.argv)

async function commandsExist () {
  console.log('Checking if commands exist')
  try {
    await commandExists('watchman')
    console.log('watchman exists ✔')

    if (args.pnpm) {
      await commandExists('pnpm')
      console.log('pnpm exists ✔')
    } else {
      if (args.yarn) {
        await commandExists('yarn')
        console.log('yarn exists ✔')
      } else {
        await commandExists('npm')
        console.log('npm exists ✔')
      }
    }

    if (args.pods) {
      await commandExists('pod')
      console.log('cocoapods exists ✔')
    }
  } catch (error) {
    console.error(error)
  }
}

commandsExist()
  .then(runCommand)
  .catch(console.error)

function getCommand (packager) {
  const reset = `watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules`
  const install = `&& ${packager}${args.yarn ? '' : ' install'}`
  const cleanCache = `&& ${packager} cache clean${args.yarn ? '' : ' --force'}`
  const start = args.start ? `&& ${packager} start --reset-cache` : ''
  const pods = args.pods
    ? `&& cd ios & rm -rf Pods Podfile.lock & pod install & cd ..`
    : ''
  const android = args.android ? '&& cd android & gradlew clean & cd ..' : ''
  const cmd = `${reset} ${install} ${cleanCache} ${pods} ${android} ${start}`
  return cmd
}

function runCommand () {
  let packager = 'npm'
  if (args.pnpm) packager = 'pnpm'
  else if (args.yarn) packager = 'yarn'
  const cmd = getCommand(packager)
  console.log(`Running command: ${cmd}`)
  return sh(cmd).catch(console.error)
}

process.on('SIGTERM', function () {
  process.exit()
})
