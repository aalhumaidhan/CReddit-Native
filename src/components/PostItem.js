import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
//import { useQuery } from "@tanstack/react-query";
//import { getPostById } from "../api/posts";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getPostById } from "../api/posts";

const PostItem = ({ id, title, description, onDelete }) => {
  const navigation = useNavigation();
  const { data: post } = useQuery({
    queryKey: ["fetchOnePost", id],
    queryFn: () => getPostById(id),
  });

  const handlePress = () => {
    navigation.navigate("PostDetails", { id });
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          console.log("Deleting post with ID:", id);
          onDelete(id);
        }}
      >
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={handlePress}>
        <View style={styles.post}>
          <Text style={styles.title}>{title || "No Title"}</Text>
          <Text style={styles.details}>{description || "No Description"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  card: {
    width: "95%",
    height: 100,
  },
  post: {
    width: "95%",
    height: 200,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "black",
    alignItems: "flex-start",
    alignSelf: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    padding: 10,
  },
  details: {
    fontSize: 17,
    fontWeight: "400",
    padding: 10,
  },
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
  deleteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#FF6347",
    borderRadius: 20,
    padding: 5,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
