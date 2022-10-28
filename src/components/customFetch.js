import { useEffect } from 'react';
import { useState } from 'react';

const useCustomFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        setData(data);
        setError(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, [url]);
  return {
    error,
    loading,
    data,
  };
};

export default useCustomFetch;
