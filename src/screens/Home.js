import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostItem from "../components/PostItem";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f6f6f6",
      }}
    >
      <PostList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
