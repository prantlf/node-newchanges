import debug from 'debug'
import { access, symlink, unlink } from 'fs/promises'
import { basename, dirname, join } from 'path'
import { fileURLToPath } from 'url'
import grab from 'grab-github-release'

const __dirname = dirname(fileURLToPath(import.meta.url))
const exists = file => access(file).then(() => true, () => false)
const log = debug('newchanges')

const repository = 'prantlf/v-newchanges'
const platformSuffixes = {
  linux: 'linux',
  darwin: 'macos',
  win32: 'windows'
}

try {
  const { INIT_CWD: root } = process.env
  if (!root) throw new Error('not running during npm install')
  const { executable, version } = await grab(
    { repository, platformSuffixes, targetDirectory: __dirname, unpackExecutable: true })
  console.log('downloaded and unpacked "%s" version %s', executable, version)
  const link = join(root, 'node_modules', '.bin', basename(executable))
  if (await exists(link)) {
    log('unlink "%s"', link)
    await unlink(link)
  }
  log('link "%s"', link)
  await symlink (executable, link, 'junction')
} catch (err) {
  console.error(err)
  process.exitCode = 1
}
