import React, { useState } from 'react';
import { ToggleButton as ReactToggleButton } from 'react-bootstrap';
import styled from 'styled-components';
import { ButtonType } from '../types';

const StyledToggleButton = styled(ReactToggleButton)`

`;

const HideMe = styled.div`display: none;`;

const StyledToggleButtonContainer = styled.div(props => ({
    width: '1em',
    height: '1em',
    backgroundColor: props.theme.colors[props.color ? props.color : 'primary'],
    marginTop: 'auto',
    marginBottom: 'auto',
}));

const ToggleButton = (
    { id, buttonType }: {
        id: string;
        buttonType: ButtonType;
    }) => {
    const [value, setValue] = useState(0);
    const handleChange = () => {
        if (value === 0) {
            setValue(1);
        } else {
            setValue(0);
        }
    };
    return (
        <StyledToggleButtonContainer
            onClick={handleChange}
            color={buttonType}
        >
            <HideMe>
                <ReactToggleButton
                    type="checkbox"
                    id={id}
                    value={value}
                    onChange={handleChange}
                    checked={value === 1}
                    style={{ display: 'none' }}
                />
            </HideMe>
        </StyledToggleButtonContainer>
    );
};

export default ToggleButton;
