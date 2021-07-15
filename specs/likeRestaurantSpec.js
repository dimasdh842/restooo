import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-db'
import * as TestFactories from './helpers/testFactories'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>'
}

describe('Liking a Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })
    expect(document.querySelector('[aria-label="like this resto"]'))
      .toBeTruthy()
  })

  it('should not show unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })
    expect(document.querySelector('[aria-label="unlike this resto"]'))
      .toBeFalsy()
  })

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    const resto = await FavoriteRestoIdb.getResto(1)

    expect(resto).toEqual({ id: 1 })

    FavoriteRestoIdb.deleteResto(1)
  })

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 })

    await FavoriteRestoIdb.putResto({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{ id: 1 }])
    FavoriteRestoIdb.deleteResto(1)
  })

  it('should not add a resto when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto()
    document.querySelector('#likeButton').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([])
  })
})
