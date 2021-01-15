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
            resizeMode={"cover"}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>NutriHero</Text>
                <View style={styles.searchContainer}>
                    <SearchBar
                        style={styles.SearchBar}
                        placeholder={"search recipe here"}
                    />
                </View>
            </View>

            <View style={styles.swiperContainer}>
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
            </View>

            <View style={styles.actionContainer} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "700",
    },
    background: {
        flex: 1,
        flexDirection: "column",
    },
    titleContainer: {
        width: "100%",
        height: "30%",
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
    },
    swiperContainer: {
        width: "100%",
        height: "50%",
        backgroundColor: "transparent",
    },
    actionContainer: {
        width: "100%",
        height: "20%",
        backgroundColor: "transparent",
    },
    searchContainer: {
        top: 150,
        position: "absolute",
        width: "90%",
        margin: 10,
        borderWidth: 3,
        borderRadius: 5,
    },
    SearchBar: {
        height: "100%",
        width: "100%",
    },

    swiper: {
        width: "100%",
        top: 250,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        flex: 0.45,
        borderRadius: 8,
        shadowRadius: 25,
        shadowColor: colors.black,
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
    },
    cardImage: {
        width: 160,
        flex: 1,
        resizeMode: "contain",
    },
});

export default WelcomeScreen;
