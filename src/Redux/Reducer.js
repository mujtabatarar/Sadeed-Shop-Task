// import actions types.
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, SEARCH_QUERY , MIN_PRICE, MAX_PRICE, IS_AVALIABLE} from "./ActionTypes.js";

const initialState = {
    minPrice : "0",
    maxPrice : "10000000",
    isAvaliable: false,
    loading: false,
    data:[],
    error:'',
    searchString: ''

}

const reducer = (state = initialState, actions) => {
        switch(actions.type){
            case FETCH_USER_REQUEST:
                return {
                    ...state,
                    loading: true,
                }
            case FETCH_USER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    data: actions.payload,

                }
            case FETCH_USER_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: actions.payload
                }
            case SEARCH_QUERY:
                return {
                    ...state,
                    loading: false,
                    error: '',
                    searchString: actions.payload

                }
            case MIN_PRICE:
                return {
                    ...state,
                    minPrice: actions.payload
                }
            case MAX_PRICE:
                    return {
                    ...state,
                    maxPrice: actions.payload
                }
            case IS_AVALIABLE:
                return {
                    ...state,
                    isAvaliable: actions.payload
                }


            default: return state;
        }
}
export default reducer;