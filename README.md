# New Changes (Changelog) Generator for Node.js

[![Latest version](https://img.shields.io/npm/v/newchanges)
 ![Dependency status](https://img.shields.io/librariesio/release/npm/newchanges)
](https://www.npmjs.com/package/newchanges)

Creates or updates the changelog file from commit messages formatted according to [Conventional Commits]. Installs [newchanges] in [Node.js] environments.

## Installation

This package is usually installed globally, so that you can use the `newchanges` executable from any directory. You can install it during the first usage with `npx` too:

```sh
$ npm i -g newchanges
$ npx newchanges ...
```

Make sure, that you use [Node.js] version 18 or newer.

## Usage

    Usage: newchanges [options] [commands]

    Commands:
      init                      generate a config file with defaults

    Options:
      -c|--config <name>        file name or path of the config file
      -l|--log <file>           file to read from and write to (default: to find)
      -t|--tag-prefix <prefix>  expect git tags prefixed (default: "v")
      -h|--heading <level>      level of the log entry headings (default: 2)
      -l|--logged-types <types> change types to include in the log
      -f|--from <hash>          start at a specific commit (default: last change)
      -t|--to <hash>            end at a specific commit (default: HEAD)
      -u|--try-unshallow        try fetch missing commits and tags if not found
      -p|--path <path>          consider only specific path (default: git root)
      -r|--repo-url <url>       URL of the git repository (default: from git)
      -o|--override-version <v> set the new version to the specified value
      -e|--write-changes <file> write the new changes to the specified file
      -w|--write-version <file> write the version numnber to the specified file
      -a|--assume-patch         assume a patch release for insignificant commits
      -0|--bump-major-0         bump the major version also if it is 0
      -d|--dry-run              print the new changes on the console only
      -N|--no-failure           do not fail if the change log was not updated
      -i|--print-last           print changes for the last version on the console
      -q|--quiet                omit the summary note on the standard output
      -v|--verbose              print the new changes on the console too
      -V|--version              print the version of the executable and exits
      -h|--help                 print the usage information and exits

    Default change types to include in the log: "feat", "fix", "perf". If
    the commit message includes the note "BREAKING CHANGE", it will be
    included in the log regardless of its type.

    Examples:
      $ newchanges -f v0.1.0 -t v0.2.0
      $ newchanges -d

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.  Add unit tests for any new or changed functionality. Lint and test your code using Grunt.

## License

Copyright (c) 2023 Ferdinand Prantl

Licensed under the MIT license.

[Conventional Commits]: https://www.conventionalcommits.org/
[newchanges]: https://github.com/prantlf/node-newchanges
[Node.js]: http://nodejs.org/
