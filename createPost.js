import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { Link, router } from "expo-router";

const test = () => {
  const [postText, setPostText] = useState("");
  const handlePostTextChange = (text) => {
    setPostText(text);
  };

  const handlePost = () => {
    console.log("Post", postText);
  };
  const postHandlebutton = () => {
    alert("post submited");
  };
  const crosButton = () => {
    router.replace("/home");
  };

  const uploadByCamera = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        alert("you can not upload");
        return;
      }
    }
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // Request permission to access media library
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }

    // Launch image library to pick an image
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Create post</Text>
        <TouchableOpacity style={styles.headerIcon} onPress={crosButton}>
          <Ionicons name="close-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.profile}>
          <Image
            source={require("./hridoy.jpeg")}
            style={styles.profileImage}
          />
          <Text style={styles.profileText}>Jaber Ahmed</Text>
        </View>
        <TextInput
          placeholder="What's on your mind Jaber?"
          multiline
          style={styles.textInput}
          onChangeText={handlePostTextChange}
          value={postText}
        />
        <View style={styles.toolbar}>
          <TouchableOpacity style={styles.toolbarButton} onPress={pickImage}>
            <Ionicons name="images-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Ionicons name="sad-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Ionicons name="gift-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolbarButton}>
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.postImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18191a",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 25,
    backgroundColor: "#242526",
    paddingHorizontal: 16,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  headerIcon: {
    padding: 8,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 8,
  },
  profileText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  textInput: {
    backgroundColor: "#242526",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    color: "white",
    fontSize: 16,
    padding: 16,
    marginBottom: 20,
  },
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  toolbarButton: {
    padding: 8,
  },
  postImage: {
    // margin: 20,
    marginTop: 20,
    //   marginHorizontal:20,
    width: "100%",
    height: 500,
    borderRadius: 10,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    height: 490,
    // width: 400,
    borderRadius: 10,
  },
  postButton: {
    backgroundColor: "hotpink",
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  postButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
