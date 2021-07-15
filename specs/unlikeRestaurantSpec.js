import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-db'
import * as TestFactories from './helpers/testFactories'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Unliking a restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteRestoIdb.putResto({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1)
  })

  it('should display unlike widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeTruthy()
  })

  it('should not display like widget when the movie has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeFalsy()
  })

  it('should be able to remove liked movie from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
  })

  it('should not throw error if the unliked restaurant is not on the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    await FavoriteRestoIdb.deleteResto(1)
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
  })
})
