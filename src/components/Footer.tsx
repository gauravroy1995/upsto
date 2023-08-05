import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ResponseData} from '../types/commonTypes';
import {extractFooterInvestmentData} from '../utils/investmentUtil';
import {getCurrencySymbol} from '../utils/commonUtils';

interface FooterProps {
  data: ResponseData[];
}

const Footer: React.FC<FooterProps> = ({data}) => {
  const {totalCurrentValue, totalInvestmentValue, totalPNL, totalTodayPNL} =
    extractFooterInvestmentData(data);

  const symbolCurrency = getCurrencySymbol({country: 'IN'});
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.boldText}>Current Value:</Text>
        <Text style={styles.normalText}>
          {symbolCurrency}
          {totalCurrentValue}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.boldText}>Total Investment :</Text>
        <Text style={styles.normalText}>
          {symbolCurrency}
          {totalInvestmentValue}
        </Text>
      </View>
      <View style={styles.rowMain}>
        <Text style={styles.boldText}>Today's Profit & Loss:</Text>
        <Text style={styles.normalText}>
          {symbolCurrency}
          {totalTodayPNL}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.boldText}> Profit & Loss:</Text>
        <Text style={styles.normalText}>
          {symbolCurrency}
          {totalPNL}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    width: '100%',
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
    fontSize: 16,
  },
  normalText: {
    fontWeight: '400',
    fontSize: 15,
  },
});

export default Footer;
