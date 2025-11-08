import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';

const Stack = createStackNavigator();
const App = () => { 
  return (
    <SafeAreaView>
       <NavigationContainer>
        <Stack.Screen component={Home} name="Home" />
        {/* <Home /> */}
       </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
