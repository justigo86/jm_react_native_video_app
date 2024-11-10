import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-pblack">RootLayouting</Text>
      <StatusBar style="auto" />
      <Link href="./home" style={{ color: "blue" }}>
        Home
      </Link>
    </View>
  );
};

export default RootLayout;
