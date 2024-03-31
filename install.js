import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { grab } from 'grab-github-release'
import { installLink } from 'link-bin-executable'

const __dirname = dirname(fileURLToPath(import.meta.url))

try {
  const { executable, version } = await grab({
    repository: 'prantlf/v-newchanges', targetDirectory: __dirname, unpackExecutable: true
  })
  console.log('downloaded and unpacked "%s" version %s', executable, version)

  await installLink({ name: 'newchanges', packageDirectory: __dirname })
} catch (err) {
  console.error(err)
  process.exitCode = 1
}
