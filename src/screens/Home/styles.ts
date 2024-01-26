import {StyleSheet} from 'react-native';
import {theme} from '../../style/theme';

const styles = StyleSheet.create({
  flatListStyle: {
    alignItems: 'center',
    paddingTop: 8,
  },
  card: {
    width: 175,
    height: 350,
    padding: 8,
    backgroundColor: theme.COLORS.text.white,
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 5,
  },
  img: {
    width: '100%',
    height: 250,
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
  },
  date: {
    fontSize: 15,
    marginTop: 10,
  },
  errorContainer: {
    width: '100%',
    backgroundColor: theme.COLORS.status.error,
    padding: 30,
  },
  errorText: {
    fontSize: 18,
    color: theme.COLORS.text.white,
  },
});

export default styles;
