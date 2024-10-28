import { test, expect, Page } from "@playwright/test";

test("happy path", async ({ page }) => {
  let fixtures = getFixtures(page);

  await fixtures.given.pageLoaded();
  await fixtures.when.quiz.isOpened();
  await fixtures.then.quiz.initialQuestionIsShown();

  await fixtures.given.user.answersCorrectly();

  await fixtures.then.quiz.isCompleted();
});

function getFixtures(page: Page) {
  return {
    given: {
      pageLoaded: async () => {
        await page.goto("http://localhost:3000");
      },
      user: {
        answersCorrectly: async () => {
          await page.getByAltText("Temples & Crown").click();
          await page.getByText("No", { exact: true }).click();
          await page.getByText("No", { exact: true }).click();
        },
      },
    },
    when: {
      quiz: {
        isOpened: async () => {
          await page.click("text=Take the quiz");
        },
      },
    },
    then: {
      quiz: {
        initialQuestionIsShown: async () => {
          await expect(
            page.getByText(/Which image best matches your hair loss?/)
          ).toBeVisible();
        },
        isCompleted: async () => {
          await expect(page.getByText("Great news!")).toBeVisible();
        },
      },
    },
  };
}
