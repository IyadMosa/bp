import "./App.css";
import { Main } from "./components/main/Main";
import { Provider } from "react-redux";
import store from "./store";
import { MainScreen, EmptyScreen } from "@iyadmosa/react-library";
import { Deposits } from "./components/deposit/Deposits";
import { Withdraws } from "./components/withdraw/Withdraws";
import React from "react";
function App() {
  const brand = { name: "NavbarScroller", to: "/main" };
  const links = [
    {
      name: "Main",
      to: "/main",
      component: <EmptyScreen title={"Main Page"} page={<Main />} />,
    },
    {
      name: "Deposits",
      to: "/deposits",
      component: <Deposits />,
    },
    {
      name: "Withdraws",
      to: "/withdraws",
      component: <Withdraws />,
    },
  ];

  return (
    <Provider store={store}>
      <MainScreen brand={brand} links={links} />
    </Provider>
  );
}

export default App;
