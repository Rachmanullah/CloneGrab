import { Dimensions, ScrollView, StyleSheet, Text, View, StatusBar, Image, TextInput } from 'react-native'
import React from 'react'
import { SearchNormal } from 'iconsax-react-native'
import { MainFeatures } from '../../component'
import { bannerGrab } from '../../assets'

const Home = () => {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="#23b320"
            />
            <View style={styles.header}>
                <View style={{ margin: 20 }}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontFamily: 'TitilliumWeb-Regular',
                            fontWeight: 'bold',
                            color: 'white'
                        }}
                    >
                        Di sini untuk pertama kalinya?
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'TitilliumWeb-Regular',
                        color: 'white'
                    }}>
                        Daftar dan lakukan lebih banyak hal bersama Grab!
                    </Text>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: 'white',
                    width: '85%',
                    alignSelf: 'center',
                    borderRadius: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 12,
                    paddingVertical: 5,
                    top: -30,
                    shadowColor: 'black',
                    elevation: 5
                }}
            >
                <SearchNormal size="25" color="#565e56" />
                <TextInput
                    placeholder='Cari di aplikasi Grab'
                    placeholderTextColor='#565e56'
                    style={styles.textInput} />
            </View>
            <View style={{ width: '90%', alignSelf: 'center' }}>
                <MainFeatures />
                <Image source={bannerGrab} style={{ width: '100%', objectFit: 'contain' }} />
                <Text style={{ fontFamily: 'TitilliumWeb-Bold',color:'black', fontSize: 24, }}>Makanan Untukmu</Text>
            </View>
        </ScrollView>
    )
}

export default Home
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#23b320',
        height: 250,
        alignContent: 'center',
        justifyContent: 'center'
    },
    textInput: {
        color: 'black',
        fontFamily: 'TitilliumWeb-Regular',
        fontSize: 18,
        margin: 5
    }
})