import {useState, useEffect, useCallback} from 'react';

const BASE_URL = 'https://run.mocky.io/v3/6d0ad460-f600-47a7-b973-4a779ebbaeaf';

export const useFetchData = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

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
      setError(err?.message);
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
