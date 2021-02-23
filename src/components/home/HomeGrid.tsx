import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  StyleSheet,
  Image,
  ImageStyle,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import {Divider} from '../common';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import {backgroundColor} from '../../constants/colors';
interface Props {
  children?: JSX.Element;
  title?: string;
  details?: string;
  image?: any;
  link?: string;
  age?: string | number;
  subscriber?: string;
  country?: string;
  type?: string;
  videos?: any;
  id: number;
  AsyncData?: any;
  getAsyncData?: any;
}

const HomeGrid: React.FC<Props> = (props) => {
  const {
    title,
    image,
    details,
    link,
    age,
    subscriber,
    country,
    type,
    videos,
    id,
    AsyncData,
    getAsyncData,
  } = props;
  const navigation = useNavigation();

  // get all starred data at the beginning
  const getStarredData = () => {
    console.log('Async data us', AsyncData, typeof AsyncData);
    if (AsyncData) {
      const selected: boolean = AsyncData?.reduce((acc: any, item: Props) => {
        if (acc === true) return true;
        if (id === item.id) {
          return true;
        }
        return false;
      }, false);
      return selected;
    }
    return false;
  };

  const starred: boolean | undefined = React.useMemo(() => getStarredData(), [
    image,
    AsyncData,
  ]);

  const handleStarPress = async () => {
    try {
      if (starred) {
        const filterData = AsyncData.reduce((acc: any, item: any) => {
          if (item.id === id) {
            return acc;
          } else {
            return [...acc, item];
          }
        }, []);
        await AsyncStorage.setItem('starred', JSON.stringify(filterData));
      } else {
        await AsyncStorage.setItem(
          'starred',
          JSON.stringify([
            ...AsyncData,
            {
              title,
              image,
              details,
              link,
              age,
              subscriber,
              country,
              type,
              videos,
              id,
            },
          ]),
        );
      }
    } catch (err) {
      console.log(err);
    }
    getAsyncData();
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Details', {
          title,
          image,
          details,
          link,
          age,
          subscriber,
          country,
          type,
          videos,
        })
      }>
      <Icon
        onPress={handleStarPress}
        name={starred ? 'star' : 'star-outline'}
        color={starred ? '#FFD700' : backgroundColor}
        size={30}
        style={styles.iconStyle}
      />
      <View style={styles.txtContain}>
        <Text style={styles.heading} numberOfLines={2}>
          {title}
        </Text>
        <Divider small />
        <Text style={styles.details} numberOfLines={3}>
          Age : {age} years
        </Text>
        <Text style={styles.details} numberOfLines={3}>
          Subscribers : {subscriber}(2021)
        </Text>
        <Text style={styles.details} numberOfLines={3}>
          Country : {country}
        </Text>
        <Text style={styles.details} numberOfLines={3}>
          Type : {type}
        </Text>
        <Text style={styles.details} numberOfLines={3}>
          <Text style={styles.comma}>"</Text> {details}
        </Text>
      </View>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  details: TextStyle;
  image: ImageStyle;
  txtContain: ViewStyle;
  comma: TextStyle;
  iconStyle: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    height: 230,
    width: '94%',
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 5,
    borderWidth: 0.8,
    borderColor: 'white',
    flexDirection: 'row',
    overflow: 'hidden',
    position: 'relative',
  },
  heading: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  details: {
    textAlign: 'justify',
    color: '#a1a1a1',
    maxWidth: '90%',
    fontFamily: 'serif',
  },
  image: {
    width: 180,
    height: 230,
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
  iconStyle: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 999,
    backgroundColor: 'white',
    borderRadius: 25,
  },
});

export {HomeGrid};
