import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostItem from "../components/PostItem";
import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../api/posts";

const PostDetails = ({ route }) => {
  const { id } = route.params;
  const {
    data: post,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["fetchOnePost"],
    queryFn: () => getPostById(id),
  });
  if (isLoading) {
    return (
      <View style={styles.loading}>
        <Text>Loading post...</Text>
      </View>
    );
  }

  if (isError || !post) {
    console.error("Error fetching post:", error);
    return (
      <View style={styles.error}>
        <Text>Failed to load post.</Text>
      </View>
    );
  }
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.description}>{post.description}</Text>
      {/* <PostItem post={post} /> */}
    </View>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "98%",
    height: 200,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "black",
    alignItems: "flex-start",
    alignSelf: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    padding: 10,
  },
  description: {
    fontSize: 20,
    fontWeight: "400",
    padding: 10,
  },
});
