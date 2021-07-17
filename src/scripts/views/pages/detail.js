import UrlParser from '../../routes/url-parser'
import RestoDbSource from '../../data/resto-source'
import { createRestoDetailTemplate } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator'

const Detail = {
  async render () {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `
  },
  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const { restaurant } = await RestoDbSource.detailResto(url.id)
    const restoContainer = document.querySelector('#movie')
    restoContainer.innerHTML = createRestoDetailTemplate(restaurant)
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        description: restaurant.description

      }
    })
  }
}
export default Detail
