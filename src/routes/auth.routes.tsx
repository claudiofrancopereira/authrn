import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
    return (
        <Navigator>
            <Screen name="signin" component={SignIn} />
        </Navigator>
    )
}

export default AuthRoutes;