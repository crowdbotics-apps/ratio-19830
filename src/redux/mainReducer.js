import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn294922Reducer from '../features/SignIn294922/redux/reducers'
import SignIn294908Reducer from '../features/SignIn294908/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn294922: SignIn294922Reducer,
SignIn294908: SignIn294908Reducer,

});