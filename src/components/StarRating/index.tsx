import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Rating} from '../../models';

type Props = {
  rating?: Rating;
};

// create a component
const starRating = ({rating}: Props) => {
  if (!rating?.average) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Icon testID="starIcon" name="star" color="yellow" size={25} />
      <Text style={styles.text}>{rating.average}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 12,
  },
  text: {
    fontSize: 18,
    color: '#7e7a7a',
  },
});

//make this component available to the app
export default starRating;
