Feature('unliking');

Before(({ I }) => {
    I.amOnPage('#/like');
});

const emptyFavoriteRestoText = 'Tidak ada Resto yang disukai';

Scenario('unliking one restaurant', async ({ I }) => {
    I.amOnPage('/');
   
    I.seeElement('.movie__title a');
   
    const firstResto = locate('.movie__title a').first();
    I.click(firstResto);
   
    I.seeElement('#likeButton');
    I.click('#likeButton');
    
    I.amOnPage('#/like');
    I.seeElement('.movies');
    
    firstRestoTitle = await I.grabTextFrom('.movie__title a');
    I.click(firstRestoTitle);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('#/like');
    I.seeElement('#movies');
    I.see(emptyFavoriteRestoText, '#movies');
  });
  