import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverView from './screens/MealsOverView';
import MealDetail from './screens/MealDetail';
import FavouriteScreen from './screens/FavouriteScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteContextProvider from './store/context/favourite_context';
import { Provider } from 'react-redux';
import { favouriteSlice, store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  function DrawerPage() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={CategoriesScreen} />
        <Drawer.Screen name="Favourite" component={FavouriteScreen} />
      </Drawer.Navigator>
    )
  }
  return (
    <>
      <Provider store={store}>
      {/* <FavouriteContextProvider> */}
        <NavigationContainer>
          <StatusBar style='light' />
          <Stack.Navigator
        
            screenOptions={{
              animation:'slide_from_right',
              headerStyle: {
                backgroundColor: '#4f1010',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              contentStyle: { backgroundColor: '#ab897b' }
            }}
          >
            <Stack.Screen name="MealsCategories" component={DrawerPage}
              options={{
                headerShown: false,

              }} />
            <Stack.Screen name="MealsOverView" component={MealsOverView}
              options={({ route, navigation }) => {
                const catId = route.params.title;
                return { title: catId }
              }}
            />
            <Stack.Screen name="MealDetail" component={MealDetail}

            />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </FavouriteContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({

});
