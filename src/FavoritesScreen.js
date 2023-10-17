import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {Header} from './Header';

const FavoritesScreen = props => {
  const navigation = props.navigation;

  // Retrieve the data prop passed through navigation route params
  let data = props?.route?.params?.data;
  const favoriteItems = data.filter(item => item.isFavorite);

  // Function to navigate back to the previous screen
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        title={'Favorite Item Screen'}
        leftHandler={goBack}
        isIcon={true}
      />
      <FlatList
        data={favoriteItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Image
              resizeMode="contain"
              source={{uri: item.imageUri}}
              style={styles.image}
            />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: widthPercentageToDP(25),
    height: widthPercentageToDP(25),
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
