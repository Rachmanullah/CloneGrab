import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PromoItemsSub from './PromoItemsSub';
import { Beras, Garam, Gula, Kecap } from '../../assets';


const PromoItems = () => {
    return (
        <ScrollView horizontal style={styles.PromoItems}>
            <PromoItemsSub image={Gula} text="Gula Manis" diskon="Diskon 40%" until="19 Juli 2023" />
            <PromoItemsSub image={Beras} text="Beras Asli" diskon="Diskon 30%" until="20 Juli 2023" />
            <PromoItemsSub image={Kecap} text="Kecap Hitam" diskon="Diskon 20%" until="21 Juli 2023" />
            <PromoItemsSub image={Garam} text="Garam" />
        </ScrollView>
    );
};

export default PromoItems;

const styles = StyleSheet.create({
    PromoItems: {
        marginHorizontal: 18,
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
});
