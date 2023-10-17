import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import data from './data.json'; // Import local data from 'data.json'
import {Header} from './Header'; // Import a custom Header component
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = ({navigation}) => {
  const [items, setItems] = useState(data);

  const toggleFavorite = id => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return {...item, isFavorite: !item.isFavorite};
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <Header title={'Home Screen'} isIcon={false} />
      <Text style={styles.normalText}>The Long wait is over</Text>
      <Text style={styles.normalText2}>WINTER COLLECTION</Text>
      <FlatList
        numColumns={3}
        style={styles.flatList}
        data={items} // Use the data from the state to render items
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => toggleFavorite(item.id)}>
            <Image
              resizeMode="contain"
              source={{uri: item?.imageUri}}
              style={styles.image}
            />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View>
              <Text style={styles.favoriteText}>
                {item.isFavorite ? '❤️' : '🤍'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.goToFavoriteButton}
        onPress={() => navigation.navigate('Favorites', {data: items})}>
        <Text style={styles.buttonText}>Go to Favorites</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    marginTop: wp(5),
  },
  itemContainer: {
    alignItems: 'center',
    margin: wp(2),
    padding: wp(2),
    backgroundColor: '#fff',
    borderRadius: wp(2),
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
    width: wp(25),
    height: wp(25),
  },
  itemTitle: {
    marginTop: wp(2),
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  favoriteText: {
    fontSize: wp(6),
  },
  goToFavoriteButton: {
    backgroundColor: '#00aced',
    padding: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: wp(5),
    color: 'white',
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: wp(4),
    marginHorizontal: wp(5),
    color: 'black',
    fontWeight: 'normal',
    marginTop: wp(5),
  },
  normalText2: {
    marginHorizontal: wp(5),
    fontSize: wp(8),
    color: 'black',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
