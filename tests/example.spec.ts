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

  test('hero shows full name large', async ({ page }) => {
    await page.goto('/')
    const name = page.getByTestId('hero-name')
    await expect(name).toBeVisible()
    await expect(name).toContainText('Shweta')
    await expect(name).toContainText('Tiwari')
  })

  test('does not show Faridabad or Haryana', async ({ page }) => {
    await page.goto('/')
    const body = await page.locator('body').innerText()
    expect(body.toLowerCase()).not.toContain('faridabad')
    expect(body.toLowerCase()).not.toContain('haryana')
  })

  test('proof carousel has no portrait photos', async ({ page }) => {
    await page.goto('/')
    const carousel = page.getByTestId('proof-carousel')
    await expect(carousel).toBeVisible()
    await expect(carousel.locator('img')).toHaveCount(0)
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
