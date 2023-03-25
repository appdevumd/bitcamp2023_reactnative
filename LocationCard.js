import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';

export default function LocationCard(props) {

    return(
        <View style={styles.overall}>
            <ImageBackground source={props.image} style={styles.image}>
                <View style={styles.textContainer}>
                    <Text style={styles.cityText} onPress={props.onPress}>{props.city}</Text>
                    <Text style={styles.distanceText} onPress={props.onPress}>{`${props.distance} away`}</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    overall: {
        paddingBottom: 25,
    },
    image: {
      width: 350,
      height: 350,
      borderRadius: 50,
      overflow: "hidden",
    },
    textContainer: {
        color: 'white',
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'left',
        paddingLeft: 25,
        paddingBottom: 10
    },
    cityText: {
        color: 'white',
        fontSize: 40,
        fontWeight: "bold"
    },
    distanceText: {
        color: 'white',
        fontSize: 20
    }
});
  
