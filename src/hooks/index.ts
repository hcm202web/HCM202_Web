import { useState } from 'react';

export const useClipboard = () => {
  const [copySuccess, setCopySuccess] = useState('');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess('Copied!');
    } catch (err) {
      setCopySuccess('Failed to copy text');
    }
  };

  const resetCopySuccess = () => {
    setCopySuccess('');
  };

  return { copyToClipboard, copySuccess, resetCopySuccess };
};
