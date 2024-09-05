/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from 'react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/homeSc'
import SixmonthCourses from './Screens/SixMonthCourses'
import Landscaping from './Screens/Landscaping'
import LifeSkills from './Screens/Lifeskills'
import Childminding from './Screens/ChildMinding'
import cooking from './Screens/cooking'
import GardenMaintenance from './Screens/GardenMaintenance'
import Calculation from './Screens/CalculationSc'
import FirstAid from './Screens/FirstAid'
import sewing from './Screens/Sewing'
import sixweekscourses from './Screens/SixWeekCourses'
import SixmonthCourses from './Screens/SixMonthCourses'
import ContactUs from './Screens/Contactus';

const stack = createNativeStackNavigator()

function App() {
return (

<NavigationContainer>
    <StackActions.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="landscasping" component={Landscaping}/>
        <Stack.Screen name="LifeSkills" component={LifeSkills}/>
        <Stack.screen name="Sixmonth" component={SixmonthCourses}/>
        <Stack.screen name="ChildMining" component={Childminding}/>
        <Stack.screen name="cooking" component={cooking}/>
        <Stack.screen name="GardenMaintenance" component={GardenMaintenance}/>
        <Stack.screen name="Calculations" component={Calculation}/>
        <Stack.screen name="FirstAid" component={FirstAid}/>
        <Stack.screen name="Sewing" component={sewing}/>
        <Stack.screen name="Sixweek" component={sixweekscourses}/>
        <Stack.screen name="ContactUs" component={ContactUs}/>
    </StackActions.Navigator>
</NavigationContainer>
  );
}


export default App;
