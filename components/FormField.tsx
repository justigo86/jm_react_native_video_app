import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

interface FormFieldProps {
  title: string;
  placeholder: string;
  value: string;
  otherStyles?: string;
  keyboardType?: string;
  handleChange?: (text: string) => void;
  // handleChangeText: (text: string) => void;
}

const FormField = ({
  title,
  placeholder,
  value,
  handleChange,
  otherStyles,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-gray-100 text-base font-pmedium">{title}</Text>
      <View className="w-full h-16 items-center border-black-300 px-4 bg-black-200 rounded-2xl focus:border-secondary">
        <TextInput
          className="flex-1 text-white text-base font-psemibold"
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          value={value}
          onChangeText={handleChange}
          secureTextEntry={title === "Password" && !showPassword}
        />
      </View>
    </View>
  );
};

export default FormField;
