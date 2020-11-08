import styled from 'styled-components'

const StyledLoadingComponent = styled.svg`
    animation: action 1s infinite  alternate;
    @keyframes action {
        0% { 
            transform: translateY(0); 
        }
        100% { 
            transform: translateY(-10px); 
        }
}
`

export default StyledLoadingComponent;