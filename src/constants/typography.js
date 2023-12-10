import { RFValue } from 'react-native-responsive-fontsize';

const REGULAR = 'circular-book';
const MEDIUM = 'circular-medium';
const BOLD = 'circular-bold';

const TYPOGRAPHY = {
  H1: {
    fontSize: RFValue(30),
    fontFamily: BOLD,
    letterSpacing: 0,
  },
  H2: {
    fontSize: RFValue(20),
    fontFamily: MEDIUM,
  },
  P1: {
    fontSize: RFValue(16),
    fontFamily: REGULAR,
  },
  P1_MEDIUM: {
    fontSize: RFValue(16),
    fontFamily: MEDIUM,
  },
  P1_BOLD: {
    fontSize: RFValue(16),
    fontFamily: BOLD,
  },
  P2: {
    fontSize: RFValue(14),
    fontFamily: REGULAR,
  },
  P2_MEDIUM: {
    fontSize: RFValue(14),
    fontFamily: MEDIUM,
  },
  P2_BOLD: {
    fontSize: RFValue(14),
    fontFamily: BOLD,
  },
  P3: {
    fontSize: RFValue(12),
    fontFamily: REGULAR,
  },
  P3_MEDIUM: {
    fontSize: RFValue(12),
    fontFamily: MEDIUM,
  },
  P4: {
    fontSize: RFValue(9),
    fontFamily: REGULAR,
  },
};

export default TYPOGRAPHY;
