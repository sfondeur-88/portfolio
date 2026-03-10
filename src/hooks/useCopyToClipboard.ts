import { useState } from 'react';

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const handleClose = () => setCopied(false);

  return { copy, copied, handleClose };
};
