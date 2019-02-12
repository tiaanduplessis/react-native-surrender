
<h1 align="center">react-native-surrender</h1>
<div align="center">
  <strong>CLI script that clears Watchman, removes node_modules and cleans cache and other goodies</strong>
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
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/tiaanduplessis/react-native-surrender.svg)" alt="Greenkeeper badge" />
  </a>
</div>
<br>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install



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
$ surrender --yarn
```

```sh
$ surrender --pnpm 
```

Run `gradlew clean` and remove build files in the android directory:

```sh
$ surrender --android
```

Or start the packager

```sh
$ surrender --start
```

Or clear and install pods

```sh
$ surrender --pods
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
