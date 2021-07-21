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
    const resto = await FavoriteRestoIdb.getAllResto()
    const restoContainer = document.querySelector('#movies')

    if (resto.length === 0) {
      restoContainer.innerHTML = `
        Tidak ada Resto yang disukai
      `
    }

    resto.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto)
    })
  }
}
export default Like
