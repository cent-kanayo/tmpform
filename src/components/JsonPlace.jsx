import React from 'react';
import useCustomFetch from './customFetch';

const JsonPlace = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { loading, error, data } = useCustomFetch(url);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>An error occurred</h1>;
  return (
    <div>
      {data.map((post) => {
        return (
          <>
            <div key={post.id}>
              <p>{post.body}</p>
            </div>
            ;
          </>
        );
      })}
    </div>
  );
};

export default JsonPlace;
