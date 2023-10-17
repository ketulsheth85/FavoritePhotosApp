import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import back from '../src/backbutton.png';

export const Header = ({title, leftHandler, isIcon}) => {
  return (
    <View style={[styles.mainContainer]}>
      {isIcon && (
        // Render the back button as a TouchableOpacity with an onPress handler

        <TouchableOpacity onPress={leftHandler}>
          <Image
            resizeMode="contain"
            source={back}
            style={{width: wp(10), height: wp(10)}}
            tintColor="white"
          />
        </TouchableOpacity>
      )}

      <View style={{flex: 1}}>
        <Text style={[styles.titleContainer]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === 'ios' ? hp(6) : wp(5),

    flexDirection: 'row',
    backgroundColor: '#00aced',
    paddingBottom: wp(1),
  },

  titleContainer: {
    flex: 1,

    marginTop: Platform.OS === 'ios' ? 4 : 0,

    alignSelf: 'center',

    fontSize: wp(5),
    color: '#ffffff',
    fontWeight: 'bold',
  },

  rightLableContainer: {
    flex: 1,

    fontSize: wp(3),

    marginTop: 9,

    textAlign: 'center',
  },
});
