import React from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {ResponseData} from '../../types/commonTypes';
import {InvestMentRow} from './InvestmentRow';
import Footer from '../Footer/Footer';
import {typography} from '../../styles/typography';

const Separator = () => <View style={styles.separator} />;

type InvestMentDetailsProps = {
  data: ResponseData[];
  refetch: () => void;
};

export const InvestMentDetails: React.FC = (props: InvestMentDetailsProps) => {
  const {data = [], refetch} = props;

  const renderInvestments = ({item}: {item: ResponseData}) => {
    return <InvestMentRow data={item} />;
  };

  const keyExtract = item => item.isin;

  return (
    <View style={styles.main}>
      <FlatList
        data={data}
        renderItem={renderInvestments}
        keyExtractor={keyExtract}
        ItemSeparatorComponent={Separator}
        style={styles.main}
        contentContainerStyle={styles.contentStyle}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={refetch} />
        }
      />
      <Footer data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  contentStyle: {
    paddingBottom: 100,
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
    fontSize: typography.fontSize.regular,
    color: '#000',
  },
  ltpText: {
    fontSize: typography.fontSize.regular,
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
    fontSize: typography.fontSize.small,
    color: '#000',
  },
  quantityValueText: {
    fontWeight: 'bold',
  },
  closeText: {
    fontSize: typography.fontSize.small,
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
