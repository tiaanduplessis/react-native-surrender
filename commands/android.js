
const del = require('del')
const sh = require('shell-exec')

module.exports = async function android(runAndroid = false) {
  if (!runAndroid) {
    return
  }

  try {
    console.log('Deleting ./android/build')
    await del('./android/build')

    console.log('Deleting ./android/app/build')
    await del('./android/app/build')

    console.log('Deleting .iml files')
    await del('./android/**/*.iml')

    console.log('Running gradle clean')
    await sh(`cd android & gradlew clean & cd ..`)

    console.log('Android cleaned ✔')
  } catch(error) {
    console.error(error)
  }
}
