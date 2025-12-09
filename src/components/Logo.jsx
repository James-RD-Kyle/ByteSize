import React from 'react';
import {
  Image,
} from 'react-native';

const Logo = ({ size = 150, style = {} }) => {
  return (
    <Image
      source={require('../assets/images/ByteSizeLogoBlueWhite.png')}
      className="mb-5"
      style={{ width: size, height: size, ...style }}
      resizeMode="contain"
    />
  );
};

export default Logo;