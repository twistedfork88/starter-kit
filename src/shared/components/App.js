import React, { Component } from 'react';
import routes from '../../shared/routes/routes';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        <div>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props} {...rest} />
              )}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;