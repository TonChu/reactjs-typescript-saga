import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import storeConfig from './redux';
import UserDetail from './app/user/user-detail/UserDetailComponent';

class App extends Component {
  render() {
    return (
      <Provider store={storeConfig.store}>
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <HashRouter>
            <Switch>
              <Route exact path="/" name="UserDetail" component={UserDetail} />
            </Switch>
          </HashRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
