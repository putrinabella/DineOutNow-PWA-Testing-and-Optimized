Feature('Add Review');

Scenario('Review on a restaurant', async ({ I }) => {
  const date = +new Date();
  const name = `test-name-${date}`;
  const review = `test-review-${date}`;

  I.amOnPage('/');
  I.waitForElement('.swal2-popup', 5);
  I.click('.swal2-confirm');
  I.see('Explore Restaurant', '.content-label');
  I.waitForElement('.post-item');
  const firstRestaurantItem = locate('.post-item .title').first();
  I.click(firstRestaurantItem);

  // Detail Page
  I.waitForElement('.add-review-form');
  I.fillField('.input-review-author', name);
  I.fillField('.input-review-text', review);
  I.click('.button-submit-review');

  I.waitForElement('.swal2-popup', 5);
  I.click('.swal2-confirm');
  I.see(name, '.name');
  I.see(review, '.review');
});
