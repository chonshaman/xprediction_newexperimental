/**
 * Component Preview Display
 * Shows the selected component with size/state controls
 */
import React from 'react';
import type { ComponentPreviewProps } from '../types';
import { CodeBlock } from './CodeBlock';

export function ComponentPreview({
  variant,
  selectedSize,
  selectedStateIndex,
  onSizeChange,
  onStateChange,
}: ComponentPreviewProps) {
  // Get unique sizes from this variant
  const uniqueSizes = Array.from(new Set(variant.sizeStates.map(ss => ss.size)));
  
  // Filter states by selected size
  const statesForSize = variant.sizeStates.filter(ss => ss.size === selectedSize);
  
  // Get current state
  const currentState = statesForSize[selectedStateIndex] || statesForSize[0];
  
  if (!currentState) {
    return <div>No state available</div>;
  }

  const PreviewComponent = currentState.renderComponent;

  return (
    <div
      className="flex flex-col gap-[var(--gap--1rem)] md:gap-[var(--gap--2rem)]"
    >
      {/* Header */}
      <div>
        <h1
          style={{
            fontSize: 'var(--text-3xl)',
            fontWeight: 'var(--font-weight-extra-bold)',
            color: 'var(--card-foreground)',
            marginBottom: 'var(--gap--0-5rem)',
          }}
        >
          {variant.label}
        </h1>
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--muted-foreground)',
          }}
        >
          {currentState.description}
        </p>
      </div>

      {/* Size & State Controls */}
      {(uniqueSizes.length > 1 || statesForSize.length > 1) && (
        <div
          style={{
            display: 'flex',
            gap: 'var(--gap--1rem)',
            flexWrap: 'wrap',
          }}
        >
          {/* Size Selector */}
          {uniqueSizes.length > 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--0-5rem)' }}>
              <label
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  color: 'var(--card-foreground)',
                }}
              >
                Size
              </label>
              <div style={{ display: 'flex', gap: 'var(--gap--0-5rem)' }}>
                {uniqueSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      onSizeChange(size);
                      onStateChange(0); // Reset to first state when size changes
                    }}
                    style={{
                      padding: 'var(--gap--0-5rem) var(--gap--1rem)',
                      borderRadius: 'var(--border-radius--0-375rem)',
                      border: '1px solid var(--black-a2)',
                      background: selectedSize === size ? 'var(--card-normal)' : 'var(--lum-01)',
                      color: selectedSize === size ? 'var(--iris-11)' : 'var(--card-foreground)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: selectedSize === size ? 'var(--font-weight-semi-bold)' : 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* State Selector */}
          {statesForSize.length > 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--0-5rem)' }}>
              <label
                style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-semi-bold)',
                  color: 'var(--card-foreground)',
                }}
              >
                State
              </label>
              <div style={{ display: 'flex', gap: 'var(--gap--0-5rem)', flexWrap: 'wrap' }}>
                {statesForSize.map((state, index) => (
                  <button
                    key={index}
                    onClick={() => onStateChange(index)}
                    style={{
                      padding: 'var(--gap--0-5rem) var(--gap--1rem)',
                      borderRadius: 'var(--border-radius--0-375rem)',
                      border: '1px solid var(--black-a2)',
                      background: selectedStateIndex === index ? 'var(--card-normal)' : 'var(--lum-01)',
                      color: selectedStateIndex === index ? 'var(--iris-11)' : 'var(--card-foreground)',
                      fontSize: 'var(--text-sm)',
                      fontWeight: selectedStateIndex === index ? 'var(--font-weight-semi-bold)' : 'var(--font-weight-medium)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {state.state}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Component Preview - Special handling for Guidelines (no preview box) */}
      {variant.id === 'guidelines' ? (
        <PreviewComponent />
      ) : (
        <div
          style={{
            background: 'var(--lum-02)',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--gap--2rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '200px',
          }}
        >
          <PreviewComponent />
        </div>
      )}

      {/* CSS Properties Table - Only show if there are CSS variables */}
      {currentState.cssVars.length > 0 && (
        <div>
          <h2
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--card-foreground)',
              marginBottom: 'var(--gap--1rem)',
            }}
          >
            CSS Properties
          </h2>
          <div
            className="overflow-x-auto"
            style={{
              background: 'var(--card-normal)',
              border: '1px solid var(--black-a1)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: 'var(--lum-02)', borderBottom: '1px solid var(--black-a2)' }}>
                  <th
                    style={{
                      padding: 'var(--gap--0-75rem) var(--gap--1rem)',
                      textAlign: 'left',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      color: 'var(--card-foreground)',
                    }}
                  >
                    Property
                  </th>
                  <th
                    style={{
                      padding: 'var(--gap--0-75rem) var(--gap--1rem)',
                      textAlign: 'left',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      color: 'var(--card-foreground)',
                    }}
                  >
                    CSS Variable
                  </th>
                  <th
                    style={{
                      padding: 'var(--gap--0-75rem) var(--gap--1rem)',
                      textAlign: 'left',
                      fontSize: 'var(--text-sm)',
                      fontWeight: 'var(--font-weight-semi-bold)',
                      color: 'var(--card-foreground)',
                    }}
                  >
                    Actual Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentState.cssVars.map((cssVar, index) => (
                  <tr
                    key={index}
                    style={{
                      borderBottom: index < currentState.cssVars.length - 1 ? '1px solid var(--black-a1)' : 'none',
                    }}
                  >
                    <td
                      style={{
                        padding: 'var(--gap--0-75rem) var(--gap--1rem)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--card-foreground)',
                        fontWeight: 'var(--font-weight-medium)',
                      }}
                    >
                      {cssVar.name}
                    </td>
                    <td
                      style={{
                        padding: 'var(--gap--0-75rem) var(--gap--1rem)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--muted-foreground)',
                        fontFamily: 'monospace',
                      }}
                    >
                      {cssVar.value}
                    </td>
                    <td
                      style={{
                        padding: 'var(--gap--0-75rem) var(--gap--1rem)',
                        fontSize: 'var(--text-sm)',
                        color: 'var(--muted-foreground)',
                        fontFamily: 'monospace',
                      }}
                    >
                      {cssVar.actualValue || cssVar.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Code Example - Only show if code example is provided */}
      {currentState.codeExample && (
        <div>
          <h2
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--card-foreground)',
              marginBottom: 'var(--gap--1rem)',
            }}
          >
            Code Example
          </h2>
          <CodeBlock code={currentState.codeExample} language="tsx" />
        </div>
      )}
    </div>
  );
}
