import { Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Product from "./components/ProductShow";
import ProductsContainer from "./components/ProductsContainer";
import AddProductContainer from "./components/AddProductContainer";
import ProductShow from "./components/ProductShow";
import EditForm from "./components/EditForm";

function App() {
  return (
    <div className="App">
      <div id="header">
        <Link to=""></Link>
      </div>
      <div id="main">
        {/* <AddProductContainer /> */}
        <Switch>
          <Route exact path="/products" component={ProductsContainer} />
          <Route
            exact
            path="/products/add"
            render={(routerProps) => <AddProductContainer {...routerProps} />}
          ></Route>
          <Route
            exact
            path="/products/:id"
            component={(routerProps) => <ProductShow {...routerProps} />}
          />
          <Route
            exact
            path="/products/:id/edit"
            render={(routerProps) => <EditForm {...routerProps} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
