import React, {useCallback} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {ResponseData} from '../../types/commonTypes';
import {InvestMentRow} from './InvestmentRow';
import Footer from '../Footer/Footer';
import {COLORS} from '../../styles/colors';

const Separator = () => <View style={styles.separator} />;

type InvestMentDetailsProps = {
  data: ResponseData[];
  refetch: () => void;
};

export const InvestMentDetails: React.FC<InvestMentDetailsProps> = (
  props: InvestMentDetailsProps,
) => {
  const {data = [], refetch} = props;

  const renderInvestments = useCallback(({item}: {item: ResponseData}) => {
    return <InvestMentRow data={item} />;
  }, []);

  const keyExtract = (item: ResponseData) => item.symbol;

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
    paddingBottom: 180,
  },
  separator: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: COLORS.gray1,
  },
});

export default InvestMentDetails;
