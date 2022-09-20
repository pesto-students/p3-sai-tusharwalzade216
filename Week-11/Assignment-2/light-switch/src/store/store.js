import { createStore } from 'redux';
import { lightSwitchReducer } from '../components';

const store = createStore(
    lightSwitchReducer
);

export { store };
