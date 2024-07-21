import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from '../../styles/typography';
import {COLORS} from '../../styles/colors';

interface HeaderStripProps {
  text: string;
}

const HeaderStrip: React.FC<HeaderStripProps> = ({text}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: COLORS.purple1,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  headerText: {
    color: COLORS.white,
    fontSize: typography.fontSize.large,
    fontWeight: 'bold',
  },
});

export default HeaderStrip;
