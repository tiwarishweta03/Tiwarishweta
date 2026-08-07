# Deploy

**Live:** https://tiwarishweta03.github.io/
**Repo:** https://github.com/tiwarishweta03/tiwarishweta03.github.io
**Pages:** main → /docs

```bash
npm run build:pages
git add docs
git commit --trailer "Co-authored-by: Cursor <cursoragent@cursor.com>" -m "chore: publish docs"
git push origin main
```

Always keep `index.vite.html` as the Vite source. `npm run dev` restores it to `index.html`.
