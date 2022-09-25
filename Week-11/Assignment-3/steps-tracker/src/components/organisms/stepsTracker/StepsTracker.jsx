import { connect } from 'react-redux';

import './stepsTracker.css';

import { Button, H3 } from '../../atoms';
import { Container } from '../../molecules';
import { addStep, resetSteps } from './redux';

const StepsTracker = (props) => {
    const { addStep, resetSteps, stepsCount } = props;
    return (
        <Container className='container'>
            <H3 className='h3'>{`You've walked ${stepsCount} steps today!`}</H3>
            <Button onClick={addStep} variant='submit'>
                Add a step
            </Button>
            <Button onClick={resetSteps} variant='reset'>
                Reset steps
            </Button>
        </Container>
    );
}

const mapStateToProps = (state) => ({ stepsCount: state.stepsCount });

const mapDispatchToProps = (dispatch) => ({
    addStep: () => dispatch(addStep()),
    resetSteps: () => dispatch(resetSteps()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepsTracker);
