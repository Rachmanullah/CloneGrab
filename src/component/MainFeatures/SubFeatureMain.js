import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'

const SubFeatureMain = (props) => {
    return (
        <TouchableOpacity style={styles.buttonSubFeatureUtama}>
            <View>
                <Image style={styles.FeatureUtamaIcon} source={props.Image} />
                <Text style={styles.FeatureUtamaText}>{props.Title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SubFeatureMain

const styles = StyleSheet.create({
    buttonSubFeatureUtama: {
        borderRadius: 10,
        overflow: 'hidden',
        shadowOpacity: 100,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowRadius: 7.50,
        // elevation: 1,
        width: '20%',
        marginBottom: 15,
        marginEnd: 20,
        alignItems: 'center',
    },
    FeatureUtamaIcon: {
        height: 60,
        width: 60,
    },
    FeatureUtamaText: {
        textAlign: 'center',
        marginTop: 5,
        color: 'black',
    },
})