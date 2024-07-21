import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {typography} from '../../styles/typography';
import {ResponseData} from '../../types/commonTypes';
import {extractFooterInvestmentData} from '../../utils/investmentUtil';
import FooterRow from './FooterRow';
import {COLORS} from '../../styles/colors';

interface FooterProps {
  data: ResponseData[];
}

const Footer: React.FC<FooterProps> = ({data}) => {
  const {totalCurrentValue, totalInvestmentValue, totalPNL, totalTodayPNL} =
    extractFooterInvestmentData(data);

  const [visible, setVisible] = useState(false);

  const showRef = useRef(new Animated.Value(0)).current;

  const rows = [
    {label: 'Current Value :', value: totalCurrentValue},
    {label: 'Total Investment:', value: totalInvestmentValue},
    {label: "Today's Profit & Loss:", value: totalTodayPNL},
    {label: 'Profit & Loss:', value: totalPNL},
  ];

  const renderEachRow = (row: any, index: number) => {
    const isLast = index === rows.length - 1;

    if (!isLast && !visible) {
      return null;
    }
    return (
      <FooterRow
        key={index}
        label={row.label}
        value={row.value}
        isLast={isLast}
        opacity={showRef}
      />
    );
  };

  const onTogglePress = () => {
    Animated.timing(showRef, {
      toValue: visible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(!visible));
  };

  const renderIcon = () => {
    return (
      <TouchableOpacity onPress={onTogglePress} style={styles.mainWrap}>
        <Text style={styles.textC}>{!visible ? 'open' : 'close'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderIcon()}
      {rows.map(renderEachRow)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    width: '100%',
    elevation: 20,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
  },
  mainWrap: {
    alignItems: 'center',
  },
  textC: {
    color: COLORS.black,
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  rowMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  boldText: {
    fontWeight: '900',
    fontSize: typography.fontSize.regular,
    color: COLORS.black,
  },
  normalText: {
    fontWeight: '400',
    fontSize: typography.fontSize.regular,
  },
});

export default Footer;
