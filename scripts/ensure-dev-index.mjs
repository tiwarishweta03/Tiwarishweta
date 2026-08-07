import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const viteIndex = join(root, 'index.vite.html')
const rootIndex = join(root, 'index.html')

if (!existsSync(viteIndex)) {
  console.error('index.vite.html missing — cannot restore Vite entry for local dev')
  process.exit(1)
}

copyFileSync(viteIndex, rootIndex)
console.log('Restored index.html from index.vite.html for local Vite dev')
