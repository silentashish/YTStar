import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '../components';
import {backgroundColor} from '../constants/colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './HomeScreen';
import {StarredScreen} from './StarredScreen';

interface props {
  children?: JSX.Element;
}

const Tab = createBottomTabNavigator();

const MainScreen: React.FC<props> = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Youtuber') {
              iconName = focused ? 'logo-youtube' : 'logo-youtube';
            } else if (route.name === 'Favourite') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            } else if (route.name === 'Video') {
              iconName = focused ? 'videocam' : 'videocam-outline';
            } else if (route.name === 'Photos') {
              iconName = focused ? 'ios-image' : 'ios-image-outline';
            } else if (route.name === 'Timeline') {
              iconName = focused ? 'ios-time' : 'ios-time-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Youtuber" component={HomeScreen} />
        <Tab.Screen name="Favourite" component={StarredScreen} />
      </Tab.Navigator>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  lottieWrapper: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'space-around',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
  lottieWrapper: {
    width: '100%',
    height: 500,
  },
});

export {MainScreen};
