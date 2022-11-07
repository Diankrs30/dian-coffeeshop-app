import actionStrings from "../action/actionStrings";

const intialState = {
    product_item: [],
    product_item_view: [],
    delivery_methods_id: null,
    set_time: null,
    delivery_methods_name:''
};

const cartReducer = (prevState = intialState, action) => {
    switch (action.type) {
      case actionStrings.cart:
        console.log(action.payload);
        const data= action.payload
        return {
          ...prevState,
          product_item:data.product_item,
          product_item_view: data.product_item_view,
            delivery_methods_id: data.delivery_methods_id,
            set_time: data.set_time,
            delivery_methods_name:data.delivery_methods_name
        };
      default :
            return prevState;
    }
};

export default cartReducer;
