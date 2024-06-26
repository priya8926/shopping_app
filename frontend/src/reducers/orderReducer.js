import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAILURE,
    MY_ORDER_REQUEST,
    MY_ORDER_SUCCESS,
    MY_ORDER_FAILURE,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAILURE,
    ALL_ORDER_SUCCESS,
    ALL_ORDER_REQUEST,
    ALL_ORDER_FAILURE,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAILURE,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_RESET,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_FAILURE,
    UPDATE_ORDER_RESET,
    CLEAR_ERRORS
} from "../constants/orderConstant"

export const newOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        case CREATE_ORDER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
export const myOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case MY_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case MY_ORDER_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case MY_ORDER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ORDER_DETAILS_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }

        case ORDER_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
// admin
export const allOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ALL_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ALL_ORDER_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case ALL_ORDER_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}
export const OrderReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }
        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        case UPDATE_ORDER_FAILURE:
        case DELETE_ORDER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case UPDATE_ORDER_RESET:
            return {
                ...state,
                isUpdated: false
            }
        case DELETE_ORDER_RESET:
            return {
                ...state,
                isDeleted: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}