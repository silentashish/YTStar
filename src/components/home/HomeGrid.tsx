import React from 'react';
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
  } = props;
  const navigation = useNavigation();

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
});

export {HomeGrid};
