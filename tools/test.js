import { test, expect } from '@playwright/test'

const url = '/iframe.html?id='

export async function visualTest(variant, { title = {}, options = undefined } = {}) {
  test(title || variant, async ({ page }) => {
    await page.goto(url + variant)
    await expect(page).toHaveScreenshot(options || { fullPage: true })
  })
}
