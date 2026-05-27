import React, {useEffect, useState} from 'react';
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
  const [shareStatus, setShareStatus] = useState('');

  useEffect(() => {
    if (!shareStatus) return undefined;
    const timeout = window.setTimeout(() => setShareStatus(''), 2600);
    return () => window.clearTimeout(timeout);
  }, [shareStatus]);

  async function shareArticle() {
    const data = getShareData();

    try {
      if (navigator.share) {
        await navigator.share(data);
        setShareStatus('Shared');
        return;
      }

      await copyToClipboard(data.url);
      setShareStatus('Link copied');
    } catch (error) {
      if (error?.name === 'AbortError') return;
      setShareStatus('Copy failed');
    }
  }

  async function copyToClipboard(text) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
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
        {shareStatus || 'Share this article'}
      </button>
      <span className="share-status" aria-live="polite" role="status">
        {shareStatus}
      </span>
    </aside>
  );
}
