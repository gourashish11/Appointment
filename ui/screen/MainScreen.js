import { Image, StyleSheet, View} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BookAppointmentScreen from './BookAppointmentScreen';
import ViewAppointmentScreen from './ViewAppointmentScreen';
import useLabel from '../../language/useLabel';


const MainScreen = () => {
  const Tab = createBottomTabNavigator();
  const [bookAppointment, viewAppointment] = useLabel();

  const tabBarIcon = ({ color }, image) => (
    <Image source={image} style={{height: 25, width: 25, resizeMode: 'contain', tintColor: color}} />
);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#6364F3',
          tabBarInactiveTintColor: 'black',
          headerStyle: {
            backgroundColor: '#6364F3',
          },
          headerTitleStyle: {
            color: "white",
          }
        })}
      >
          <Tab.Screen
                                key={bookAppointment}
                                options={{
                                    tabBarIcon: tabBarProps => tabBarIcon(tabBarProps, require('../../assets/book.png')),
  
                                }}
                                name={bookAppointment}
                                component={BookAppointmentScreen}
                            />
         <Tab.Screen
                                key={viewAppointment}
                                options={{
                                    tabBarIcon: tabBarProps => tabBarIcon(tabBarProps, require('../../assets/cal.png')),
  
                                }}
                                name={viewAppointment}
                                component={ViewAppointmentScreen}
                            />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
 