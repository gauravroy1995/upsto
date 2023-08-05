/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import HeaderStrip from './src/components/Header';
import {useFetchData} from './src/network/useFetchQuery';
import DataWrapper from './src/components/ErrorStateWrapper';
import {InvestMentDetails} from './src/components/Investments';

const App: React.FC = () => {
  const {data, loading, error, retry} = useFetchData();

  return (
    <View style={styles.main}>
      <HeaderStrip text="Upstox" />
      <DataWrapper loading={loading} error={error} onRetry={retry}>
        <InvestMentDetails data={data?.data || []} />
      </DataWrapper>
    </View>
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
