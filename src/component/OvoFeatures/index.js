import React from 'react'
import { View, StyleSheet } from 'react-native';
import SubFeatureOvo from './SubFeatureOvo';
import { PayIcon, Pulsa, Reward, Topup } from '../../assets';

const OvoFeatures = () => {
    return (
        <View style={styles.wrapperPay}>
            <SubFeatureOvo MyImage={PayIcon} Title="Pay" />
            <SubFeatureOvo MyImage={Pulsa} Title="Pulsa" />
            <SubFeatureOvo MyImage={Topup} Title="Topup" />
            <SubFeatureOvo MyImage={Reward} Title="Reward" />
        </View>
    )
}

export default OvoFeatures

const styles = StyleSheet.create({
    wrapperPay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
})