## [2.0.1](https://github.com/prantlf/node-newchanges/compare/v2.0.0...v2.0.1) (2023-12-13)


### Bug Fixes

* Run postinstall with the.js file extension ([6617dde](https://github.com/prantlf/node-newchanges/commit/6617dde856e1cb512c1107b25d93224efd9994fd))
* Upgrade dependencies ([be22d9e](https://github.com/prantlf/node-newchanges/commit/be22d9eb10349d08a7e22cc6572d826c1404aec6))

# [2.0.0](https://github.com/prantlf/node-newchanges/compare/v1.0.6...v2.0.0) (2023-12-12)


### Bug Fixes

* Upgrade dependencies ([56710cf](https://github.com/prantlf/node-newchanges/commit/56710cf1fecb0b8bd4b02be898673f02796d8ad5))


### BREAKING CHANGES

* Instead of symlinks, wrappers .cmd and .ps1
are created in .bin on Windows. Although it should not affect
any scenario, it is a change in the file names nevertheless.

## [1.0.6](https://github.com/prantlf/node-newchanges/compare/v1.0.5...v1.0.6) (2023-11-04)


### Bug Fixes

* Upgrade link-bin-executable ([fd0151c](https://github.com/prantlf/node-newchanges/commit/fd0151c32a1ace83f552ab6568266b53a6fe83fb))

## [1.0.5](https://github.com/prantlf/node-newchanges/compare/v1.0.4...v1.0.5) (2023-10-27)


### Bug Fixes

* Perform the installation steps using link-bin-executable ([a14c31b](https://github.com/prantlf/node-newchanges/commit/a14c31be9a8bea896e9cb5ff3022f891beb2afea))

## [1.0.4](https://github.com/prantlf/node-newchanges/compare/v1.0.3...v1.0.4) (2023-10-27)


### Bug Fixes

* Retarget symlink only on non-windows, rerun exe otherwise ([3fd5d90](https://github.com/prantlf/node-newchanges/commit/3fd5d909eb4d3472a77e21ed4eb835dbf9e8be00))

## [1.0.3](https://github.com/prantlf/node-newchanges/compare/v1.0.2...v1.0.3) (2023-10-26)


### Bug Fixes

* Add debug logging for bin directory lookup ([5b72a5f](https://github.com/prantlf/node-newchanges/commit/5b72a5f3de9eeb3dc8435f0728ead1a06635bdaf))

## [1.0.2](https://github.com/prantlf/node-newchanges/compare/v1.0.1...v1.0.2) (2023-10-26)


### Bug Fixes

* Try retargetting the symlink on the first run ([700db03](https://github.com/prantlf/node-newchanges/commit/700db038a20881e515077638ab37297faf4a5dc7))

## [1.0.1](https://github.com/prantlf/node-newchanges/compare/v1.0.0...v1.0.1) (2023-10-26)


### Bug Fixes

* Retarget the symlink to the executable on the first run ([7d92ab3](https://github.com/prantlf/node-newchanges/commit/7d92ab3845629966c0cbd1d26a7ea874b337dc31))

# 1.0.0 (2023-10-26)


### Bug Fixes

* Create symlink properly when installed globally ([60f7861](https://github.com/prantlf/node-newchanges/commit/60f786189f43428292e33cdb2ad746091c11b00a))

## 2023-10-26 (0.0.1)

Initial release
