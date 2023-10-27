import { dirname } from 'path'
import { fileURLToPath } from 'url'
import grab from 'grab-github-release'
import { installLink } from 'link-bin-executable'

const __dirname = dirname(fileURLToPath(import.meta.url))

const name = 'newchanges'
const repository = 'prantlf/v-newchanges'
const platformSuffixes = {
  linux: 'linux',
  darwin: 'macos',
  win32: 'windows'
}

try {
  const { executable, version } = await grab({
    repository, platformSuffixes, targetDirectory: __dirname, unpackExecutable: true
  })
  console.log('downloaded and unpacked "%s" version %s', executable, version)

  await installLink({ name, packageDirectory: __dirname })
} catch (err) {
  console.error(err)
  process.exitCode = 1
}
