import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Bike, Car, Doctor, Food, More, Pulsa, Send, Subcribe } from '../../assets';
import SubFeatureMain from './SubFeatureMain';
import { useNavigation } from '@react-navigation/native';

const MainFeatures = () => {
    const navigation = useNavigation();
    return (
        <ScrollView horizontal style={styles.wrappertMainFeatures}>
            <SubFeatureMain Image={Food} Title="Makanan" />
            <SubFeatureMain Image={Bike} Title="Motor" />
            <SubFeatureMain Image={Car} Title="Mobil" />
            <SubFeatureMain Image={Send} Title="Express" />
            <SubFeatureMain Image={More} Title="More" />
        </ScrollView>
    );
};

export default MainFeatures;

const styles = StyleSheet.create({
    wrappertMainFeatures: {
        marginTop: -10,
        alignSelf: 'center',
    },
});
