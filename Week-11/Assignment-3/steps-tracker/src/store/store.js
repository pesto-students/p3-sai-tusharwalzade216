import { createStore } from 'redux';
import { stepCounterReducer } from '../components';

const store = createStore(
    stepCounterReducer
);

export { store };
