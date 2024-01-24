import React from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';

import StarRating from '../../components/StarRating';
import {base_url, options, poster_path, size_path_w220} from '../../constants';
import CustomHeader from '../../components/CustomHeader';
import {FlatItem} from '../../models';
import styles from './styles';

type Props = {
  navigation: any;
};

export default function Home({navigation}: Props) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    function loadMovies() {
      fetch(`${base_url}/popular?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
          setMovies(data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }

    loadMovies();
  }, []);

  const renderItem = ({item}: FlatItem) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailMovie', {id: item?.id});
        }}>
        <View key={String(item?.id)} style={[styles.card, styles.shadowProp]}>
          <Image
            style={styles.img}
            source={{
              uri: `${poster_path}${size_path_w220}${item?.poster_path}`,
            }}
          />
          <Text numberOfLines={1} style={styles.text}>
            {item?.original_name}
          </Text>
          <Text numberOfLines={1} style={styles.text}>
            {item?.first_air_date}
          </Text>
          <StarRating rating={{average: item?.vote_average}} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {/* {customError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{customError}</Text>
        </View>
      )} */}
      <CustomHeader title="Popular Movies" />
      <FlatList
        testID="flatList"
        contentContainerStyle={styles.flatListStyle}
        data={movies}
        numColumns={2}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}
