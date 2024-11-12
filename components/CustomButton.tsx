import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface buttonProps {
  handlePress: () => void;
  title: string;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  handlePress,
  title,
  containerStyles,
  textStyles,
  isLoading,
}: buttonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={isLoading}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center
    onPress={handlePress}
    activeOpacity={0.7}
    ${containerStyles}
    ${isLoading ? "opacity-50" : ""}`}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
