// @ts-check
import { test, expect } from '@playwright/test'

const url = '/iframe.html?id='

test('primary buttons', async ({ page }) => {
  await page.goto(url + 'button--primary')
  await expect(page).toHaveScreenshot({ fullPage: true })
})

test('secondary buttons', async ({ page }) => {
  await page.goto(url + 'button--secondary')
  await expect(page).toHaveScreenshot({ fullPage: true })
})

test('login buttons', async ({ page }) => {
  await page.goto(url + 'button--login')
  await expect(page).toHaveScreenshot({ fullPage: true })
})
