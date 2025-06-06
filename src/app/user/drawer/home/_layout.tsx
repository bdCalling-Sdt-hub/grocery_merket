import { Keyboard, Text, TouchableOpacity, View } from "react-native";
import tw from "@/src/lib/tailwind";
import { Tabs } from "expo-router";
import React from "react";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import {
  IconHome,
  IconHomeSelected,
  IconLoveWishlist,
  IconLoveWishlistSelected,
  IconProfile,
  IconProfileSelected,
  IconSearch,
  IconSearchSelected,
  IconStores,
  IconStoresSelected,
} from "@/assets/icon";
import { SvgXml } from "react-native-svg";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";

import { BlurView } from "expo-blur";

// Props type for MyTabBar
type MyTabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: any;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

function MyTabBar({ state, descriptors, navigation }: MyTabBarProps) {
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // console.log(isKeyboardVisible);

  return (
    <>
      {!isKeyboardVisible && (
        <View
          style={[
            tw`absolute bottom-4 justify-center items-center w-full flex-1  `,
          ]}
        >
          <View
            style={tw` bg-white justify-between overflow-hidden h-[70px] w-[90%]   rounded-full flex-row items-center  shadow-xl flex-1`}
          >
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];

              const isFocused = state.index === index;
              // console.log(state);

              const onPress = () => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: "tabLongPress",
                  target: route.key,
                });
              };

              // Get the icon based on route name
              const getIcon = () => {
                switch (route.name) {
                  case "index":
                    return isFocused ? IconHomeSelected : IconHome;
                  case "search":
                    return isFocused ? IconSearchSelected : IconSearch;
                  case "stores":
                    return isFocused ? IconStoresSelected : IconStores;
                  case "wishlist":
                    return isFocused
                      ? IconLoveWishlistSelected
                      : IconLoveWishlist;
                  case "profile":
                    return isFocused ? IconProfileSelected : IconProfile;
                }
              };

              return (
                <TouchableOpacity
                  key={route.key}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={tw`flex-1 w-full items-center justify-between`}
                >
                  <View
                    style={[
                      tw`items-center justify-center px-4 py-3 rounded-full `,
                      tw`${
                        isFocused
                          ? "bg-[#ECFFF1] border-2 border-white shadow-lg"
                          : "bg-transparent"
                      }`,
                    ]}
                  >
                    <SvgXml
                      xml={getIcon() || ``}
                      width={24}
                      height={24}
                      style={[
                        tw`mb-1`,
                        isFocused ? tw`text-white` : tw`text-[#8E8E93]`,
                      ]}
                    />
                    {/* <Text
                  style={[
                    tw`text-xs`,
                    isFocused ? tw`text-white font-bold` : tw`text-[#8E8E93]`,
                  ]}
                >
                  {label}
                </Text> */}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    </>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarHideOnKeyboard: true,
      }}
      tabBar={(props: any) => <MyTabBar {...props} />}
    >
      <Tabs.Screen name="index" />
      {/* <Tabs.Screen name="ap" /> */}
      <Tabs.Screen name="search" />
      <Tabs.Screen name="stores" />
      <Tabs.Screen name="wishlist" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
