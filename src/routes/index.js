import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {Suspense, useState, lazy} from "react";
import {DefaultLayout as Layout} from "~/layout";
import {AuthProvider} from "~/authContext";

const Home = lazy(() => import('~/pages/Home'))
const Detail = lazy(() => import('~/pages/Detail'))
const Movies = lazy(() => import('~/pages/Movies'))
const People = lazy(() => import('~/pages/People'))
const TvShow = lazy(() => import('~/pages/TvShow'))
const Login = lazy(() => import('~/pages/Login'))
const Register = lazy(() => import('~/pages/Register'))

const PublicRoute = ({children}) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  if (currentUser) {
    return <Navigate to="/" replace/>;
  }
  return children;
};

const PrivateRoute = ({children}) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  if (!currentUser) {
    return <Navigate to="/login" replace/>;
  }
  return children;
}

function RoutesApp() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  return (
    <Router>
      <AuthProvider value={user}>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={<PrivateRoute><Home/></PrivateRoute>}
              />
              <Route
                path="/home"
                element={<PrivateRoute><Home/></PrivateRoute>}
              />
              <Route
                path="/detail/:id"
                element={<PrivateRoute><Detail/></PrivateRoute>}
              />
              <Route
                path="/tvshow"
                element={<PrivateRoute><TvShow/></PrivateRoute>}
              />
              <Route
                path="/people"
                element={<PrivateRoute><People/></PrivateRoute>}
              />
              <Route
                path="/movies"
                element={<PrivateRoute><Movies/></PrivateRoute>}
              />
              <Route
                path="/login"
                element={
                  <PublicRoute><Login/></PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute><Register/></PublicRoute>
                }
              />
            </Routes>
          </Layout>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default RoutesApp;
