import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';
import { ImageBackground } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 1 / 1);
const imageWidth = dimensions.width;

export default function Location({route, navigation}) {
    // console.log(`props: ${route.params['information']['name']}`);
    const props = route.params['information'];

    return(
        <View style={styles.overall}>
            <ImageBackground source={props.mainImage} style={styles.image}>
                {/* <View style={styles.textContainer}>
                    <Text style={styles.cityText} onPress={props.onPress}>{props.city}</Text>
                    <Text style={styles.distanceText} onPress={props.onPress}>{`${props.distance} away`}</Text>
                </View> */}
            </ImageBackground>
            <View style={styles.topBox}>
                <View style={styles.topLocationDescription}>
                    <Text style={styles.cityName}>{props.name}</Text>
                    <Text>{props.country}</Text>
                </View>
                <View>
                    <Text>{`$${props.price}`}</Text>
                    <Text>Per Person</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overall: {
        backgroundColor: `rgb(58, 65, 94)`,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: imageHeight, 
        width: imageWidth,
    },
    cityName: {
        color: 'white',
        fontSize: 25,
    },
    topLocationDescription: {
        flex: 1,
        flexDirection: 'column'
    },
    topBox: {
        flex: 1,
        padding: 20,
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
    }
});
  
