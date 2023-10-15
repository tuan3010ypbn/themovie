import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
// import { routes } from "~/routes";
import "./App.css";
import { DefaultLayout as Layout } from "~/layout";
import { AuthProvider, useAuthValue } from "~/authContext";
import Home from "~/pages/Home";
import Detail from "~/pages/Detail";
import Movies from "~/pages/Movies";
// import People from "~/pages/People";
// import TvShow from "~/pages/TvShow";
import Login from "~/pages/Login";
import Register from "~/pages/Register";
// }

const PrivateRoute = ({ path, children, element: Element }) => {
  const currentUser = useAuthValue();
  return currentUser?.id ? <Element /> : <Navigate to="/login" replace />;
};

function App() {
  const currentUser = useAuthValue();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(currentUser);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);

    return () => {}
  }, []);

  return (
    <Router>
      <AuthProvider value={user}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute
                  element={Home}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute
                  element={Home}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              path="/detail"
              element={
                <PrivateRoute
                  element={Detail}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <PrivateRoute
                  element={Movies}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );

  // return (
  //   <Router>
  //     <div className="app">
  //       <AuthProvider value={user}>
  //         <Layout>
  //           <Routes>
  //             {routes.map((route, index) => {
  //               const Page = route.component;
  //               const PrivateRoutes = route.privateRoute
  //                 ? PrivateRoute
  //                 : PublicRoute;
  //               return (
  //                 <PrivateRoutes
  //                   key={index}
  //                   path={route.path}
  //                   component={Page}
  //                 ></PrivateRoutes>
  //               );
  //             })}
  //           </Routes>
  //         </Layout>
  //       </AuthProvider>
  //     </div>
  //   </Router>
  // );
}

export default App;
