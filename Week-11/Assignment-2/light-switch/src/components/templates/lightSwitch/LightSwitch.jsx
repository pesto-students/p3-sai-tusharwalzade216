import { connect } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

import { Button, H4 } from '../../atoms';
import { Container } from '../../molecules';
// import { toggleLightSwitch } from './redux';
import { toggleLightSwitch } from './redux';
import { BG_BLACK, CONTAINER_STYLES, TEXT_WHITE } from './lightSwitch.styles';

const LightSwitch = (props) => {
    const { isLightOn, toggleLightSwitch } = props;

    // Higher Order Function connect()() can be eliminated by using selector & dispatch hooks
    // const isLightOn = useSelector(state => state.isLightOn);
    // const dispatch = useDispatch();

    return (
        <Container
            styles={{
                ...CONTAINER_STYLES,
                ...(isLightOn ? {} : BG_BLACK)
            }}>
            <H4
                styles={{
                    ...(isLightOn ? {} : TEXT_WHITE)
                }}
            >
                {`The room is ${isLightOn ? 'light' : 'dark'}`}
            </H4>
            {/* <Button onClick={() => dispatch(toggleLightSwitch())}> */}
            <Button onClick={toggleLightSwitch}>
                Flip
            </Button>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return { isLightOn: state.isLightOn };
};

const mapDispatchToProps = (dispatch) => ({
    toggleLightSwitch: () => dispatch(toggleLightSwitch())
});

// This can be removed and main component can directly be exported when hooks are used
const ConnectedLightSwitch = connect(mapStateToProps, mapDispatchToProps)(LightSwitch);

export default ConnectedLightSwitch;
