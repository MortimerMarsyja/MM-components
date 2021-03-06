//Deps
import React, { Suspense } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//logo
//styles
import StyledApp from "./07-Styles/app.style";
//Paths
import PATHS from "./04-Constants/Routes";
//Components
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoadingComponent from "./00-Components/HorLoading";
import HorHeaderComponent from "./00-Components/HorHeader";
import HorSideBar from "./00-Components/HorSideBar";
import Logo from "./00-Components/Logo";
//Reducers
import rootReducer from "./03-Reducers/rootReducer";
import { Provider } from "react-redux";
//Constant
import iconList from "./04-Constants/svg/iconList";

//Pages
const MainPage = React.lazy(() => import("./01-Pages/MainPage"));
const FormPage = React.lazy(() => import("./01-Pages/FormTestPage"));
const TagPage = React.lazy(() => import("./01-Pages/TagPage"));
const SwitchPage = React.lazy(() => import("./01-Pages/SwitchPage"));
const TooltipPage = React.lazy(() => import("./01-Pages/TooltipPage"));
const DonutGraphPage = React.lazy(() => import("./01-Pages/DonutGraphPage"));
const OutOfBounds = React.lazy(() => import("./01-Pages/OutOfBounds"));

const createReduxStore = () => {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === "development") {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function") {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  return createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(thunk))
  );
};

const COMPONENT_PATHS = [
  { Component: MainPage, path: PATHS.MAIN_PAGE },
  { Component: FormPage, path: PATHS.FORM_PAGE },
  { Component: TagPage, path: PATHS.TAG_PAGE },
  { Component: TooltipPage, path: PATHS.TOOLTIP_PAGE },
  { Component: SwitchPage, path: PATHS.SWITCH_PAGE },
  { Component: DonutGraphPage, path: PATHS.DONUT_GRAPH_PAGE },
  { Component: OutOfBounds, path: PATHS.OUT_OF_BOUNDS },
];

const urlList = [
  { url: PATHS.MAIN_PAGE, name: "Main page" },
  { url: PATHS.FORM_PAGE, name: "Form" },
  { url: PATHS.TAG_PAGE, name: "Tag" },
  { url: PATHS.SWITCH_PAGE, name: "Switch" },
  { url: PATHS.TOOLTIP_PAGE, name: "Tooltip" },
  { url: PATHS.DONUT_GRAPH_PAGE, name: "Donut Graph" },
];

function App() {
  return (
    <StyledApp>
      <Provider store={createReduxStore()}>
        <BrowserRouter>
          <HorHeaderComponent>
            <Logo className="header-logo" />
          </HorHeaderComponent>
          <div style={{ display: "flex", height: "100%" }}>
            <HorSideBar urlList={urlList} />
            <Switch>
              {COMPONENT_PATHS.map(({ path, Component }) => (
                <Route path={path} exact key={path}>
                  <Suspense
                    fallback={
                      <div>
                        Loading...
                        <LoadingComponent
                          size="32px"
                          icon={iconList.llama}
                          color="red"
                        />
                      </div>
                    }
                  >
                    <Component />
                  </Suspense>
                </Route>
              ))}
              <Redirect to={PATHS.PAGE_NOT_FOUND} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    </StyledApp>
  );
}

export default App;
