import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import HeaderStrip from './src/components/Header/Header';
import {InvestMentDetails} from './src/components/Investment/Investments';
import DataWrapper from './src/components/common/ErrorStateWrapper';
import {useFetchData} from './src/network/useFetchQuery';

const App: React.FC = () => {
  const {data, loading, error, retry} = useFetchData();

  return (
    <SafeAreaView style={styles.main}>
      <HeaderStrip text="Upstox Holding" />
      <DataWrapper loading={loading} error={error} onRetry={retry}>
        <InvestMentDetails refetch={retry} data={data?.data || []} />
      </DataWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  main: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default App;
