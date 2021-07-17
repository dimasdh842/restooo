Feature('Liking Movies');
 
// Before(({ I }) => {
    // });
    
    const emptyFavoriteRestoText = 'Empty favorite Resto';
    
Scenario('showing empty favorite restaurant', ({ I }) => {
  I.amOnPage('/#/like');
  I.seeElement('#movies');
  I.see(emptyFavoriteRestoText, '#movies');
});