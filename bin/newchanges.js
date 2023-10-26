#!/usr/bin/env node

// import debug from 'debug'
import { access, symlink, unlink } from 'fs/promises'
import { platform } from 'os'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const exists = file => access(file).then(() => true, () => false)
// const log = debug('newchanges')

try {
  // installed locally
  let bin = join(__dirname, '..', '..', '.bin')
  console.log('bin "%s"', bin)
  // installed globally
  if (!await exists(bin)) bin = join(__dirname, '..', '..', '..', '..', 'bin')
  console.log('bin "%s"', bin)
  // installed dependencies of this package
  if (!await exists(bin)) bin = join(__dirname, '..', 'node_modules', '.bin')
  console.log('bin "%s"', bin)
  if (!await exists(bin)) throw new Error('cannot find bin directory')

  const exe = join(__dirname, '..', platform() != 'win32' ? 'newchanges' : `newchanges.exe`)
  console.log('exe "%s"', exe)
  if (!await exists(exe)) throw new Error('missing executable')
  const link = join(bin, 'newchanges')
  console.log('unlink "%s"', link)
  await unlink(link)
  console.log('link "%s"', link)
  await symlink(exe, link, 'junction')
  console.log('installation finished, re-run the same command')
} catch (err) {
  console.error(err)
  process.exitCode = 1
}
