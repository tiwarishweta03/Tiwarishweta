import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const dist = join(root, 'dist')
const viteIndex = join(root, 'index.vite.html')

if (!existsSync(dist)) {
  console.error('dist/ missing — run build first')
  process.exit(1)
}
if (!existsSync(viteIndex)) {
  console.error('index.vite.html missing — keep the Vite source entry committed')
  process.exit(1)
}

function publishTo(target) {
  mkdirSync(target, { recursive: true })

  for (const name of ['assets', 'social', 'portraits']) {
    const from = join(dist, name)
    const to = join(target, name)
    if (existsSync(to)) rmSync(to, { recursive: true, force: true })
    if (existsSync(from)) cpSync(from, to, { recursive: true })
  }

  for (const name of [
    'index.html',
    'favicon.svg',
    'icons.svg',
    'ShwetaTiwariResume2026.pdf',
  ]) {
    const from = join(dist, name)
    if (existsSync(from)) cpSync(from, join(target, name))
  }

  const builtIndex = join(dist, 'index.html')
  if (existsSync(builtIndex)) cpSync(builtIndex, join(target, '404.html'))
  writeFileSync(join(target, '.nojekyll'), '')
}

// Pages is configured as main → /docs
publishTo(join(root, 'docs'))

// Always restore Vite entry so the next `npm run build` still bundles the app
cpSync(viteIndex, join(root, 'index.html'))

console.log('Published dist → docs/ and restored index.html from index.vite.html')
