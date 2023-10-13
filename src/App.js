import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {routes} from "~/routes";
import "./App.css";
import {DefaultLayout} from "~/layout";
import {AuthProvider, useAuthValue} from "~/authContext";

function PrivateRoute({children, ...rest}) {
  const currentUser = useAuthValue();

  return (currentUser?.id ? (children) : (<Navigate to="/login" replace state={{from: rest.location}}/>));
}

function PublicRoute({children, ...rest}) {
  const currentUser = useAuthValue();

  return (currentUser?.id ? (children) : (<Navigate to="/login" replace state={{from: rest.location}}/>));
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, [])

  return (<Router>
      <div className="app">
        <AuthProvider value={user}>
          <Routes>
            {routes.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component;
              const PrivateRoutes = route.privateRoute ? PrivateRoute : PublicRoute;
              return (<Route
                  key={index}
                  path={route.path}
                  element={<Layout>
                    <PrivateRoutes>
                      <Page/>
                    </PrivateRoutes>
                  </Layout>}
                />);
            })}
          </Routes>
        </AuthProvider>
      </div>
    </Router>);
}

export default App;
