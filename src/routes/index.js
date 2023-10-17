import {lazy} from "react";

const Home = lazy(() => import('~/pages/Home'))
const Detail = lazy(() => import('~/pages/Detail'))
const Movies = lazy(() => import('~/pages/Movies'))
const People = lazy(() => import('~/pages/People'))
const TvShow = lazy(() => import('~/pages/TvShow'))
const Login = lazy(() => import('~/pages/Login'))
const Register = lazy(() => import('~/pages/Register'))

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
