import { configureStore } from "@reduxjs/toolkit";
import  wishlistslice  from "./slices/WishlistSlice";

import cartSlice  from "./slices/cartSlice";





export const store = configureStore({
    reducer:{
    wishlist : wishlistslice,
    cart:cartSlice
    }
})

export default store