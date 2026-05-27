import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ArticleDiagram({src, alt}) {
  const imageUrl = useBaseUrl(src);

  return (
    <figure className="article-diagram">
      <img src={imageUrl} alt={alt} loading="eager" />
    </figure>
  );
}
