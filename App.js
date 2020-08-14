import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./src/redux/strore/index";
import Root from "./src/Root";

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
