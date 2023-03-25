import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useEffect, useState } from 'react';
import LocationCard from './LocationCard';

import { locations } from './data';

export default function Home({ navigation }) {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(locations);

  useEffect(() => {
    setSearchResults(locations.filter((element) => element.name.toLowerCase().indexOf(search.toLowerCase()) != -1));
  }, [search]);

  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>
          Explore
        </Text>
        <View style={styles.mainContent}>
          <SearchBar
            styles={styles.searchBar}
            showLoading={false}
            platform={Platform.OS}
            clearIcon={true}
            onChangeText={(text) => setSearch(text)}
            placeholder='Discover Places'
            cancelButtonTitle='Cancel'
            value={search}
          />
          <ScrollView>
            <View style={{paddingBottom: 100}}>
                {searchResults.map((element, index) => (
                    <LocationCard city={element.name} 
                            distance={element.distance} 
                            image={element.image}
                            onPress={() => {navigation.navigate('Location', {"information": element})}} />
                ))}
            </View>
          </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 125,
    marginLeft: 0,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  searchBar: {
    maxWidth: 100
  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  }
});
