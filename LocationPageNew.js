import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions,
        ImageBackground, Image } from 'react-native';

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 1 / 1);
const imageWidth = dimensions.width;


const LocationPageNew = ({route, navigation}) => {
  const props = route.params['information'];

  const backButtonAction = () => {
    navigation.goBack();
  }

  return (
    <PreviewLayout
      image={props.mainImage}
      city={props.name}
      country={props.country}
      price={props.price}
      openTime={props.openTime}
      backButtonAction={backButtonAction}
      >
      <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
      <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
      <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  image,
  city,
  country,
  price,
  openTime,
  backButtonAction
}) => (
  <View style={{padding: 0, flex: 1, backgroundColor: `rgb(58, 65, 94)`,}}>
    <ImageBackground source={image} style={styles.image}>
            <TouchableOpacity style={styles.backButton} onPress={backButtonAction}>
                <Text style={styles.bigText}>{'<'}</Text>
            </TouchableOpacity>
        </ImageBackground>
    <View style={styles.containerMain}>
        <View style={styles.row}>
            <View style={styles.container}>
                <Text style={styles.bigText}>{city}</Text>
                <Text style={styles.smallText}>{country}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.mediumText}>{`$${price}`}</Text>
                <Text style={styles.smallText}>Per Person</Text>
            </View>
        </View>
        <View style={{
                marginTop: 20,
                marginBottom: 20,
                width: 360,
                borderTopColor: 'white',
                borderTopWidth: 3,
            }}/>
            <View style={styles.lowerRow}>
                <View style={styles.row}>
                    <Image source={require('./assets/pin.png')} style={styles.icon}></Image>
                    <Text style={styles.mediumText}>{`${city}, ${country}`}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.mediumText}> </Text>
                    <Text style={styles.smallText}> </Text>
                </View>
            </View>
            <View style={styles.lowerRow}>
                <View style={styles.row}>
                    <Image source={require('./assets/clock.png')} style={styles.icon}></Image>
                    <View style={styles.container}>
                        <Text style={styles.smallText}>Open</Text>
                        <Text style={styles.smallTextBold}>{`0${openTime}:00 AM`}</Text>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.mediumText}> </Text>
                    <Text style={styles.smallText}> </Text>
                </View>
            </View>
            <View style={styles.lowerRow}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.smallText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>

  </View>
);

const styles = StyleSheet.create({
    backButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: `rgb(58, 65, 94)`,
        alignItems: 'center',
        marginTop: 60,
        marginLeft: 25,
    },
    button: {
        backgroundColor: `rgb(137, 141, 156)`,
        alignItems: 'center',
        padding: 10,
        width: 300,
        borderRadius: 20,
    },
    image: {
        height: imageHeight, 
        width: imageWidth,
    },
    icon: {
        marginRight: 20,
    },
  container: {
    flex: 1,
    marginTop: 0,
    flexDirection: 'column',
  },
  rightContainer: {
    flex: 1,
    marginTop: 0,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  containerMain: {
    flex: 1,
    marginTop: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  lowerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
  bigText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  mediumText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  smallText: {
    color: 'white',
    fontSize: 20,
  },
  smallTextBold: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LocationPageNew;