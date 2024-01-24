import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {theme} from '../../style/theme';

type Props = {
  title: string;
};

export default function Header({title}: Props) {
  const tmdb = require('../../assets/tmdb_60.png');

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <Image testID="imgLogo" source={tmdb} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.COLORS.ui.primary,
  },
  headerText: {
    color: theme.COLORS.text.white,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
});
