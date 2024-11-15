import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[90vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-white text-2xl font-psemibold mt-10 text-semibold">
            SignIn
          </Text>
          <FormField
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            otherStyles="mt-7"
            keyboardType="email-address"
            handleChange={(e: string) => setForm({ ...form, email: e })}
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            otherStyles="mt-7"
            handleChange={(e: string) => setForm({ ...form, password: e })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
