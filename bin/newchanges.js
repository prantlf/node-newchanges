#!/usr/bin/env node

import { spawn } from 'child_process'
import debug from 'debug'
import { access, lstat, symlink, unlink } from 'fs/promises'
import { platform } from 'os'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const exists = file => access(file).then(() => true, () => false)
const log = debug('newchanges')

async function findExe(name) {
  const exe = join(__dirname, '..', platform() != 'win32' ? name : `${name}.exe`)
  if (!await exists(exe)) {
    log('exe "%s"', exe)
    throw new Error('missing executable')
  }
  return exe
}

function runExe(exe) {
  const [,, ...args] = process.argv
  log('run "%s" with %d args', exe, args.length)
  return new Promise((resolve, reject) =>
    spawn(exe, args, { stdio: 'inherit' })
      .on('error', reject)
      .on('exit', code => code ? reject(code) : resolve())
  )
}

async function findBin() {
  // installed locally
  let bin = join(__dirname, '..', '..', '.bin')
  log('local bin "%s"', bin)
  // installed globally
  if (!await exists(bin)) {
    bin = join(__dirname, '..', '..', '..', '..', 'bin')
    log('global bin "%s"', bin)
    // installed dependencies of this package
    if (!await exists(bin)) {
      bin = join(__dirname, '..', 'node_modules', '.bin')
      log('package bin "%s"', bin)
    }
    if (!await exists(bin)) throw new Error('cannot find bin directory')
  }
  return bin
}

async function replaceLink(bin, name, exe) {
  const link = join(bin, name)
  log('stat "%s"', link)
  const { mode } = await lstat(link)
  if (mode & 0o222) {
    log('unlink "%s"', link)
    await unlink(link)
    log('link "%s"', link)
    await symlink(exe, link, 'junction')
    return true
  } else {
    log('not writable')
  }
}

async function runAndReplaceLink(name) {
  const exe = await findExe(name)
  if (platform() != 'win32') {
    const bin = await findBin()
    await replaceLink(bin, name, exe)
  }
  await runExe(exe)
}

function reportError(err) {
  let code
  if (typeof err !== 'number') {
    console.error(err)
    code = 1
  } else {
    code = err
  }
  process.exitCode = code
}

try {
  await runAndReplaceLink('newchanges')
} catch (err) {
  reportError(err)
}
