import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput} from 'react-native';

import PantryBoard from '../../components/molecules/PantryBoard/PantryBoard.js';
import ProductList from '../../components/molecules/ProductList/ProductList.js';
let testObj = [
    {id: String(new Date().getTime() + 1), title: "Chicken", category: "Meat", location: "All", expirationDate: new Date("11/23/2020").toLocaleDateString("en-us"), expired: false},
    {id: String(new Date().getTime() + 2), title: "Chicken", category: "Meat", location: "All", expirationDate: new Date("12/15/2020").toLocaleDateString("en-us"), expired: false},
    {id: String(new Date().getTime() + 3), title: "Chicken", category: "Meat", location: "All", expirationDate: new Date("12/25/2020").toLocaleDateString("en-us"), expired: false},
    {id: String(new Date().getTime() + 4), title: "Chicken", category: "Meat", location: "All", expirationDate: new Date("12/25/2020").toLocaleDateString("en-us"), expired: false},
    {id: String(new Date().getTime() + 5), title: "Chicken", category: "Meat", location: "All", expirationDate: new Date("1/1/2021").toLocaleDateString("en-us"), expired: true},
    {id: String(new Date().getTime() + 6), title: "Chicken", category: "Meat", location: "All", expirationDate: new Date("1/1/2021").toLocaleDateString("en-us"), expired: true},
    {id: String(new Date().getTime() + 7), title: "Chicken", category: "Meat", location: "Fridge", expirationDate: new Date("1/1/2021").toLocaleDateString("en-us"), expired: true},
    {id: String(new Date().getTime() + 8), title: "Chicken", category: "Meat", location: "Fridge", expirationDate: new Date("1/1/2021").toLocaleDateString("en-us"), expired: true},
]

const Dashboard = () => {
    const [masterData, setMasterData] = useState(testObj);
    const [tabs, setTabs] = useState([
        {id: "tab0", title: "All"},
        {id: "tab1", title: "Fridge"},
    ]);
    const [selectedTab, setSelectedTab] = useState("tab0");
    const [target, setTarget] = useState("");

    // Wrapped the hook in function to let us update data set to only show items located
    // In that selected tab
    const handleTabSwitch = (id) => {
        setSelectedTab(id);
    }

    // Returns a date in the form Month DD, YYYY
    const handleDateString = () => {
        return new Date().toLocaleDateString({},{timeZone:"UTC",month:"long", day:"2-digit"})
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FBF6F2",}}>
            <View style={styles.container}>
                {/*  Top part of dashboard   */}
                <View style={styles.topContainer}>
                    {/*  Title Line  */}
                    <View style={styles.textContainer}>
                        <Text style={styles.headerText}>Pantry</Text>
                        <Text style={styles.dateText}>{handleDateString()}</Text>
                    </View>
                    <View style={styles.searchBarContainer}>
                        <TextInput
                            style={styles.inputField}
                            placeholder={"Seach your pantry"}
                            placeholderTextColor="#300076"
                            onChangeText={text => setTarget(text)}
                            value={target}
                        />
                        <Image
                            style={styles.searchImage}
                            source={require('../../../assets/images/search.png')}
                        />
                    </View>
                </View>
                {/*  List portion of dashboard   */}
                <PantryBoard 
                    tabs={tabs}
                    selected={selectedTab}
                    setSelectedTab={handleTabSwitch}
                    data={masterData}
                    setData={setMasterData}
                />
                <ProductList
                    displayData={masterData}
                    setData={setMasterData}
                />
            </View>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
        width: "100%"
    },
    textContainer: {
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    headerText: {
        fontSize: 24,
        color: "#300076",
        fontWeight: "700",
    },
    dateText: {
        fontSize: 22,
        color: "#300076",
        fontWeight: "700",
    },
    searchImage: {
        height: 20,
        width: 20,
        position: "absolute",
        top: 10,
        left: 10
    },
    inputField: {
        backgroundColor: "#E2E6FF",
        color: "#300076",
        width: 300,
        height: 40,
        paddingLeft: 40,
    }
});

export default Dashboard;

