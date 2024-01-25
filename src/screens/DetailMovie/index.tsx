import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Modalize, useModalize} from 'react-native-modalize';
import {base_url, options, poster_path, size_path} from '../../constants';
import {theme} from '../../style/theme';

import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  route: {
    params: {
      id: number;
    };
  };
};

const DetailMovie = ({route}: Props) => {
  const {ref, open, close} = useModalize();
  const {height} = useWindowDimensions();
  const [detailSeries, setDetailSeries] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [season, setSeason] = React.useState('');

  const {id} = route.params;

  React.useEffect(() => {
    function loadMovies() {
      fetch(`${base_url}/${id}?language=en-US`, options)
        .then(response => response.json())
        .then(data => {
          setDetailSeries(data);
        })
        .catch(error => {
          console.log(error);
        });
    }

    loadMovies();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.containerItem} key={item.id}>
      <Text
        onPress={() => {
          setSeason(item?.name);
          setIsModalOpen(!isModalOpen);
          close();
        }}
        style={styles.season}>
        {item?.name}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: `${poster_path}${size_path}${detailSeries?.backdrop_path}`,
        }}
      />

      {detailSeries.first_air_date && (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            {detailSeries?.name} ({detailSeries?.first_air_date.split('-')[0]})
          </Text>
        </View>
      )}

      <View style={styles.overview}>
        <Text style={styles.title}>Overview</Text>

        <Text style={styles.overviewTitle}>{detailSeries?.overview}</Text>
      </View>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          open();
          setIsModalOpen(!isModalOpen);
        }}>
        <View style={styles.containerSeason}>
          <Text style={styles.linkSeason}>{season ? season : 'Seasons'}</Text>
          <Icon
            name={isModalOpen ? 'keyboard-arrow-down' : 'keyboard-arrow-up'}
            size={25}
            color={theme.COLORS.text.white}
          />
        </View>
      </TouchableOpacity>

      <GestureHandlerRootView>
        <Modalize
          onClose={() => {
            setIsModalOpen(!isModalOpen);
          }}
          ref={ref}
          snapPoint={350}
          modalStyle={styles.modalStyle}>
          <ScrollView showsVerticalScrollIndicator>
            {detailSeries?.seasons &&
              detailSeries?.seasons.map(item => {
                return renderItem({item});
              })}
          </ScrollView>
        </Modalize>
      </GestureHandlerRootView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.ui.primary,
  },
  modal: {
    backgroundColor: theme.COLORS.bg.secondary,
  },
  title: {
    fontSize: 25,
    color: theme.COLORS.text.white,
    marginVertical: 10,
  },
  header: {
    padding: 10,
    color: theme.COLORS.text.white,
  },
  headerTitle: {
    fontSize: 25,
    color: theme.COLORS.text.white,
  },
  overview: {
    margin: 10,
    color: theme.COLORS.text.white,
  },
  overviewTitle: {
    fontSize: 15,
    color: theme.COLORS.text.white,
  },
  img: {
    width: '100%',
    height: 250,
  },
  season: {
    width: '100%',
    padding: 5,
    fontSize: 22,
    color: theme.COLORS.text.white,
    marginVertical: 6,
    textAlign: 'center',
  },
  linkSeason: {
    fontSize: 20,
    color: theme.COLORS.text.linkSeason,
    marginRight: 5,
  },
  containerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSeason: {
    width: '100%',
    flexDirection: 'row',
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
  modalStyle: {
    padding: 16,
    backgroundColor: theme.COLORS.bg.secondary,
  },
});

//make this component available to the app
export default DetailMovie;
