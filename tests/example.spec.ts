import { expect, test } from '@playwright/test'

test.describe('Shweta portfolio', () => {
  test('home loads with hire CTA and proof section', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    await expect(page.getByTestId('hire-me')).toBeVisible()
    await expect(page.getByTestId('full-resume')).toBeVisible()
    await expect(page.getByTestId('impact-section')).toBeVisible()
    await expect(page.getByRole('heading', { name: /Proof, not promises/i })).toBeVisible()
  })

  test('does not repeat full name excessively in hero', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('#top')
    const text = await hero.innerText()
    const matches = text.match(/Shweta Tiwari/gi) ?? []
    expect(matches.length).toBeLessThanOrEqual(1)
  })

  test('does not show Faridabad or Haryana', async ({ page }) => {
    await page.goto('/')
    const body = await page.locator('body').innerText()
    expect(body.toLowerCase()).not.toContain('faridabad')
    expect(body.toLowerCase()).not.toContain('haryana')
  })

  test('proof carousel shows portrait imagery', async ({ page }) => {
    await page.goto('/')
    const carousel = page.getByTestId('proof-carousel')
    await expect(carousel).toBeVisible()
    await expect(carousel.locator('img').first()).toBeVisible()
  })

  test('theme toggle switches data-theme', async ({ page }) => {
    await page.goto('/')
    const root = page.locator('html')
    const before = await root.getAttribute('data-theme')
    await page.getByRole('button', { name: /Switch to (dark|light) theme/i }).click()
    const after = await root.getAttribute('data-theme')
    expect(after).toBeTruthy()
    expect(after).not.toEqual(before)
  })
})
