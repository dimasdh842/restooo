import Home from '../views/pages/home'
import Detail from '../views/pages/detail'
import Like from '../views/pages/like'

const routes = {
  '/': Home, // default pages
  '/home': Home, // default pages
  '/detail/:id': Detail,
  '/like': Like
}

export default routes
