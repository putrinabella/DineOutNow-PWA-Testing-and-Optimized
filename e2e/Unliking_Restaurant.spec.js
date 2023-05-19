/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.swal2-popup', 5);
  I.click('.swal2-confirm');
  I.waitForVisible('.content-label');
});

Scenario('unlike on restaurant', async ({ I }) => {
  I.see('Favorite Restaurant', '.content-label');

  I.amOnPage('/');
  I.waitForElement('.swal2-popup', 5);
  I.click('.swal2-confirm');
  I.see('Explore Restaurant', '.content-label');
  I.waitForElement('.post-item');
  const firstRestaurantItem = locate('.post-item .title').first();
  const firstRestaurantItemTitle = await I.grabTextFrom(firstRestaurantItem);
  I.click(firstRestaurantItem);

  I.waitForElement('#likeButtonContainer');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.post-item');
  const firstFavoritedRestaurantItem = locate('.post-item .title').first();
  const firstFavoritedRestaurantItemTitle = await I.grabTextFrom(firstFavoritedRestaurantItem);
  assert.strictEqual(firstRestaurantItemTitle, firstFavoritedRestaurantItemTitle);

  I.amOnPage('/');
  I.waitForElement('.swal2-popup', 5);
  I.click('.swal2-confirm');
  I.see('Explore Restaurant', '.content-label');
  I.waitForElement('.post-item');
  I.click(firstRestaurantItem);

  I.waitForElement('#likeButtonContainer');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Favorite Restaurant', '.content-label');
});
