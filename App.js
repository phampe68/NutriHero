import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddFoodScreen from "./App/screens/AddFoodScreen";
//import WelcomeScreen from "./App/screens/WelcomeScreen";
import TestScreen from "./App/screens/testScreen";

export default function App() {
    return <TestScreen />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
