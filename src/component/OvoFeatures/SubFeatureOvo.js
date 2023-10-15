import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react'

const SubFeatureOvo = ({ MyImage, Title }) => {
    return (
        <TouchableOpacity style={styles.buttonSubFeatureOvo}>
            <View>
                <Image style={styles.ovoFeatureIcon} source={MyImage} />
                <Text style={styles.ovoFeatureText}>{Title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SubFeatureOvo

const styles = StyleSheet.create({
    buttonSubFeatureOvo: {
        marginTop: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    ovoFeatureIcon: {
        height: 45,
        width: 45,
        marginTop: 10,
        marginHorizontal: 5,
    },
    ovoFeatureText: {
        alignSelf: 'center',
        marginTop: 5,
        color: 'black',
    },
})