import React, { useState, useEffect, StyleSheet } from "react";
import { View } from "react-native";
import { FlatList } from "react-native";
import { SearchBar, withTheme } from "react-native-elements";

const APP_ID = "65c712a2";
const APP_KEY = "7ef4bdaa24ce83380903dbf4baac70b3";
const URL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}`;

/**
 * makes a request to edamam's recipe api according to the constants above
 */
const getData = async () => {
    let fetchRes = fetch(URL);
    fetchRes
        .then((res) => res.json())
        .then((d) => {
            console.log(d);
        });
};

function AddFoodScreen(props) {
    //getData();

    getData();
    return (
        <View>
            <SearchBar placeholder="Type Here..." />
        </View>
    );
}

export default AddFoodScreen;
