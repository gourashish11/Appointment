import { Image, StyleSheet, View} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import BookAppointment from './BookAppointment';
import ViewAppointment from './ViewAppointment';

const MainScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const imgBookAppointment = focused ? require('../../assets/book_filled.png') : require('../../assets/book.png');
            const imgViewAppointment = focused ? require('../../assets/cal_filled.png') : require('../../assets/cal.png');
            let finalImage;
            if (route.name == "Book Appointment") {
              finalImage = imgBookAppointment;
            } else {
              finalImage = imgViewAppointment;
            }
            return (
              <View>
                <Image
                  source={finalImage}
                  resizeMode="contain"
                  style={{ width: 25 }}
                />
              </View>
            );
          },
          tabBarActiveTintColor: '#6364F3',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#6364F3',
          },
          headerTitleStyle: {
            color: "white",
          }
        })}
      >
        <Tab.Screen name="Book Appointment" component={BookAppointment} />
        <Tab.Screen name="View Appointment" component={ViewAppointment} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
 
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'red',
  }
});