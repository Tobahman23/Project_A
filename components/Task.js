import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.item}>
        <View style={styles.itemLeft}>
        <View style={styles.square}/>
        <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'lightgray',
        padding: 15,
        borderRadius: 10,
        marginTop:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'indigo',
        opacity: 0.6,
        marginRight: 15,
        borderRadius: 5,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 15,
        height: 15,
        borderColor: 'indigo',
        borderWidth: 3,
        borderRadius: 10,
        opacity: 0.6,
    },
});

export default Task;