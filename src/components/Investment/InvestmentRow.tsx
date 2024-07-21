import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ResponseData} from '../../types/commonTypes';
import {extractProfitLoss} from '../../utils/investmentUtil';
import {getCurrencySymbol} from '../../utils/commonUtils';
import {typography} from '../../styles/typography';
import {COLORS} from '../../styles/colors';

interface ListItemProps {
  data: ResponseData;
}

export const InvestMentRow: React.FC<ListItemProps> = ({data}) => {
  const {symbol = '', ltp = 0, quantity = ''} = data || {};

  const profitLoss = extractProfitLoss(data);

  const symbolCurrency = getCurrencySymbol({country: 'IN'});

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.topRow}>
        <Text style={styles.symbolText}>{symbol}</Text>
        <Text style={styles.ltpText}>
          LTP:
          <Text style={styles.ltpValueText}>
            {symbolCurrency}
            {ltp.toFixed(2)}
          </Text>
        </Text>
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.quantityText}>
          <Text>{quantity}</Text>
        </Text>
        <Text style={styles.closeText}>
          P/L:
          <Text style={styles.closeValueText}>
            {symbolCurrency}
            {profitLoss}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: COLORS.white,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  symbolText: {
    fontSize: typography.fontSize.regular,
    color: COLORS.black,
    fontWeight: '600',
  },
  ltpText: {
    fontSize: typography.fontSize.regular,
    color: COLORS.black,
  },
  ltpValueText: {
    fontWeight: 'bold',
    paddingLeft: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  quantityText: {
    fontSize: typography.fontSize.small,
    color: COLORS.black,
  },

  closeText: {
    fontSize: typography.fontSize.small,
    color: COLORS.black,
  },
  closeValueText: {
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: COLORS.gray1,
  },
});
