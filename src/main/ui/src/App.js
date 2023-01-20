import "./App.css";
import { Main } from "./components/main/Main";
import { Provider } from "react-redux";
import store from "./store";
import { MainScreen, EmptyScreen } from "@iyadmosa/react-library";
import { Deposits } from "./components/deposit/Deposits";
import { Withdraws } from "./components/withdraw/Withdraws";
import React from "react";
import { Reasons } from "./components/reason/Reasons";
import { Persons } from "./components/person/Persons";
function App() {
  const brand = { name: "NavbarScroller", to: "/main" };
  const links = [
    {
      name: "Main",
      to: "/main",
      component: <EmptyScreen title={"Dashboard"} page={<Main />} />,
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
    {
      name: "Persons",
      to: "/persons",
      component: <Persons />,
    },
    {
      name: "Reasons",
      to: "/reasons",
      component: <Reasons />,
    },
  ];

  return (
    <Provider store={store}>
      <MainScreen brand={brand} links={links} />
    </Provider>
  );
}

export default App;
