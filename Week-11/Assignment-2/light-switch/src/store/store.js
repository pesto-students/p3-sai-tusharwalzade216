import { createStore } from 'redux';
import lightSwitchReducer from '../components/templates/lightSwitch/redux/reducer';

const store = createStore(
    lightSwitchReducer
);

export { store };
