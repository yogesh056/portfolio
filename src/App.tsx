import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import Landing from "./screens/Landing";
import rootReducer from "./redux-store/reducers";
const store = createStore(rootReducer);
function App() {
 
  return (
    <Provider store={store}>
      <div className="app">
        <Landing />
      </div>
    </Provider>
  );
}

export default App;
