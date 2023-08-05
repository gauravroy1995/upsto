import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {typography} from '../../styles/typography';

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
    backgroundColor: '#3e1b80',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: typography.fontSize.large,
    fontWeight: 'bold',
  },
});

export default HeaderStrip;
