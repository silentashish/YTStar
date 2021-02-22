import React from 'react';
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
import {Thumbnail} from 'react-native-thumbnail-video';

interface props {
  children?: JSX.Element;
  route?: any;
  navigation?: any;
}

const DetailsScreen: React.FC<props> = ({route, navigation}) => {
  const {
    title,
    image,
    details,
    age,
    subscriber,
    country,
    type,
    videos,
  } = route.params;

  const InfoBox = ({title, children}: any) => {
    return (
      <View style={styles.infoContainer}>
        <Text style={styles.infoHead} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.infoDetails} numberOfLines={2}>
          {children}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={image} style={styles.image} />
        <Divider large />
        <View style={styles.txtContain}>
          <Text style={styles.heading} numberOfLines={2}>
            {title}
          </Text>
          <Divider medium />
          <View style={styles.val}>
            <InfoBox title="Age">{age} Years</InfoBox>
            <InfoBox title="Subscriber">{subscriber}</InfoBox>
            <InfoBox title="Country">{country}</InfoBox>
            <InfoBox title="Type">{type}</InfoBox>
          </View>
          <Divider medium />
          <Text style={styles.details}>{details}</Text>
          <Divider medium />
          {videos.map((item: string) => {
            return (
              <View style={styles.video}>
                <Thumbnail imageWidth={'100%'} url={item} />
              </View>
            );
          })}
        </View>
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
export {DetailsScreen};
