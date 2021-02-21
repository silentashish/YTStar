import React from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  ImageBackground,
  ImageStyle,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {Button} from '../components';
import {secondaryColor} from '../constants/colors';

interface props {
  children?: JSX.Element;
  navigation: any;
}

const StartScreen: React.FC<props> = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.img}>
      <View style={styles.container}>
        <View style={styles.textContain}>
          <Text style={styles.heading}>YT STAR</Text>
          <Text style={styles.info}>
            Learn about famous youtube star and their background stories
          </Text>
        </View>
        <View style={styles.lottieWrapper}>
          <LottieView source={require('../assets/games.json')} autoPlay loop />
        </View>
        <View>
          <Button
            onPress={() => {
              navigation.navigate('Home');
            }}>
            Start Explore
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

interface Style {
  container: ViewStyle;
  heading: TextStyle;
  lottieWrapper: ViewStyle;
  info: TextStyle;
  img: ImageStyle;
  textContain: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: `rgba(0,0,0,0.5)`,
    justifyContent: 'space-around',
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
  info: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    marginTop: 15,
    maxWidth: '80%',
    alignSelf: 'center',
  },
  img: {
    width: '100%',
    flex: 1,
  },
  textContain: {
    backgroundColor: secondaryColor,
    paddingBottom: 20,
    paddingTop: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 40,
  },
});

export {StartScreen};
