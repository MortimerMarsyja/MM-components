//Deps
import React,{Suspense} from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//logo
//styles
import StyledApp from './07-Styles/app.style';
//Paths
import PATHS from './04-Constants/Routes'
//Components
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoadingComponent from './00-Components/LoadingComponent';
//Reducers
import rootReducer from './03-Reducers/rootReducer';
import { Provider } from 'react-redux';
//Constant
import iconList from './04-Constants/svg/iconList';

//Pages
const MainPage = React.lazy(()=>import('./01-Pages/MainPage'));
const OutOfBounds = React.lazy(()=>import('./01-Pages/OutOfBounds'));

const createReduxStore = () => {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  return createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunk)));
};


const COMPONENT_PATHS = [
  {Component:MainPage,path:PATHS.MAIN_PAGE},
  {Component:OutOfBounds,path:PATHS.OUT_OF_BOUNDS},
]

function App() {
  return (
      <StyledApp>
            <Provider store={createReduxStore()}>
              <BrowserRouter>
              <Switch>
                {COMPONENT_PATHS.map(({path,Component})=>(
                  <Route path={path} exact key={path}>
                    <Suspense fallback={
                      <div>Loading...
                        <LoadingComponent size="32px" icon={iconList.llama} color='red'/>
                      </div>}
                    >
                      <Component/>
                    </Suspense>
                  </Route>
                ))}
                  <Redirect to={PATHS.PAGE_NOT_FOUND}/>
              </Switch>
            </BrowserRouter>
          </Provider>
      </StyledApp>
  );
}

export default App;
