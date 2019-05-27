import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css"

import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store from './config/store';
import routes from "./routes"

const history = createBrowserHistory();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
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
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
