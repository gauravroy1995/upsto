import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {typography} from '../../styles/typography';
import {COLORS} from '../../styles/colors';

type DataWrapperProps = {
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  children: any;
};

const DataWrapper: React.FC<DataWrapperProps> = ({
  loading,
  error,
  onRetry,
  children,
}) => {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.black} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <TouchableOpacity onPress={onRetry} style={styles.retryButton}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <View style={styles.main}>{children}</View>;
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: typography.fontSize.regular,
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: COLORS.purple1,
    padding: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: COLORS.white,
    fontSize: typography.fontSize.regular,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
  },
});

export default DataWrapper;
