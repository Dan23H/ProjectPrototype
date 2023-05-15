import React from "react"
import { Routing } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import StateProvider from "./context/StateProvider";

function App() {
  return (
    <StateProvider>
      <Provider store={store}>
        <Routing />
      </Provider>
    </StateProvider>
  )
}

export default App
