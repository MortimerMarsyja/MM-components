import React from 'react';
import StyledCount from './countComponent.style';

const CountComponent = ({value,addFunction,substractFunction}) => {
    return(
        <StyledCount>
            <button onClick={substractFunction}>-</button>
                <p>{value}</p>
            <button onClick={addFunction}>+</button>
        </StyledCount>
    )
}

export default CountComponent;