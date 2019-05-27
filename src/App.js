import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

import routes from "./routes"


function App() {
  return (
    <Router>
      <div>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={ () => {
                return (
                  <route.layout>
                    <route.component />
                  </route.layout>
                );
              }}
            />
          );
        })}
      </div>
    </Router>
  );
}

export default App;
