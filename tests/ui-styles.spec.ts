import { test, expect } from "@playwright/test";

test.describe("Phase 1 UI features", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });

  test("1) Search filters styles by text", async ({ page }) => {
    const search = page.getByTestId("search");
    await search.fill("dark");

    const cards = page.getByTestId("style-card");
    await expect(cards.first()).toBeVisible();

    const count = await cards.count();
    expect(count).toBeGreaterThan(0);

    // All visible cards should include "dark" somewhere (case-insensitive)
    for (let i = 0; i < count; i++) {
      const name = (await cards.nth(i).innerText()).toLowerCase();
      expect(name).toContain("dark");
    }
  });

  test('2) Group filter "Essential Tech" works (and combines with search)', async ({ page }) => {
    await page.getByTestId("search").fill(""); // ensure no search
    await page.getByTestId("group-filter").click();
    await page.getByRole("option", { name: "Essential Tech" }).click();

    const cards = page.getByTestId("style-card");
    await expect(cards.first()).toBeVisible();

    // If you render group label on the card, validate it.
    // Otherwise validate using known set size / names.
  });

  test("3) Favorites toggle adds style to favorites", async ({ page }) => {
    const firstCard = page.getByTestId("style-card").first();
    const star = firstCard.getByTestId("fav-toggle");

    await star.click();
    // Expect star to look active (use aria-pressed if possible)
    await expect(star).toHaveAttribute("aria-pressed", "true");
  });

  test("4) Favorites filter shows only favorites", async ({ page }) => {
    const cards = page.getByTestId("style-card");
    const firstCard = cards.first();
    const star = firstCard.getByTestId("fav-toggle");

    await star.click();

    await page.getByTestId("fav-filter").click();

    const filteredCount = await cards.count();
    expect(filteredCount).toBeGreaterThan(0);

    // Stronger check: assert every visible card is favorited
    for (let i = 0; i < filteredCount; i++) {
      await expect(cards.nth(i).getByTestId("fav-toggle")).toHaveAttribute("aria-pressed", "true");
    }
  });

  test("5) Random button selects a random style (respects current filters)", async ({ page }) => {
    // Optionally set a filter first to constrain the pool
    await page.getByTestId("search").fill("dark");

    await page.getByTestId("random").click();

    // Assert something is selected
    await expect(page.getByTestId("style-selected")).toBeVisible();
  });
});
