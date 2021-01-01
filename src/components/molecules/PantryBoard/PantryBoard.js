import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, View, FlatList} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import ListTab from "../../atoms/ListTab/ListTab.js";

const getTabs = state => state.tabs.tabs;
const getSelectedTab = state => state.selects.tab;

const PantryBoard = (props) => {
    const storeTabs = useSelector(getTabs);
    const storeSelectedTab = useSelector(getSelectedTab);
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
        {console.log(storeSelectedTab)}
            <View style={styles.tabContainer}>
                <FlatList
                    style={{width: "100%"}}
                    horizontal={true}
                    data={storeTabs}
                    extraData={storeTabs}
                    renderItem={({item}) => <ListTab tab={item} selected={storeSelectedTab} action={props.handleTabClick} />}
                    keyExtractor={(tab) => tab.id}
                    removeClippedSubviews={false}
                />
                <View style={styles.line} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignSelf: "stretch",
    },
    tabContainer: {
        marginLeft: 20,
        marginRight: 20,
    },
    line: {
        borderTopColor: "#300760",
        borderTopWidth: 6,
    }
});

export default PantryBoard;