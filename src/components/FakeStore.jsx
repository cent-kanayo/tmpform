import React from 'react';
import useCustomFetch from './customFetch';

const FakeStore = () => {
  const url = 'https://fakestoreapi.com/products';

  const { error, loading, data } = useCustomFetch(url);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Oops! Something went wrong</h1>;
  return (
    <div className="container mx-auto px-4 py-16 md:px-16">
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>~
        </div>
      ))}
    </div>
  );
};

export default FakeStore;
