import { Slot, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
        <Stack.Screen name="index" />
      </Stack> */}
    </>
  );
}
