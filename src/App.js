import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Fragment>
      <Header />

      <main>
        {/* <Cart /> */}
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
