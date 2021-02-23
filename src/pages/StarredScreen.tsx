import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import {Divider, Header} from '../components';
import {backgroundColor} from '../constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {HomeScreen} from './HomeScreen';
import {HomeGrid} from '../components/home';

interface props {
  children?: JSX.Element;
  route?: any;
  navigation?: any;
}

const StarredScreen: React.FC<props> = ({route, navigation}) => {
  const [AsyncData, setAsyncData] = useState([]);

  const getAsyncData = async () => {
    const asyncData = await AsyncStorage.getItem('starred');
    if (asyncData) {
      console.log(asyncData);
      setAsyncData(JSON.parse(asyncData));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = getAsyncData();

      return () => unsubscribe;
    }, []),
  );

  return (
    <View style={styles.container}>
      <Header>Starred Screen</Header>
      {AsyncData.length == 0 && (
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            marginTop: 20,
          }}>
          No Star Yet
        </Text>
      )}
      <ScrollView>
        {AsyncData.map((item: any) => {
          return (
            <HomeGrid
              {...item}
              AsyncData={AsyncData}
              getAsyncData={() => getAsyncData()}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

interface Style {
  container?: ViewStyle;
  heading?: TextStyle;
  details?: TextStyle;
  image?: ImageStyle;
  txtContain?: ViewStyle;
  comma?: TextStyle;
  infoContainer?: ViewStyle;
  infoHead?: TextStyle;
  infoDetails?: TextStyle;
  val?: ViewStyle;
  video?: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  heading: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  details: {
    textAlign: 'justify',
    color: '#a1a1a1',
    maxWidth: '95%',
    fontFamily: 'serif',
    alignSelf: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  txtContain: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 5,
  },
  comma: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'notoserif',
  },
  infoContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoHead: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  infoDetails: {
    color: 'white',
    textAlign: 'center',
  },
  val: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  video: {
    marginVertical: 15,
    width: '95%',
    alignSelf: 'center',
  },
});
export {StarredScreen};
