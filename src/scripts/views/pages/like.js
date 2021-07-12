import FavoriteRestoIdb from '../../data/favoriteresto-db'
import { createRestoItemTemplate } from '../templates/template-creator'

const Like = {
  async render () {
    return `
       <div class="content">
        <h2 class="content__heading">Your Favorite Resto</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>
    `
  },
  async afterRender () {
    const movies = await FavoriteRestoIdb.getAllResto()
    const moviesContainer = document.querySelector('#movies')
    console.log(movies)
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createRestoItemTemplate(movie)
    })
  }
}
export default Like
