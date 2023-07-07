import { View, Text, Image, StyleSheet, Button} from 'react-native'
import {React, useContext, useLayoutEffect} from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { ScrollView } from 'react-native';
import IconButton from '../components/IconButton';
import { FavouriteContext } from '../store/context/favourite_context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite,removeFavourite } from '../store/redux/store';
export default function MealDetail({ route, navigation }) {
  const id = route.params.item.id;
  const mealInfor = MEALS.find((meal) => meal.id === id);


  const favMealsId= useSelector((state)=>state.favouriteMeals.ids)

  const isFavRedux = favMealsId.includes(id);
  // dùng useDispatch hook để gửi action tới reducer
  const disPatch = useDispatch()
  function FavOnPress(){
    // if(isFav){
    //   favCtx.remove(id)
    // }
    // else{
    //   favCtx.add(id)
    // }
    if(isFavRedux){
      disPatch(removeFavourite({id:id}))
    }
    else{
      disPatch(addFavourite({id:id}))
    }
    
  }
  useLayoutEffect(()=>{
    navigation.setOptions(
      {
        title: route.params.item.title,
        headerRight: () => { return <IconButton name={isFavRedux?'star':'star-outline'} onPress={FavOnPress}/> }
      }
    )
  },[navigation,FavOnPress])

  const favCtx=useContext(FavouriteContext)
  const isFav= favCtx.ids.includes(id)
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: mealInfor.imageUrl }} style={styles.img} />
        <Text style={styles.title}>{mealInfor.title}</Text>
        <MealDetails item={mealInfor} />
        <View style={styles.listContainer}>
          <Subtitle title='Ingredients' />
          <List data={mealInfor.ingredients} />
          <Subtitle title='Steps' />
          <List data={mealInfor.steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 8,
    textAlign: 'center',
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  container: {
    alignItems: 'center',
  }

})