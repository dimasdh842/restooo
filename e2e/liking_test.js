Feature('liking');

Before(({ I }) => {
    I.amOnPage('#/like');
});

const emptyFavoriteRestoText = 'Tidak ada Resto yang disukai';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#movies');
  I.see(emptyFavoriteRestoText, '#movies');
});

Scenario('liking one restaurant', async ({ I }) => {
I.see(emptyFavoriteRestoText, '#movies');
 
  I.amOnPage('/');
 
  I.seeElement('.movie__title a');
 
  const firstResto = locate('.movie__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
 
  I.seeElement('#likeButton');
  I.click('#likeButton');
 
  I.amOnPage('/#/like');
  I.seeElement('.movies');
  const likedRestoTitle = await I.grabTextFrom('.movie__title');
 
  const assert = require('assert');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
