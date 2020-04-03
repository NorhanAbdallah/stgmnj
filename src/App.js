import React from 'react';
import TableData from './Components/Table/table'
import './App.css';
import {Provider} from 'react-redux'
// import store from './Components/Redux/Store/index'
import {BrowserRouter} from "react-router-dom";
import UserPage from './Components/User/userPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../src/Components/Redux/Reducers/RootReducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));

  
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component= {TableData} /> 
                        <Route exact path="/comments/:id"  component= {UserPage} /> 
                    </Switch>                        
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
