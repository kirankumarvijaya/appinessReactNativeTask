import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const saga = createSagaMiddleware();


const store = createStore(reducer,applyMiddleware(saga));

rootSaga.map(eachSaga => saga.run(eachSaga));

export default store;