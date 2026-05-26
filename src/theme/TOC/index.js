import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import useBaseUrl from '@docusaurus/useBaseUrl';

function getShareData() {
  if (!ExecutionEnvironment.canUseDOM) {
    return {
      title: 'AI for Business',
      url: 'https://ariefwara.github.io/ai-for-business/'
    };
  }

  return {
    title: document.title.replace(' | AI for Business', ''),
    url: window.location.href
  };
}

export default function TOC({className}) {
  const imageUrl = useBaseUrl('/img/ariefwara.jpeg');

  async function shareArticle() {
    const data = getShareData();
    if (navigator.share) {
      await navigator.share(data);
      return;
    }
    await navigator.clipboard.writeText(data.url);
  }

  return (
    <aside className={`writer-box ${className || ''}`} aria-label="About the writer">
      <img src={imageUrl} alt="Arief Warazuhudien" loading="lazy" />
      <div>
        <strong>About the writer</strong>
        <p>
          Arief Warazuhudien writes about AI, enterprise technology, platform
          engineering, software delivery, data, cloud, automation, and operating
          models for modern organizations.
        </p>
        <a href="https://ariefw.com" target="_blank" rel="noreferrer">
          ariefw.com
        </a>
      </div>
      <button className="share-button" type="button" onClick={shareArticle}>
        Share this article
      </button>
    </aside>
  );
}
