import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings94934Navigator from '../features/Settings94934/navigator';
import UserProfile94927Navigator from '../features/UserProfile94927/navigator';
import Settings94926Navigator from '../features/Settings94926/navigator';
import Settings94924Navigator from '../features/Settings94924/navigator';
import SignIn294922Navigator from '../features/SignIn294922/navigator';
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
Settings94934: { screen: Settings94934Navigator },
UserProfile94927: { screen: UserProfile94927Navigator },
Settings94926: { screen: Settings94926Navigator },
Settings94924: { screen: Settings94924Navigator },
SignIn294922: { screen: SignIn294922Navigator },
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
