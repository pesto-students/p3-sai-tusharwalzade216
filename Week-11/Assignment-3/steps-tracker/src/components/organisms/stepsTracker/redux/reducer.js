import { INCREMENT_COUNTER, RESET_COUNTER } from "./constants";

const INITIAL_STATE = {
    stepsCount: 0,
};

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { stepsCount: state.stepsCount + 1 };
        case RESET_COUNTER:
            return { stepsCount: 0 };
        default:
            return state;
    }
};

export default reducer;
