import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {getCurrencySymbol} from '../../utils/commonUtils';

interface FooterRowProps {
  label: string;
  value: number;
  isLast?: boolean;
}

const FooterRow: React.FC<FooterRowProps> = ({
  label,
  value,
  isLast = false,
}) => {
  const symbolCurrency = getCurrencySymbol({country: 'IN'});
  return (
    <View style={isLast ? styles.rowLast : styles.row} key={label}>
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
  rowLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default FooterRow;
