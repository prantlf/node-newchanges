#!/usr/bin/env node

import debug from 'debug'
import { access, symlink, unlink } from 'fs/promises'
import { platform } from 'os'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const exists = file => access(file).then(() => true, () => false)
const log = debug('newchanges')

try {
  // installed locally
  let pkg = join(__dirname, '..', 'node-newchanges')
  // installed globally
  if (!await exists(pkg)) pkg = join(__dirname, '..', 'lib', 'node_modules', 'node-newchanges')
  if (await exists(pkg)) {
    const exe = join(pkg, platform() != 'win32' ? 'newchanges' : `newchanges.exe`)
    log('exe "%s"', exe)
    if (!await exists(exe)) throw new Error('missing executable')
    const link = join(__dirname, 'newchanges')
    log('unlink "%s"', link)
    await unlink(link)
    log('link "%s"', link)
    await symlink(exe, link, 'junction')
    console.log('installation finished, re-run the same command')
  }
} catch (err) {
  console.error(err)
  process.exitCode = 1
}
