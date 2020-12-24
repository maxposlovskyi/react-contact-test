import React from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './container/Home';
import ModalView from "./container/ModalView";
import NoFound from "./container/NoFound";
import { Loading } from './component';
import { isLoadingSelector } from './store/contact/selector';

import './App.scss';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const isLoading = useSelector(isLoadingSelector)
  return (
    <div className="w-100 px-4 relative">
      <Loading isLoading={isLoading} />
      <Switch location={background || location}>
        <Route exact path="/" component={Home}  />
        <Route component={NoFound}  />
      </Switch>
      {background && <Route path="/contacts/:option" children={ <ModalView />} />}
    </div>
  );
}

export default App;
