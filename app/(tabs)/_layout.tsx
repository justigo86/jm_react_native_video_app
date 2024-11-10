import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {" "}
        {name}{" "}
      </Text>
    </View>
  );
};

const tabsData: { name: string; icon: ImageSourcePropType }[] = [
  {
    name: "Home",
    icon: icons.home,
  },
  {
    name: "Bookmark",
    icon: icons.bookmark,
  },
  {
    name: "Create",
    icon: icons.plus,
  },
  {
    name: "Profile",
    icon: icons.profile,
  },
];

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          //removes duplicated name from tab bar
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >
        {tabsData.map((tab, index) => (
          <Tabs.Screen
            key={index}
            name={tab.name.toLocaleLowerCase()}
            options={{
              title: tab.name,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={tab.icon}
                  color={color}
                  name={tab.name}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
