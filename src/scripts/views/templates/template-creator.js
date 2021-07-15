import CONFIG from '../../globals/config'

const createRestoDetailTemplate = (restaurant) => {
  let template = `
    <h2 class="movie__title">${restaurant.name}</h2>
    <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="movie__info">
    <h3>Information</h3>    
        <h4>&#x1F4CD Alamat</h4>
        <p>${restaurant.address}, <b>${restaurant.city}</b> , Indonesia</p>
        <h4>Kategori</h4> <p> ` + restaurant.categories.map(element => element.name) +
        `</p> <h4>Description</h4>
        <p>${restaurant.description} minutes</p>
        <h4>Menu</h4>
        <p>&#127858; <b>Makanan</b> : ${restaurant.menus.foods.map(element => element.name)}+
        </p>
        <p>&#127865; <b>Minuman</b> : ${restaurant.menus.drinks.map(element => element.name)}
        </p>
    </div>
    <div class="resto_review_container">
    
    
        <h3>Customer Review</h3>
    `

  for (let i = 0; i < restaurant.customerReviews.length; i++) {
    template += `
            <div class="resto_review">
            <b>${restaurant.customerReviews[i].name}</b>
            <p> ${restaurant.customerReviews[i].date}</p>
            <p>"${restaurant.customerReviews[i].review}"</p>
            </div>
            `
  }

  template += '</div>'

  return template
}

const createRestoItemTemplate = (resto) => `
     <div class="movie-item">
    <div class="movie-item__header">
        <img class="movie-item__header__poster" alt="${resto.name}"
            src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}">
        <div class="movie-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="movie-item__content">
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
`

const createLikeRestoButtonTemplate = () => `
    <button aria-label="like this resto" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>`

const createUnlikeRestoButtonTemplate = () => `
    <button aria-label="unlike this resto" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`
export {
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createRestoItemTemplate
}
