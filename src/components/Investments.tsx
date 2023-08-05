import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ResponseData} from '../types/commonTypes';
import {InvestMentRow} from './InvestmentRow';
import Footer from './Footer';

const Separator = () => <View style={styles.separator} />;

type InvestMentDetailsProps = {
  data: ResponseData[];
};

export const InvestMentDetails: React.FC = (props: InvestMentDetailsProps) => {
  const {data = []} = props;

  const renderInvestments = ({item}: {item: ResponseData}) => {
    return <InvestMentRow data={item} />;
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        renderItem={renderInvestments}
        keyExtractor={item => item.isin}
        ItemSeparatorComponent={Separator}
        style={{flex: 1}}
      />
      <Footer data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  listItemContainer: {
    backgroundColor: '#fff',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  symbolText: {
    fontSize: 16,
    color: '#000',
  },
  ltpText: {
    fontSize: 16,
    color: '#000',
  },
  ltpValueText: {
    fontWeight: 'bold',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  quantityText: {
    fontSize: 14,
    color: '#000',
  },
  quantityValueText: {
    fontWeight: 'bold',
  },
  closeText: {
    fontSize: 14,
    color: '#000',
  },
  closeValueText: {
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#ccc',
  },
});
