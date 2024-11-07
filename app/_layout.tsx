import { Slot } from "expo-router";
import React from "react";
import { Text } from "react-native";
import "../globals.css";

export default function RootLayout() {
  return (
    <>
      <Text>Header</Text>
      <Slot />
      {/* <View style={styles.container}>
      <Text>RootLayout</Text>
      </View> */}
      <Text>Footer</Text>
      {/* <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack> */}
    </>
  );
}
