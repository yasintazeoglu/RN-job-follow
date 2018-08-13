import {combineReducers} from 'redux'
import item from './item.reducer'
import firebase_data from './set_data.reducer'
import picker from './picker.reducer'
import set_control from './set_data_control.reducer'
export default combineReducers({
item,
firebase_data,
picker,
set_control
})