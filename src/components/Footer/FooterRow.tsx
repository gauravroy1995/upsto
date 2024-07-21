import React from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
import {getCurrencySymbol} from '../../utils/commonUtils';
import {COLORS} from '../../styles/colors';

interface FooterRowProps {
  label: string;
  value: number;
  isLast?: boolean;
  opacity?: Animated.Value;
}

const FooterRow: React.FC<FooterRowProps> = ({
  label,
  value,
  isLast = false,
  opacity = 1,
}) => {
  const symbolCurrency = getCurrencySymbol({country: 'IN'});
  return (
    <Animated.View
      style={[
        isLast ? styles.rowLast : styles.row,
        {opacity: isLast ? 1 : opacity},
      ]}
      key={label}>
      <Text style={styles.boldText}>{label}</Text>
      <Text style={styles.secondText}>
        {symbolCurrency}
        {value.toFixed(2)}
      </Text>
    </Animated.View>
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
    color: COLORS.black,
  },
  secondText: {
    color: COLORS.black,
  },
});

export default FooterRow;
