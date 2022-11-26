import { INCREMENT_COUNTER, RESET_COUNTER } from './constants';

const addStep = () => ({
    type: INCREMENT_COUNTER
});

const resetSteps = () => ({
    type: RESET_COUNTER
});

export {
    addStep,
    resetSteps,
};
