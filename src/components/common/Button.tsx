import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {fontColor, secondaryColor} from '../../constants/colors';

interface Props {
  children?: string;
  onPress?: () => void;
}

const Button: React.FC<Props> = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.contain} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

interface Style {
  contain: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  contain: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: secondaryColor,
    padding: 10,
    borderRadius: 15,
  },
  text: {
    fontSize: 22,
    color: fontColor,
    fontWeight: 'bold',
  },
});

export {Button};
