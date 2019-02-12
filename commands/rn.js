
const sh = require('shell-exec')

module.exports = async function rn(packager = 'npm', start = false) {
  const isYarn = packager === 'yarn'

  const commands = {
    reset: `watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules`,
    install: `${packager}${isYarn ? '' : ' install'}`,
    cleanCache: `&& ${packager} cache clean${isYarn ? '' : ' --force'}`,
    start: start ? `&& ${packager} start --reset-cache` : ''
  }

  try {

    console.log(`Running ${commands.reset}`)
    await sh(commands.reset)

    console.log(`Running install with ${packager}`)
    await sh(commands.install)

    console.log(`Cleaning ${packager} cache`)
    await sh(commands.cleanCache)

    await sh(commands.start)

    console.log('React Native cleaned ✔')
  } catch(error) {
    console.error(error)
  }
}
