import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getCurrencySymbol} from '../../utils/commonUtils';

interface FooterRowProps {
  label: string;
  value: number;
}

const FooterRow: React.FC<FooterRowProps> = ({label, value}) => {
  const symbolCurrency = getCurrencySymbol({country: 'IN'});
  return (
    <View style={styles.row} key={label}>
      <Text style={styles.boldText}>{label}</Text>
      <Text>
        {symbolCurrency}
        {value.toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default FooterRow;
