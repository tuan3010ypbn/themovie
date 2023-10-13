
import Home from '~/pages/Home';
import Detail from '~/pages/Detail';
import Movies from '~/pages/Movies';
import People from '~/pages/People';
import TvShow from '~/pages/TvShow';
import Login from '~/pages/Login';
import Register from '~/pages/Register';

const routes = [
  // {path: '/', component: Detail},
  {path: '/login', component: Login, privateRoute: false},
  {path: '/register', component: Register, privateRoute: false},
  {path: '/', component: Home, privateRoute: true},
  {path: '/home', component: Home, privateRoute: true},
  {path: '/detail', component: Detail, privateRoute: true},
  {path: '/movies', component: Movies, privateRoute: true},
  {path: '/people', component: People, privateRoute: true},
  {path: '/tvshow', component: TvShow, privateRoute: true},
]

export { routes }
