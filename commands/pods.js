const del = require('del')
const sh = require('shell-exec')
const commandExists = require('command-exists')

module.exports = async function pods(runPods = false) {
  if (!runPods) {
    return
  }

  try {
    await commandExists('pod')
    console.log('cocoapods exists ✔')

    console.log('Removing Pods & Podfile.lock')
    console.log('Running pod install')
    await sh(`cd ios & rm -rf Pods Podfile.lock & pod install & cd ..`)

    console.log('iOS cleaned ✔')
  }

  catch(error) {
    console.error(error)
  }





}
