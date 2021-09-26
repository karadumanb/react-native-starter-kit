import React from 'react';
import { Image } from './Image';

export const Logo = () => (
  <Image
    source={require("assets/images/logo.png")}
    size="xl"
    resizeMode="contain"
    alt="Logo"
    height={"35px"}
  />
);
