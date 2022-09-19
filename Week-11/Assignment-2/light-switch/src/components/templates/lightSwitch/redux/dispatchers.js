import { store } from '../../../../store';
import { toggleLightSwitch } from './actions';

const dispatchToggleLightSwitch = () => store.dispatch(toggleLightSwitch());

export {
    dispatchToggleLightSwitch,
};
