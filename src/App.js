import React from 'react';
import Home from './components/Home'
import Details from './components/Details'
import Heros from './components/Heros'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StoreContext,useStoreReducer } from "./store/storeprovider";


function App() {
  const [state, dispatch] = useStoreReducer()
  return (
    
    <StoreContext.Provider value={{state,dispatch}}>
      <Router>
        <div>
          <Switch>
            <Route path="/Detail">
              <Details/>
            </Route>
            <Route path="/Hero">
              <Heros/>
            </Route>
            <Route path="/"> 
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </StoreContext.Provider>
  );
}

export default App;
