import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Import the state interface and our combined reducers/sagas.
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

function configureStore(initialState: {}) {
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const persistConfig: PersistConfig = {
    storage,
    key: 'root',
    whitelist: ['user'] // list of store states that we want to persist
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, initialState, applyMiddleware(sagaMiddleware));

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore({});
