// Define action types for storing static data products and categories
export const STORE_CATEGORIES = 'STORE_CATEGORIES';
export const STORE_PRODUCTS = 'STORE_PRODUCTS';

// Define cart action types
export const RETRIEVE_CART_SUCCESS = 'RETRIEVE_CART_SUCCESS';
export const RETRIEVE_CART_ERROR = 'RETRIEVE_CART_ERROR';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';
export const UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS';
export const UPDATE_CART_ITEM_ERROR = 'UPDATE_CART_ITEM_ERROR';
export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
export const REMOVE_FROM_CART_ERROR = 'REMOVE_FROM_CART_ERROR';


// Define checkout action types
export const CAPTURE_ORDER_SUCCESS = 'CAPTURE_ORDER_SUCCESS';
export const GENERATE_CHECKOUT_TOKEN = 'GENERATE_CHECKOUT_TOKEN';
export const GET_SHIPPING_OPTIONS = 'GET_SHIPPING_OPTIONS';
export const REMOVE_SHIPPING_OPTIONS = 'REMOVE_SHIPPING_OPTIONS';
export const UPDATE_CHECKOUT_LIVE_OBJECT = 'UPDATE_CHECKOUT_LIVE_OBJECT';
export const ABORT_CHECKOUT = 'ABORT_CHECKOUT';


// Define customer/authentication action types
export const SET_CUSTOMER = 'SET_CUSTOMER';
export const CLEAR_CUSTOMER = 'CLEAR_CUSTOMER';

//Define analytics action types
export const VIRTUAL_PAGE_VIEW = "VIRTUAL_PAGE_VIEW";
export const TRACK_VIEW_ITEM_LIST = "TRACK_VIEW_ITEM_LIST";
export const TRACK_SELECT_ITEM = "TRACK_SELECT_ITEM";
export const TRACK_VIEW_ITEM = "TRACK_VIEW_ITEM";
export const TRACK_ADD_TO_CART = "TRACK_ADD_TO_CART";
export const TRACK_REMOVE_FROM_CART = "TRACK_REMOVE_FROM_CART";
export const TRACK_VIEW_CART = "TRACK_VIEW_CART";
export const TRACK_CHECKOUT_SHIPPING_PAYMENT = "TRACK_CHECKOUT_SHIPPING_PAYMENT";
export const TRACK_CHECKOUT_OPTION = "TRACK_CHECKOUT_OPTION";
export const TRACK_PURCHASE = "TRACK_PURCHASE";
export const TRACK_PROMOTION_IMPRESSION = "TRACK_PROMOTION_IMPRESSION";
export const TRACK_PROMOTION_CLICK = "TRACK_PROMOTION_CLICK";
export const TRACK_NAVIGATION_CLICK = "TRACK_NAVIGATION_CLICK";
export const TRACK_LOGIN = "TRACK_LOGIN";
