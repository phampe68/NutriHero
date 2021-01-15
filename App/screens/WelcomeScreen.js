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
import Swiper from "react-native-deck-swiper";

import { useState } from "react";
import { SearchBar, withTheme } from "react-native-elements";
import colors from "../config/colors";

const APP_ID = "65c712a2";
const APP_KEY = "7ef4bdaa24ce83380903dbf4baac70b3";
const URL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;

let data = [
    {
        id: "1",
        price: "$120",
        image: "https://i.ytimg.com/vi/P-Ojv_1veCg/maxresdefault.jpg",
    },
    {
        id: "1",
        price: "$120",
        image: "https://i.ytimg.com/vi/P-Ojv_1veCg/maxresdefault.jpg",
    },
    {
        id: "1",
        price: "$120",
        image: "https://i.ytimg.com/vi/P-Ojv_1veCg/maxresdefault.jpg",
    },
    {
        id: "1",
        price: "$120",
        image: "https://i.ytimg.com/vi/P-Ojv_1veCg/maxresdefault.jpg",
    },
    {
        id: "1",
        price: "$120",
        image: "https://i.ytimg.com/vi/P-Ojv_1veCg/maxresdefault.jpg",
    },
    {
        id: "1",
        price: "$120",
        image: "https://i.ytimg.com/vi/P-Ojv_1veCg/maxresdefault.jpg",
    },
];
/**
 * makes a request to edamam's recipe api according to the constants above
 */
const getData = async () => {
    let fetchRes = fetch(URL);
    fetchRes
        .then((res) => res.json())
        .then((d) => {
            console.log(d.hits);
            data = d.hits;
        });
};

const Card = ({ card }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />
        </View>
    );
};

function WelcomeScreen(props) {
    const [index, setIndex] = React.useState(0);
    const onSwiped = () => {
        setIndex(index + 1);
    };

    console.log(URL);
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpeg")}
        >
            <View style={styles.searchContainer}>
                <SearchBar
                    style={styles.SearchBar}
                    placeholder={"search recipe here"}
                />
            </View>

            <Swiper
                backgroundColor={"transparent"}
                cards={data}
                cardIndex={index}
                renderCard={(card) => <Card card={card} />}
                onSwiper={onSwiped}
                stackSize={4}
                stackScale={10}
                stackSeparation={14}
                disableTopSwipe
                disableBottomSwipe
            />

            <View style={styles.welcomeTitles}>
                <Text style={styles.title}>NutriHero</Text>
                <Text style={styles.subTitle}>
                    Search your favourite recipes!
                </Text>
            </View>

            <FlatList></FlatList>

            <TouchableOpacity style={styles.welcomeButton} onPress={getData}>
                <Text style={styles.welcomeButtonText}>Find Recipes</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
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
        position: "relative",
    },
    welcomeButtonText: {
        fontSize: 20,
    },
    welcomeTitles: {
        top: 50,
        alignItems: "center",
    },
    searchContainer: {
        top: 150,
        position: "absolute",
        width: "90%",
        margin: 10,
        borderWidth: 3,
        borderRadius: 5,
    },
    search: {
        position: "absolute",
        height: "100%",
        width: "100%",
    },
    title: {
        fontSize: 40,
        fontWeight: "700",
    },
    subTitle: {
        fontSize: 15,
    },
    swiper: {
        flexWrap0: 0.45,
    },
    card: {
        height: 300,
        width: "90%",
        borderColor: "black",
        borderRadius: 10,
        shadowRadius: 25,
        shadowColor: "black",
        shadowOpacity: 0.8,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
    },
    cardImage: {
        width: 160,
        flex: 1,
        resizeMode: "contain",
    },
});

export default WelcomeScreen;
