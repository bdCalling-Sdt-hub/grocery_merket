import React from "react";
import { Stack } from "expo-router";
import tw from "../../lib/tailwind";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarAnimation: "fade",
        statusBarStyle: "light",
        statusBarBackgroundColor: tw.color("primary"),
      }}
    >
      <Stack.Screen name="drawer" />
      <Stack.Screen name="addToCart/cart" />
      <Stack.Screen name="addToCart/checkOut" />
      <Stack.Screen name="addToCart/simpleCart" />
      <Stack.Screen name="messaging/messaging" />
      <Stack.Screen name="notification/notification" />
      <Stack.Screen name="notification/orderAccept" />
    </Stack>
  );
};

export default RootLayout;
