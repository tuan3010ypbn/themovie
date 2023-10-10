import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {publicRoutes} from "~/routes";
import "./App.css";
import {DefaultLayout} from "~/layout";
import {getDataUsers} from "~/services";

function PrivateRoute({children}) {
  const navigate = useNavigate();
  // const {currentUser} = useAuthValue();
  const {currentUser} = {currentUser: true};
  console.log('currentUser', currentUser);

  if (!currentUser) {
    navigate('/login');
  }

  return children
}

function App() {
  const [user, setUser] = useState(null);
  const {currentUser} = {currentUser: true};

  useEffect( () => {
    async function fetchData() {
      return await getDataUsers();
    }
    const user = fetchData();
    setUser(user);
  }, [])

  return (
    <Router>
      <div className="app">
        {/*<AuthProvider value={user}>*/}
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      {/*<PrivateRoute>*/}
                        <Page/>
                      {/*</PrivateRoute>*/}
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        {/*</AuthProvider>*/}
      </div>
    </Router>
  );
}

export default App;
