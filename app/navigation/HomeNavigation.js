import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

// Components
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import SearchScreen from '../screens/HomeScreen/SearchScreen'
import WishlistScreen from '../screens/HomeScreen/WishlistScreen'
import CartScreen from '../screens/HomeScreen/CartScreen'
import colors from '../config/colors'

const HomeTabs = createBottomTabNavigator()

const HomeNavigation = () => {
  return (
    <HomeTabs.Navigator
      tabBarOptions={{
        style: { backgroundColor: colors.green, elevation: 0 },
        tabStyle: { paddingVertical: 5 },
        activeTintColor: colors.green,
        activeBackgroundColor: colors.white,
        inactiveTintColor: colors.white
      }}>
      <HomeTabs.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            )
          }
        }}
        name="Home"
        component={HomeScreen}
      />

      <HomeTabs.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-search" color={color} size={24} />
          }
        }}
        name="Search"
        component={SearchScreen}
      />
      <HomeTabs.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                color={color}
                size={24}
              />
            )
          }
        }}
        name="Wishlist"
        component={WishlistScreen}
      />
      <HomeTabs.Screen
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="cart" color={color} size={24} />
            )
          }
        }}
        name="Cart"
        component={CartScreen}
      />
    </HomeTabs.Navigator>
  )
}

export default HomeNavigation
