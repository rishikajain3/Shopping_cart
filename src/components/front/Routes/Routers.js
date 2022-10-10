import React from 'react';
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import  Cart  from '../Cart/Cart';
import { Route, Switch } from "react-router-dom";

export const Routers = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  return (
    <div>
        <Switch> 
        {/* <BrowserRouter>
        <Routes> */}
          <Route path="/" exact>
            <Products productItems={productItems} handleAddProduct={handleAddProduct}/>
            </Route>
            <Route path="/Signup" exact>
              <Signup />
          </Route>
          <Route path="/Cart" exact>
            <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/> 

          </Route>
          {/* </Routes>
          </BrowserRouter> */}
        </Switch> 
    </div>
  )
}
 export default Routers;