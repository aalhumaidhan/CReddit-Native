import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import PostDetails from "../../screens/PostDetails";

const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Posts">
      <Stack.Screen name="Posts" component={Home} />
      <Stack.Screen name="PostDetails" component={PostDetails} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

const styles = StyleSheet.create({});
