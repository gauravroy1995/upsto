import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HeaderStrip from './src/components/Header/Header';
import {InvestMentDetails} from './src/components/Investment/Investments';
import DataWrapper from './src/components/common/ErrorStateWrapper';
import {useFetchData} from './src/network/useFetchQuery';
import {COLORS} from './src/styles/colors';

const App: React.FC = () => {
  const {data, loading, error, retry} = useFetchData();

  return (
    <SafeAreaView style={styles.main}>
      <HeaderStrip text="Upstox Holding" />
      <DataWrapper loading={loading} error={error} onRetry={retry}>
        <InvestMentDetails
          refetch={retry}
          data={data?.data?.userHolding || []}
        />
      </DataWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: COLORS.white1,
  },
});

export default App;
