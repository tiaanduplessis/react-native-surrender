
<h1 align="center">react-native-surrender</h1>
<div align="center">
  <strong>CLI script that clears Watchman, removes node_modules and cleans cache using npm or yarn</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/react-native-surrender">
    <img src="https://img.shields.io/npm/v/react-native-surrender.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/react-native-surrender">
  <img src="https://img.shields.io/npm/dm/react-native-surrender.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/react-native-surrender">
    <img src="https://img.shields.io/travis/tiaanduplessis/react-native-surrender.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-surrender/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/react-native-surrender.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/react-native-surrender/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/react-native-surrender.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-surrender/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/react-native-surrender.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20react-native-surrender!%20https://github.com/tiaanduplessis/react-native-surrender%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/react-native-surrender.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/react-native-surrender/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/react-native-surrender.svg)](https://greenkeeper.io/)

```sh
$ npm install -g react-native-surrender
# OR
$ yarn global add react-native-surrender
```

## Usage

```sh
$ surrender
```

Is equivalent to running 

```
watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules && npm install && npm cache clean --force
```

in the current directory.

Optionally you can use `yarn` or `pnpm` as the packager:

```sh
$ surrender --yarn # watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules && yarn && yarn cache clean
```

```sh
$ surrender --pnpm # watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules && pnpm install && pnpm cache clean
```

Run `gradlew clean` in the android directory:

```sh
$ surrender --android # watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules && npm install && npm cache clean --force && cd android & gradlew clean & cd .. 
```

Or start the packager

```sh
$ surrender --start # watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules && npm install && npm cache clean --force  && npm start --reset-cache
```

Or clear and install pods

```sh
$ surrender --pods #  watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules && npm install && npm cache clean --force && cd ios & rm -rf Pods Podfile.lock & pod install & cd ..
```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/react-native-surrender/issues).

## License

Licensed under the MIT License.
