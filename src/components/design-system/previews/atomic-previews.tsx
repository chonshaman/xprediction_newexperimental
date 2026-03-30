import React from 'react';
import { Copy, Check } from 'lucide-react';
import { globalsCssContent } from '../data/globals-css-content';
import { Button } from '../../ui/button';

const CopyButton = ({ text, label = "Copy" }: { text: string, label?: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    // Attempt fallback (TextArea hack) FIRST for restricted environments
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      // Ensure textarea is not visible but part of DOM
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      textarea.style.top = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      
      let successful = false;
      try {
        successful = document.execCommand('copy');
      } catch (err) {
        console.warn('execCommand failed', err);
      }
      
      document.body.removeChild(textarea);
      
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return; // Success!
      }
    } catch (fallbackErr) {
       console.error('Fallback copy mechanism failed', fallbackErr);
    }
    
    // If fallback failed, try the modern API (might throw NotAllowedError)
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Suppress the console warning or make it less scary since we already tried fallback
      console.log('Clipboard access denied');
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      size="sm"
      style={{
        background: 'radial-gradient(60% 60% at 50% 130%, var(--lum-04) 0%, var(--white-a1) 100%), var(--lum-02)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-button)',
        padding: '0 var(--gap--0-75rem)',
        height: '32px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: 'var(--card-foreground)',
        boxShadow: 'var(--shadow-1)',
        transition: 'all 200ms ease-out'
      }}
    >
      {copied ? <Check size={14} className="text-[var(--green-9)]" /> : <Copy size={14} />}
      <span>{copied ? 'Copied!' : label}</span>
    </Button>
  );
};

// ==================== TYPOGRAPHY ====================
const typeSizes = [
  { name: '--text-5xl', value: '60px', label: 'Display / H1' },
  { name: '--text-4xl', value: '48px', label: 'H1' },
  { name: '--text-3xl', value: '30px', label: 'H2' },
  { name: '--text-2xl', value: '24px', label: 'H3' },
  { name: '--text-xl', value: '20px', label: 'H4' },
  { name: '--text-l', value: '18px', label: 'Large Text' },
  { name: '--text-base', value: '16px', label: 'Body Base' },
  { name: '--text-s', value: '14px', label: 'Body Small' },
  { name: '--text-xs', value: '12px', label: 'Label' },
  { name: '--text-xxs', value: '10px', label: 'Tiny Label' },
];

const fontWeights = [
  { name: '--font-weight-extra-bold', value: '800' },
  { name: '--font-weight-semi-bold', value: '600' },
  { name: '--font-weight-medium', value: '500' },
  { name: '--font-weight-normal', value: '400' },
];

export const TypographyPreview = () => {
  return (
    <div className="flex flex-col gap-[var(--gap--3rem)]">
      {/* Font Sizes */}
      <section>
        <h3 className="text-[var(--text-xl)] font-semibold mb-[var(--gap--1rem)]">Font Sizes</h3>
        <div className="flex flex-col gap-[var(--gap--1rem)]">
          {typeSizes.map((size) => (
            <div key={size.name} className="flex flex-col gap-[var(--gap--0-5rem)] p-[var(--gap--1rem)] border-b border-[var(--black-a2)] last:border-0">
              {/* Preview */}
              <div className="w-full overflow-hidden">
                <div style={{ fontSize: `var(${size.name})`, lineHeight: 1.2 }} className="font-medium text-[var(--card-foreground)] break-words">
                  The quick brown fox
                </div>
              </div>
              
              {/* Specs Below on Mobile, Row on Desktop */}
              <div className="flex flex-row items-center gap-[var(--gap--1rem)] justify-between">
                <div className="font-mono text-[var(--text-s)] font-semibold text-[var(--iris-9)]">{size.name}</div>
                <div className="font-mono text-[var(--text-xs)] text-[var(--muted-foreground)]">{size.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h3 className="text-[var(--text-xl)] font-semibold mb-[var(--gap--1rem)]">Font Weights</h3>
        <div className="flex flex-col gap-[var(--gap--1rem)]">
          {fontWeights.map((weight) => (
            <div key={weight.name} className="flex flex-col gap-[var(--gap--0-5rem)] p-[var(--gap--1rem)] border-b border-[var(--black-a2)] last:border-0">
              {/* Preview */}
              <div className="w-full">
                <div style={{ fontWeight: `var(${weight.name})` }} className="text-[var(--text-xl)] text-[var(--card-foreground)]">
                  {weight.name.replace('--font-weight-', '')} (The quick brown fox)
                </div>
              </div>

              {/* Specs Below */}
              <div className="flex flex-row items-center gap-[var(--gap--1rem)] justify-between">
                <div className="font-mono text-[var(--text-s)] font-semibold text-[var(--iris-9)]">{weight.name}</div>
                <div className="font-mono text-[var(--text-xs)] text-[var(--muted-foreground)]">{weight.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// ==================== RADIUS ====================
const radii = [
  { name: '--border-radius--0px', value: '0px' },
  { name: '--border-radius--0-125rem', value: '2px' },
  { name: '--border-radius--0-25rem', value: '4px' },
  { name: '--border-radius--0-375rem', value: '6px' },
  { name: '--border-radius--0-5rem', value: '8px' },
  { name: '--border-radius--0-75rem', value: '12px' },
  { name: '--border-radius--1rem', value: '16px' },
  { name: '--border-radius--1-5rem', value: '24px' },
  { name: '--border-radius--9999px', value: '9999px' },
];

export const RadiusPreview = () => {
  return (
    <div className="flex flex-col gap-[var(--gap--1rem)]">
      {radii.map((radius) => (
        <div key={radius.name} className="flex flex-col md:flex-row md:items-center gap-[var(--gap--1rem)] md:gap-[var(--gap--2rem)] p-[var(--gap--1rem)] border-b border-[var(--black-a2)] last:border-0">
          {/* Preview Left */}
          <div className="flex-1 flex items-center justify-start">
            <div
              className="w-24 h-24 bg-[var(--iris-9)] border border-[var(--black-a2)] shadow-sm"
              style={{ borderRadius: `var(${radius.name})` }}
            />
          </div>

          {/* Specs Right */}
          <div className="w-full md:w-64 shrink-0 flex flex-row md:flex-col justify-between md:justify-start gap-2">
            <div className="font-mono text-[var(--text-sm)] font-semibold text-[var(--iris-9)]">{radius.name}</div>
            <div className="font-mono text-[var(--text-xs)] text-[var(--muted-foreground)]">{radius.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ==================== SHADOW ====================
const shadows = [
  { name: '--shadow-1', value: '0px 2px 4px 0px rgba(0, 0, 0, 0.05)' },
  { name: '--shadow-2', value: '0px 4px 6px 0px rgba(0, 0, 0, 0.1)' },
  { name: '--shadow-3', value: '0px 8px 16px 0px rgba(0, 0, 0, 0.12)' },
  { name: '--shadow-4', value: '0 3px 4px 0 rgba(0, 0, 0, 0.04)' },
];

export const ShadowPreview = () => {
  return (
    <div className="flex flex-col gap-[var(--gap--1rem)]">
      {shadows.map((shadow) => (
        <div key={shadow.name} className="flex flex-col md:flex-row md:items-center gap-[var(--gap--1rem)] md:gap-[var(--gap--2rem)] p-[var(--gap--1rem)] border-b border-[var(--black-a2)] last:border-0">
          {/* Preview Left */}
          <div className="flex-1 flex items-center justify-start p-4 bg-[var(--lum-02)] rounded-lg">
            <div
              className="w-24 h-24 bg-[var(--card-normal)] rounded-[var(--radius-card)]"
              style={{ boxShadow: `var(${shadow.name})` }}
            />
          </div>

          {/* Specs Right */}
          <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
            <div className="font-mono text-[var(--text-sm)] font-semibold text-[var(--iris-9)]">{shadow.name}</div>
            <div className="font-mono text-[var(--text-xs)] text-[var(--muted-foreground)] break-all">{shadow.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ==================== GAP ====================
const gaps = [
  '--gap--0px', '--gap--1px', '--gap--0-125rem', '--gap--0-25rem',
  '--gap--0-375rem', '--gap--0-5rem', '--gap--0-625rem', '--gap--0-75rem',
  '--gap--0-875rem', '--gap--1rem', '--gap--1-25rem', '--gap--1-5rem',
  '--gap--1-75rem', '--gap--2rem', '--gap--2-25rem', '--gap--2-5rem',
  '--gap--3rem', '--gap--4rem', '--gap--5rem', '--gap--6rem'
];

export const GapPreview = () => {
  return (
    <div className="flex flex-col gap-[var(--gap--1rem)]">
      {gaps.map((gap) => (
        <div key={gap} className="flex flex-col md:flex-row md:items-center gap-[var(--gap--1rem)] md:gap-[var(--gap--2rem)] p-[var(--gap--1rem)] border-b border-[var(--black-a2)] last:border-0">
          {/* Preview Left */}
          <div className="flex-1 flex items-center">
            <div className="h-8 w-8 bg-[var(--iris-9)] rounded-[4px]" />
            <div style={{ width: `var(${gap})` }} className="h-[1px] bg-[var(--red-9)] relative mx-[2px] flex items-center justify-center">
               {/* Tick marks */}
               <div className="absolute left-0 top-[-4px] bottom-[-4px] w-[1px] bg-[var(--red-9)]"></div>
               <div className="absolute right-0 top-[-4px] bottom-[-4px] w-[1px] bg-[var(--red-9)]"></div>
            </div>
            <div className="h-8 w-8 bg-[var(--iris-9)] rounded-[4px]" />
          </div>

          {/* Specs Right */}
          <div className="w-full md:w-64 shrink-0">
            <div className="font-mono text-[var(--text-sm)] font-semibold text-[var(--muted-foreground)]">{gap}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ==================== VARIABLES ====================
export const VariablesPreview = () => {
  return (
    <div className="flex flex-col gap-[var(--gap--1rem)] h-full">
      <div className="flex flex-row items-center justify-between gap-[var(--gap--1rem)]">
        <h3 className="text-[var(--text-xl)] font-semibold text-[var(--card-foreground)]">All CSS Variables</h3>
        <CopyButton text={globalsCssContent} label="Copy All CSS" />
      </div>
      
      <div className="flex-1 bg-[#1a2e2a] border border-[var(--black-a2)] rounded-[var(--radius-card)] p-[var(--gap--0-75rem)] sm:p-[var(--gap--1rem)] overflow-auto max-h-[70vh]">
        <pre className="font-mono text-[10px] sm:text-[var(--text-xs)] text-[#9dbec4] whitespace-pre-wrap break-all">
          {globalsCssContent}
        </pre>
      </div>
    </div>
  );
};