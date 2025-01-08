import { createSlice } from "@reduxjs/toolkit";
const initialState={
  items:[],
  totalQuantity:0,
  totalAmount:0,
}
const CartSlice=createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      const item= action.payload.product;
       const existingItem=state.items.find((items)=>items.id===item.id);
       if(existingItem){
        existingItem.totalQuantity=parseInt(existingItem.totalQuantity)+parseInt(action.payload.quantity) ;
        console.log((existingItem.totalQuantity));
        
        existingItem.totalAmount += eval(parseInt(action.payload.quantity)*item.price);
        state.totalAmount+=existingItem.totalAmount;
        console.log(state.totalAmount);
        
        console.log(existingItem.totalAmount);
        
       }else{
        state.items.push({...item,totalQuantity:action.payload.quantity,totalAmount:eval(item.price*action.payload.quantity)
        })
       }
       state.totalQuantity+=action.payload.quantity;;
       state.totalAmount+=eval(item.price*action.payload.quantity);
       
       
       
    },
    removeFromCart:(state,action)=>{
      state.items=state.items.filter((item)=>item.id!==action.payload)
           //console.log('deleted')
           
    }
  }
})
export default CartSlice.reducer;
export const {addToCart,removeFromCart}=CartSlice.actions;