
import Home from '~/pages/Home';
import Detail from '~/pages/Detail';
import Movies from '~/pages/Movies';
import People from '~/pages/People';
import TvShow from '~/pages/TvShow';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

const publicRoutes = [
  // {path: '/', component: Detail},
  {path: '/', component: Home},
  {path: '/home', component: Home},
  {path: '/detail', component: Detail},
  {path: '/movies', component: Movies},
  {path: '/people', component: People},
  {path: '/tvshow', component: TvShow},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
]

const privateRoutes = []

export { publicRoutes, privateRoutes }