import styled from "styled-components";
import {blueColor,greyColors} from './colorPalette';
import CSSRESET from './cssReset.style';

const StyledApp = styled('div')`
    ${CSSRESET}
    font-family:Arial, Helvetica, sans-serif;
    h1{
        font-size:1.66em;
        font-weight:700;
        line-height: 1.2em;
        margin: 0.66em 0;
        color:${greyColors[700]};
    },
    h2{
        font-size:1.44em;
        font-weight: 600;
        line-height: 1.2em;
        margin: 0.60em 0;
        color:${greyColors[600]};
    },
    h3{
        font-size:1.6em;
        font-weight:500;
        margin: 0.54em 0;
        color:${blueColor};
    },
    h4{
        font-size:1.4em;
        font-weight:400;
        margin: 0.48em 0;
        color:${greyColors[700]};
    },
    p{
        font-size:1.1em;
        width:200px;
        line-height:1.2em;
    }
`;

export default StyledApp;