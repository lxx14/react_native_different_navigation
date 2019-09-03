import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import DrawerNavigator from './DrawerNav/Drawer';
import SplashScreenNav from './StackNav/SpashScreenNav';

const RootStack = createSwitchNavigator(
    {
        SplashScreen: SplashScreenNav,
        MainApp: DrawerNavigator
    },
    {
        initialRouteName: 'SplashScreen',
    }
);

export const AppContainer = createAppContainer(RootStack);
