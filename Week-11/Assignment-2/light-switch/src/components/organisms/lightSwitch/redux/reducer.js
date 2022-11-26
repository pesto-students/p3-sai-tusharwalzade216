import { TOGGLE_SWITCH } from './constants';

const INITIAL_STATE = {
    isLightOn: false,
};

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case TOGGLE_SWITCH:
            return { isLightOn: !state.isLightOn };
        default:
            return state;
    }
};

export default reducer;
