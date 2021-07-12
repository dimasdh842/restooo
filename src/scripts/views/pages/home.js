import RestoDbSource from '../../data/resto-source'
import { createRestoItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
      <div class="content">
        <h2 class="content__heading">Semua Resto</h2>
        <div id="movies" class="movies">
    
        </div>
      </div>
    `
  },
  async afterRender () {
    const movies = await RestoDbSource.allResto()
    const moviesContainer = document.querySelector('#movies')
    movies.forEach((resto) => {
      moviesContainer.innerHTML += createRestoItemTemplate(resto)
    })
  }
}
export default Home
