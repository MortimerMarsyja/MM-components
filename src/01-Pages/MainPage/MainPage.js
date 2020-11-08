//Deps
import React from 'react';
//Components
import Logo from '../../00-Components/Logo'
import CountComponent from '../../00-Components/CountComponent';
//Hooks
import { useSelector,useDispatch } from 'react-redux';
//Actions
import { addToCountAction,substractFromCountAction} from '../../02-Actions/countActions';

const getCountfromStore  = (store) => store.count;

const MainPage = () =>{
    const count = useSelector(getCountfromStore);
    const dispatch = useDispatch();
    return(
        <>
            <Logo/>
            <h1>Hor Project Boostrap V<sub>1</sub></h1>
            <h2>Sub-Title</h2>
            <h3>Header</h3>
            <h4>Sub-Header</h4>
            <p>
                Hello this Website is a bootstrap for future projects to be created,
                this text is just a test to see how text behaves with its styles arranged
            </p>
            <CountComponent 
                value={count} 
                addFunction={()=>dispatch(addToCountAction(1))} 
                substractFunction={()=>dispatch(substractFromCountAction(1))}
            />
        </>
    )
}

export default MainPage;