// @ts-check
import { test, expect } from '@playwright/test';

const IMAGE_PREFIX = 'https://cataas.com';
const LOCAL_URL = 'http://localhost:5174/';

test('app shows', async ({ page }) => {
  await page.goto(LOCAL_URL);

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imgSrc = await image.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imgSrc?.startsWith(IMAGE_PREFIX)).toBeTruthy();
});
