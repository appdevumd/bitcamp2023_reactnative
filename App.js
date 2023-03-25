
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Location from './LocationPage';
import LocationPageNew from './LocationPageNew';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Location" component={Location} options={{ headerShown: true }} /> */}
        <Stack.Screen name="Location" component={LocationPageNew} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

