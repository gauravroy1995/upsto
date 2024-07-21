import {useState, useEffect, useCallback} from 'react';
import {NetworkResponse} from './network.types';

const BASE_URL = 'https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/';

export const useFetchData = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<NetworkResponse | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(BASE_URL);

      if (!response.ok) {
        throw new Error('Error fetching data');
      }

      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const retry = () => {
    setLoading(true);
    setError(null);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {loading, error, data, retry};
};
