import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';

import StarRating from '../../components/StarRating';
import {poster_path, size_path_w220} from '../../constants';
import CustomHeader from '../../components/CustomHeader';
import {SeriesResponseType, Series, ItemSeries} from '../../models';
import {api} from '../../service/api.movies';
import styles from './styles';

// type Props = {
//   navigation: any;
// };

export default function Home() {
  const [movies, setMovies] = React.useState<Series[]>([]);
  const [customError, setCustomError] = React.useState('');
  const {navigate} = useNavigation();

  React.useEffect(() => {
    api
      .loadMovies()
      .then(response => response.json())
      .then((data: SeriesResponseType) => {
        setMovies(data?.results);
      })
      .catch(error => {
        setCustomError(error);
      });
  }, []);

  const renderItem = ({item}: ItemSeries) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate('DetailMovie', {id: item?.id});
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
      {customError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{customError}</Text>
        </View>
      )}
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
