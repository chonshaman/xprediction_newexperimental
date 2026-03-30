import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyLinkInputProps {
  value?: string;
  link?: string; // Support both 'value' and 'link' for backwards compatibility
  label?: string;
  placeholder?: string;
  copied?: boolean; // Allow external control
  onCopy?: () => void; // Allow external handler
}

export function CopyLinkInput({ value, link, label, placeholder, copied: externalCopied, onCopy }: CopyLinkInputProps) {
  const [internalCopied, setInternalCopied] = useState(false);
  const actualValue = link || value || '';
  const copied = externalCopied !== undefined ? externalCopied : internalCopied;

  const handleCopy = () => {
    if (onCopy) {
      onCopy();
    } else {
      // Fallback for when Clipboard API is blocked
      const copyToClipboard = (text: string) => {
        // Try modern Clipboard API first
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text)
            .then(() => {
              setInternalCopied(true);
              setTimeout(() => setInternalCopied(false), 2000);
            })
            .catch(() => {
              // Fallback to older method
              fallbackCopyTextToClipboard(text);
            });
        } else {
          // Use fallback method
          fallbackCopyTextToClipboard(text);
        }
      };

      const fallbackCopyTextToClipboard = (text: string) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.top = '-999999px';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          const successful = document.execCommand('copy');
          if (successful) {
            setInternalCopied(true);
            setTimeout(() => setInternalCopied(false), 2000);
          }
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }

        document.body.removeChild(textArea);
      };

      copyToClipboard(actualValue);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gap--0-5rem)',
      }}
    >
      {label && (
        <label
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--card-foreground)',
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--gap--0-5rem)',
          backgroundColor: 'var(--card-normal)',
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--0-5rem) var(--gap--1rem)',
        }}
      >
        <input
          type="text"
          value={actualValue}
          readOnly
          placeholder={placeholder}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--muted-foreground)',
          }}
        />
        <button
          onClick={handleCopy}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--gap--0-5rem)',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: copied ? 'var(--green-9)' : 'var(--muted-foreground)',
            transition: 'color 0.2s',
          }}
        >
          {copied ? (
            <Check style={{ width: '16px', height: '16px' }} />
          ) : (
            <Copy style={{ width: '16px', height: '16px' }} />
          )}
        </button>
      </div>
    </div>
  );
}