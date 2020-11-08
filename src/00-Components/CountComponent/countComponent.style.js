import styled from 'styled-components'
import {blueColor,whiteColor} from '../../07-Styles/colorPalette';

const StyledCount = styled.div`
    display:flex;
    align-items:center;
    height:30px;
    width:86px;
    button{
        padding:6px;
        background-color:${blueColor};
        color:${whiteColor};
        line-height:9px;
        border:none;
        &:active,focus{
            outline:0;
        }
    }
    p{
        text-align:center;
    }
`

export default StyledCount;