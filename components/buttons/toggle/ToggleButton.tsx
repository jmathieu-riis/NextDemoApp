import React, { useState } from 'react';
import { ToggleButton as ReactToggleButton } from 'react-bootstrap';
import styled from 'styled-components';

const StyledToggleButton = styled(ReactToggleButton)`

`;

const ToggleButton = (
    { id, type }: {
        id: string;
        type: string;
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
        <StyledToggleButton
            type="radio"
            id={id}
            value={value}
            onChange={handleChange}
        >
            {`${value}`}
        </StyledToggleButton>
    );
};

export default ToggleButton;
