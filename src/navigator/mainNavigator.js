import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings94920Navigator from '../features/Settings94920/navigator';
import UserProfile94913Navigator from '../features/UserProfile94913/navigator';
import Settings94912Navigator from '../features/Settings94912/navigator';
import Settings94910Navigator from '../features/Settings94910/navigator';
import SignIn294908Navigator from '../features/SignIn294908/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings94920: { screen: Settings94920Navigator },
UserProfile94913: { screen: UserProfile94913Navigator },
Settings94912: { screen: Settings94912Navigator },
Settings94910: { screen: Settings94910Navigator },
SignIn294908: { screen: SignIn294908Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
