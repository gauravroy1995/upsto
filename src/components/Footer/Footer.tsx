import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ResponseData} from '../../types/commonTypes';
import {extractFooterInvestmentData} from '../../utils/investmentUtil';
import FooterRow from './FooterRow';

interface FooterProps {
  data: ResponseData[];
}

const Footer: React.FC<FooterProps> = ({data}) => {
  const {totalCurrentValue, totalInvestmentValue, totalPNL, totalTodayPNL} =
    extractFooterInvestmentData(data);

  const rows = [
    {label: 'Current Value :', value: totalCurrentValue},
    {label: 'Total Investment for all holdings:', value: totalInvestmentValue},
    {label: "Today's Profit & Loss:", value: totalTodayPNL},
    {label: 'Profit & Loss:', value: totalPNL},
  ];

  const renderEachRow = (row: any, index) => {
    return (
      <FooterRow
        key={index}
        label={row.label}
        value={row.value}
        isLast={index === rows.length - 1}
      />
    );
  };

  return <View style={styles.container}>{rows.map(renderEachRow)}</View>;
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
    color: '#000',
  },
  normalText: {
    fontWeight: '400',
    fontSize: 15,
  },
});

export default Footer;
