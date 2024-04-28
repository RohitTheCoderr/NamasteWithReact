import React from 'react';

function removeBTags(str) {
  return str.replace(/<b>|<\/b>/g, '');
}

function MyComponent() {
  const data = '<b>Far (5.0 kms)</b> | Additional delivery fee will apply';
  const cleanData = removeBTags(data);

  return <div dangerouslySetInnerHTML={{ __html: cleanData }} />;
}

export default MyComponent;
