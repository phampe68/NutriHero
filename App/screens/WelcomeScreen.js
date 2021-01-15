import React from "react";
import {
    Button,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    View,
    TouchableOpacity,
    FlatList,
    Animated,
} from "react-native";
import { useState } from "react";
import colors from "../config/colors";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpeg")}
        >
            <View style={styles.welcomeTitles}>
                <Text style={styles.title}>NutriHero</Text>
                <Text style={styles.subTitle}>
                    A calorie counter that just works.
                </Text>
            </View>
            <TouchableOpacity style={styles.welcomeButton}>
                <Text style={styles.welcomeButtonText}>Add Meal</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.welcomeButton}>
                <Text style={styles.welcomeButtonText}>View Meals</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    welcomeButton: {
        width: "90%",
        height: 70,
        backgroundColor: colors.secondary,
        borderWidth: 5,
        margin: 5,
        marginBottom: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    welcomeButtonText: {
        fontSize: 20,
    },
    welcomeTitles: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: "700",
    },
    subTitle: {
        fontSize: 15,
    },
});

export default WelcomeScreen;
