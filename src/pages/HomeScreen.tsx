import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {Divider, Header} from '../components';
import {HomeGrid} from '../components/home';
import NewsGrid from '../components/news/NewsGrid';
import {backgroundColor} from '../constants/colors';
import {stringData} from '../data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
interface props {
  children?: JSX.Element;
}

const HomeScreen: React.FC<props> = () => {
  const [AsyncData, setAsyncData] = useState<any>([]);

  const getAsyncData = async () => {
    const allData: string | null = await AsyncStorage.getItem('starred');
    if (allData) {
      setAsyncData(JSON.parse(allData));
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
      <Header>Youtube Stars</Header>
      <ScrollView>
        <Divider large />
        <View style={styles.imageWraper}></View>
        <Divider large />
        {/* <View> */}
        {stringData.map((item: any) => {
          return (
            <HomeGrid
              {...item}
              AsyncData={AsyncData}
              getAsyncData={() => getAsyncData()}
            />
          );
        })}
        {/* </View> */}
        <Divider />
      </ScrollView>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  lottieWrapper: ViewStyle;
  textDetails: TextStyle;
  logoImage: ImageStyle;
  imageWraper: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  textDetails: {
    color: 'white',
    fontSize: 18,
    textAlign: 'justify',
    maxWidth: '92%',
    alignSelf: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 52,
    textAlign: 'center',
    color: 'white',
  },
  lottieWrapper: {
    width: '100%',
    height: 500,
  },
  logoImage: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    maxWidth: '96%',
  },
  imageWraper: {
    backgroundColor: 'white',
    maxWidth: '95%',
    alignSelf: 'center',
  },
});

export {HomeScreen};
