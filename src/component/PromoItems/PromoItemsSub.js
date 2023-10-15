import React from 'react';
import { View, StyleSheet, Dimensions, Image, Text, } from 'react-native';

const PromoItemsSub = (props) => {
    return (
        <View style={styles.Sub}>
            <Image source={props.image} style={styles.promoImage} />
            <View style={styles.textPromo}>
                <Text style={{ fontWeight: 'bold', fontSize: 17, color: 'black' }}>{props.text}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 13, color: 'black' }}>{props.until}</Text>
            </View>

            {
                props.diskon ? <View style={styles.textDiskon}><Text>{props.diskon}</Text></View> : <View></View>
            }
        </View>
    );
};

export default PromoItemsSub;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    Sub: {
        backgroundColor: 'white',
        elevation: 4,
        borderRadius: 10,
        width: windowWidth / 2 - 27,
        marginRight: 20,
        marginBottom: 20,
    },
    promoImage: {
        height: windowWidth / 2 - 27,
        width: windowWidth / 2 - 27,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textPromo: {
        marginLeft: 10,
        marginVertical: 10,
        color: 'black'
    },
    textDiskon: {
        position: 'absolute',
        top: 10,
        fontFamily: 'TitilliumWeb-Bold',
        backgroundColor: 'white',
        padding: 4,
        borderRadius: 4,
        left: 5,
        color: 'black'
    }
});
