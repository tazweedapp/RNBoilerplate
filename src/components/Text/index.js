import { Text as RNText } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

import TYPOGRAPHY from '@constants/typography';

const Text = ({
  type = TEXT_ENUMS.P1,
  textAlign = 'left',
  color,
  style,
  children,
  ...props
}) => {
  const { colors } = useTheme();

  console.log('COLOR:: ', color || colors.text);

  return (
    <RNText
      style={[
        TYPOGRAPHY[type],
        { color: color || colors.text },
        { textAlign },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export const TEXT_ENUMS = {
  P1: 'P1',
  P1_BOLD: 'P1_BOLD',
  P2: 'P2',
  P2_BOLD: 'P2_BOLD',
  P3: 'P3',
  P4: 'P4',
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
};

export default Text;
