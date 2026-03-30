/**
 * Code Block Component with Copy Functionality
 * Displays code with syntax highlighting and copy button
 */
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Try modern Clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback to older method
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          // Fallback copy failed silently
        } finally {
          textArea.remove();
        }
      }
    } catch (err) {
      // Copy failed silently
    }
  };

  // Simple syntax highlighting for TSX/JSX
  const highlightCode = (code: string) => {
    const lines = code.split('\n');
    return lines.map((line, lineIndex) => {
      // Track position in line for highlighting
      let result: JSX.Element[] = [];
      let currentPos = 0;
      
      // Keywords
      const keywords = ['import', 'from', 'export', 'function', 'const', 'let', 'var', 'return', 'if', 'else'];
      const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
      
      // Strings
      const stringRegex = /"([^"\\]*(\\.[^"\\]*)*)"/g;
      
      // Component names (PascalCase)
      const componentRegex = /<\/?([A-Z][a-zA-Z0-9]*)/g;
      
      // Attributes
      const attributeRegex = /\s([a-zA-Z-]+)=/g;
      
      // Create a combined pattern to process in order
      let processedLine = line;
      let segments: Array<{ start: number; end: number; type: string; text: string }> = [];
      
      // Find all matches
      let match;
      
      // Strings
      stringRegex.lastIndex = 0;
      while ((match = stringRegex.exec(line)) !== null) {
        segments.push({ start: match.index, end: match.index + match[0].length, type: 'string', text: match[0] });
      }
      
      // Keywords
      keywordRegex.lastIndex = 0;
      while ((match = keywordRegex.exec(line)) !== null) {
        segments.push({ start: match.index, end: match.index + match[0].length, type: 'keyword', text: match[0] });
      }
      
      // Components
      componentRegex.lastIndex = 0;
      while ((match = componentRegex.exec(line)) !== null) {
        segments.push({ start: match.index, end: match.index + match[0].length, type: 'component', text: match[0] });
      }
      
      // Attributes
      attributeRegex.lastIndex = 0;
      while ((match = attributeRegex.exec(line)) !== null) {
        segments.push({ start: match.index + 1, end: match.index + match[1].length + 1, type: 'attribute', text: match[1] });
      }
      
      // Sort segments by position
      segments.sort((a, b) => a.start - b.start);
      
      // Build the highlighted line
      let pos = 0;
      const lineElements: JSX.Element[] = [];
      
      for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        
        // Add text before this segment
        if (pos < seg.start) {
          lineElements.push(
            <span key={`text-${i}-before`}>
              {line.substring(pos, seg.start)}
            </span>
          );
        }
        
        // Add the highlighted segment
        let color = 'var(--card-foreground)';
        let fontWeight = 'var(--font-weight-normal)';
        
        switch (seg.type) {
          case 'keyword':
            color = 'var(--red-11)';
            fontWeight = 'var(--font-weight-semi-bold)';
            break;
          case 'string':
            color = 'var(--green-11)';
            break;
          case 'component':
            color = 'var(--blue-11)';
            break;
          case 'attribute':
            color = 'var(--iris-11)';
            break;
        }
        
        lineElements.push(
          <span key={`seg-${i}`} style={{ color, fontWeight }}>
            {seg.text}
          </span>
        );
        
        pos = seg.end;
      }
      
      // Add remaining text
      if (pos < line.length) {
        lineElements.push(
          <span key={`text-end`}>
            {line.substring(pos)}
          </span>
        );
      }
      
      return (
        <div
          key={lineIndex}
          style={{
            display: 'flex',
            gap: 'var(--gap--1rem)',
            minHeight: '1.5em',
          }}
        >
          <span
            style={{
              color: 'var(--muted-foreground)',
              userSelect: 'none',
              minWidth: '2em',
              textAlign: 'right',
              opacity: 0.5,
            }}
          >
            {lineIndex + 1}
          </span>
          <span style={{ flex: 1 }}>
            {lineElements.length > 0 ? lineElements : <span>{line}</span>}
          </span>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        background: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: 'var(--gap--0-5rem)',
          right: 'var(--gap--0-5rem)',
          padding: 'var(--gap--0-5rem)',
          background: copied ? 'var(--green-9)' : 'var(--lum-03)',
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--border-radius--0-375rem)',
          color: copied ? 'white' : 'var(--card-foreground)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--gap--0-25rem)',
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-medium)',
          transition: 'all 0.2s ease',
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          if (!copied) {
            e.currentTarget.style.background = 'var(--lum-02)';
          }
        }}
        onMouseLeave={(e) => {
          if (!copied) {
            e.currentTarget.style.background = 'var(--lum-03)';
          }
        }}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Code Content */}
      <div
        style={{
          padding: 'var(--gap--1rem)',
          paddingRight: 'var(--gap--3rem)',
          fontFamily: 'monospace',
          fontSize: 'var(--text-sm)',
          lineHeight: '1.6',
          color: 'var(--card-foreground)',
          overflowX: 'auto',
        }}
      >
        {highlightCode(code)}
      </div>
    </div>
  );
}