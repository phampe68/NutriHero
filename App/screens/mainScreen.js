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
    Linking,
    TextInput,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import { useState } from "react";
import { SearchBar, withTheme } from "react-native-elements";
import colors from "../config/colors";

const APP_ID = "65c712a2";
const APP_KEY = "7ef4bdaa24ce83380903dbf4baac70b3";

/**
 * renders a single card
 */

const Card = ({ card }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />

            <View style={styles.cardDescription}>
                <Text style={styles.descriptionText}>{card.label}</Text>
            </View>
        </View>
    );
};

function WelcomeScreen(props) {
    const [index, setIndex] = React.useState(0); //for index
    const [query, setQuery] = React.useState("");

    //initiate with 10 empty cards
    const [data, setData] = React.useState([
        { image: null },
        { image: null },
        { image: null },
        { image: null },
        { image: null },
        { image: null },
        { image: null },
        { image: null },
        { image: null },
        { image: null },
    ]);

    //increment index with infinite scroll:
    const onSwiped = () => {
        setIndex((index + 1) % data.length);
    };

    //for mapping api response to data
    function cardMap(item) {
        return item.recipe;
    }

    /**
     * Find recipe event handler: takes string from search bar, makes api request with search string, and generates cards based on result
     */
    function findRecipesHandler() {
        const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

        let fetchRes = fetch(URL);
        fetchRes
            .then((res) => res.json())
            .then((d) => {
                //re-render cards with new data
                let x = d.hits.map(cardMap);
                setIndex(0);
                setData(x);
            });
    }

    function goToRecipe() {
        if (data[index].url != undefined) Linking.openURL(data[index].url);
    }
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpeg")}
            resizeMode={"cover"}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>NutriHero</Text>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.SearchBar}
                        onChangeText={(text) => setQuery(text)}
                        placeholderTextColor={colors.text}
                        placeholder={"search recipe here"}
                    />
                </View>
            </View>

            <View style={styles.swiperContainer}>
                <Swiper
                    infinite
                    backgroundColor={"transparent"}
                    cards={data}
                    cardIndex={index}
                    renderCard={(card) => <Card card={card} />}
                    onSwipedRight={goToRecipe}
                    onSwiper={onSwiped}
                    stackSize={4}
                    stackScale={10}
                    stackSeparation={14}
                    disableTopSwipe
                    disableBottomSwipe
                />
            </View>

            <View style={styles.actionContainer}>
                <TouchableOpacity
                    style={styles.welcomeButton}
                    onPress={findRecipesHandler}
                >
                    <Text style={styles.welcomeButtonText}>Find Recipes</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
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
        alignItems: "center",
        justifyContent: "center",
    },
    searchContainer: {
        backgroundColor: colors.primary,
        top: 150,
        position: "absolute",
        width: "90%",
        margin: 10,
        borderWidth: 3,
        borderRadius: 5,
    },
    SearchBar: {
        marginLeft: 10,
        color: colors.text,
        height: "100%",
        width: "100%",
    },
    swiper: {
        width: "100%",
        top: 250,
        alignItems: "center",
        justifyContent: "center",
    },
    cardContainer: {
        flex: 0.45,
        borderRadius: 8,
        borderColor: colors.black,
        borderWidth: 6,
        shadowRadius: 25,
        shadowColor: colors.black,
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
    },
    cardImage: {
        width: 160,
        flex: 1,
        resizeMode: "contain",
    },
    cardDescription: {
        flex: 0.3,
    },
    descriptionText: {
        color: colors.text,
        fontSize: 20,
        fontWeight: "700",
    },
    welcomeButton: {
        width: "90%",
        height: 70,
        backgroundColor: colors.primary,
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
        color: colors.text,
    },
});

export default WelcomeScreen;
