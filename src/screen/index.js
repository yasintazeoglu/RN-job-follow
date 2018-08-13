import SideMenu from '../components/sideMenu'
import {createDrawerNavigator} from 'react-navigation'
import Animation from './animation'
import Companies from './save/companies'
import Expense_Type from './save/expense_type'
import Expenses from './save/expenses'
import Works from './save/works'

export default  createDrawerNavigator(
  {
    Animation:{screen:Animation,
      navigationOptions:({
      drawerLockMode:'locked-closed'
    })} ,
    Works,
    Expenses,
    Companies,
    Expense_Type
  },
  {
    navigationOptions: ({ navigation }) => ({
    }),
    contentComponent:SideMenu
  }
);
