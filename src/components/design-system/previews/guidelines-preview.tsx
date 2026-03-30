/**
 * Guidelines Preview Component
 * Displays the design system guidelines in a formatted, readable layout
 */
import React from 'react';

export function GuidelinesPreview() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gap--2rem)',
        fontFamily: 'Inter, sans-serif',
        width: '100%',
        maxWidth: '900px',
      }}
    >
      {/* Critical Color Rules */}
      <Section title="Critical Color Rules">
        <Alert type="error">
          <strong>ALWAYS use lum color variables instead of slate color variables</strong>
        </Alert>
        <List>
          <ListItem type="error">
            <strong>DO NOT use:</strong> <Code>var(--background)</Code>, <Code>var(--slate-*)</Code>, or any slate-based colors
          </ListItem>
          <ListItem type="success">
            <strong>ALWAYS use:</strong> <Code>var(--lum-01)</Code>, <Code>var(--lum-02)</Code>, <Code>var(--lum-03)</Code> for backgrounds
          </ListItem>
        </List>
      </Section>

      {/* Color System */}
      <Section title="Color System Variables">
        <Grid>
          <ColorGroup title="Backgrounds">
            <ColorVariable name="--lum-01" usage="Primary background" />
            <ColorVariable name="--lum-02" usage="Secondary background" />
            <ColorVariable name="--lum-03" usage="Tertiary background" />
            <ColorVariable name="--card-normal" usage="Card background (gradient)" />
            <ColorVariable name="--card-gradient" usage="Market detail cards (radial gradient)" />
            <ColorVariable name="--card-hover" usage="Card hover state" />
          </ColorGroup>

          <ColorGroup title="Borders">
            <ColorVariable name="--black-a1" usage="Subtle border" />
            <ColorVariable name="--black-a2" usage="Standard border" />
            <ColorVariable name="--black-a3" usage="Emphasized border" />
          </ColorGroup>

          <ColorGroup title="Text">
            <ColorVariable name="--card-foreground" usage="Primary text" />
            <ColorVariable name="--muted-foreground" usage="Secondary text" />
          </ColorGroup>

          <ColorGroup title="Primary Colors">
            <ColorVariable name="--primary-button-bg" usage="Primary button (iris-9)" />
            <ColorVariable name="--primary-button-bg-hover" usage="Primary hover (iris-10)" />
            <ColorVariable name="--iris-11" usage="Primary text/accent" />
          </ColorGroup>

          <ColorGroup title="Semantic Colors">
            <ColorVariable name="--red-9" usage="Destructive actions" />
            <ColorVariable name="--green-9" usage="Success states" />
            <ColorVariable name="--amber-9" usage="Warning states" />
          </ColorGroup>
        </Grid>
      </Section>

      {/* Typography */}
      <Section title="Typography">
        <Alert type="warning">
          <strong>DO NOT</strong> use Tailwind typography classes like <Code>text-2xl</Code>, <Code>font-bold</Code>, <Code>leading-none</Code>
        </Alert>
        
        <Grid>
          <PropertyGroup title="Font Families">
            <Property name="Inter" value="Primary font - all UI elements" />
            <Property name="Kanit" value="Marketing only - hero sections" />
          </PropertyGroup>

          <PropertyGroup title="Font Sizes">
            <Property name="--text-xxs" value="10px - labels, captions" />
            <Property name="--text-xs" value="12px - small labels" />
            <Property name="--text-s" value="14px - secondary text" />
            <Property name="--text-base" value="16px - body text" />
            <Property name="--text-xl" value="20px - h4" />
            <Property name="--text-2xl" value="24px - h3" />
            <Property name="--text-3xl" value="30px - h2" />
            <Property name="--text-4xl" value="48px - h1" />
          </PropertyGroup>

          <PropertyGroup title="Font Weights">
            <Property name="--font-weight-normal" value="400" />
            <Property name="--font-weight-medium" value="500" />
            <Property name="--font-weight-semi-bold" value="600" />
            <Property name="--font-weight-extra-bold" value="800" />
          </PropertyGroup>
        </Grid>
      </Section>

      {/* Spacing */}
      <Section title="Spacing & Layout">
        <PropertyGroup title="Common Spacing Values">
          <Property name="--gap--0-5rem" value="8px" />
          <Property name="--gap--1rem" value="16px" />
          <Property name="--gap--1-5rem" value="24px" />
          <Property name="--gap--2rem" value="32px" />
          <Property name="--gap--3rem" value="48px" />
          <Property name="--gap--4rem" value="64px" />
        </PropertyGroup>
        <Alert type="info">
          Maximum content width: <Code>1280px</Code>
        </Alert>
      </Section>

      {/* Border Radius */}
      <Section title="Border Radius">
        <Grid>
          <PropertyGroup title="Semantic Radius">
            <Property name="--radius-button" value="8px" />
            <Property name="--radius-card" value="8px" />
            <Property name="--radius-input" value="6px" />
          </PropertyGroup>

          <PropertyGroup title="Available Radius">
            <Property name="--border-radius--0-25rem" value="4px" />
            <Property name="--border-radius--0-375rem" value="6px" />
            <Property name="--border-radius--0-5rem" value="8px" />
            <Property name="--border-radius--0-75rem" value="12px" />
            <Property name="--border-radius--1rem" value="16px" />
          </PropertyGroup>
        </Grid>
      </Section>

      {/* Animation */}
      <Section title="Animation & Transitions">
        <PropertyGroup title="Timing">
          <Property name="Standard" value="300ms ease-out" />
          <Property name="Quick" value="200ms ease-out" />
          <Property name="Smooth easing" value="cubic-bezier(0.4, 0, 0.2, 1)" />
        </PropertyGroup>
        <Alert type="info">
          Always use <Code>animation-fill-mode: forwards</Code> to prevent flash on exit
        </Alert>
      </Section>

      {/* Shadows */}
      <Section title="Shadow System">
        <PropertyGroup title="Shadow Variables">
          <Property name="--shadow-1" value="Subtle shadow - cards" />
          <Property name="--shadow-2" value="Medium shadow - dropdowns" />
          <Property name="--shadow-3" value="Strong shadow - modals" />
          <Property name="--shadow-4" value="Very subtle - hover states" />
        </PropertyGroup>
      </Section>

      {/* Component Rules */}
      <Section title="Component Styling Rules">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--1rem)' }}>
          <ComponentRule
            title="Buttons"
            rules={[
              'Primary: var(--primary-button-bg) background, var(--primary-button-fg) text',
              'Hover: var(--primary-button-bg-hover)',
              'Border radius: var(--radius-button)',
              'Font weight: var(--font-weight-medium)',
            ]}
          />
          <ComponentRule
            title="Cards"
            rules={[
              'Background: var(--card-normal)',
              'Hover: var(--card-hover)',
              'Border: 1px solid var(--black-a1)',
              'Border radius: var(--radius-card)',
              'Shadow: var(--shadow-1) or var(--shadow-2)',
            ]}
          />
          <ComponentRule
            title="Market Detail Cards"
            rules={[
              'Background: var(--card-gradient) - radial gradient for depth',
              'Border: 1px solid var(--black-a1)',
              'Border radius: var(--radius-card) or var(--radius-xl)',
              'Shadow: var(--shadow-1) - consistent with OrderBook/Chart',
              'Padding: 20px (fixed) for all content cards',
              'Applies to: Header card, OrderBook/Chart, Description card',
            ]}
          />
          <ComponentRule
            title="Buy/Sell Trading Block"
            rules={[
              'Background: var(--card-normal) - stands out from market detail cards',
              'Border: 1px solid var(--black-a1)',
              'Shadow: var(--shadow-1)',
              'Uses tabs with dynamic border radius transitions',
            ]}
          />
          <ComponentRule
            title="OrderBook (Prediction Market Standard)"
            rules={[
              'Top Section (RED): Asks - sell orders sorted ascending (best ask at bottom)',
              'Middle: Spread indicator showing best ask, best bid, last price, spread',
              'Bottom Section (GREEN): Bids - buy orders sorted descending (best bid at top)',
              'Labels: "Ask" (sellers), "Bid" (buyers) - not "Sell/Buy"',
              'Spread = Best Ask - Best Bid',
              'Number formatting: shares with toLocaleString(), price with ¢ symbol',
              'YES/NO Tabs: Filters orderbook to show only YES or NO market orders',
              'Market Indicator: Shows "{OUTCOME} Market Orderbook" header',
              'Each order has outcome field (yes|no) for proper filtering',
            ]}
          />
          <ComponentRule
            title="Probability Chart (Dual-Line)"
            rules={[
              'Shows both YES (green) and NO (red) probability lines simultaneously',
              'YES% + NO% = 100% at all times (complementary probabilities)',
              'YES line: var(--green-9) stroke, green gradient fill',
              'NO line: var(--red-9) stroke, red gradient fill',
              'Legend at top showing color coding for each outcome',
              'Y-axis domain: [0, 100] with % formatter',
              'Tooltip shows both probabilities at selected time point',
              'Data structure: { time: string; yes: number; no: number }',
              'Dynamic generation: Chart data generated per market using current price',
              'Mean reversion: Historical prices trend toward current market price',
            ]}
          />
          <ComponentRule
            title="Dynamic Data Generation (No Hardcoding)"
            rules={[
              'OrderBook: Generated dynamically based on each market\'s actual YES/NO percentages',
              'Chart: Generated using random walk with mean reversion to current price',
              'Spreads: Calculated from actual orderbook (best ask - best bid)',
              'Price increments: Adaptive based on market price (0.5¢ for low, 2¢ for high)',
              'Liquidity depth: Scaled by market volume (higher volume = more orders)',
              'Share sizes: Larger orders near spread, smaller orders further away',
              'All data memoized with useMemo to prevent regeneration on re-renders',
              'Dependencies: market.id, currentYesPercentage, volume',
            ]}
          />
          <ComponentRule
            title="Form Inputs"
            rules={[
              'Background: var(--card-normal)',
              'Border: 1px solid var(--black-a2)',
              'Focus: 1px solid var(--primary-button-bg)',
              'Border radius: var(--radius-input)',
              'Font size: var(--text-base)',
            ]}
          />
          <ComponentRule
            title="Sidebar Menu Items"
            rules={[
              'Gap between items: var(--gap--0-5rem)',
              'Active state: No hover effects',
              'Hover transform: translateX(4px) for non-active items',
              'Transition: 300ms ease-out',
            ]}
          />
        </div>
      </Section>

      {/* Common Mistakes */}
      <Section title="Common Mistakes to Avoid">
        <Grid>
          <div>
            <h4
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--red-9)',
                marginBottom: 'var(--gap--0-75rem)',
              }}
            >
              ❌ Don't
            </h4>
            <List>
              <ListItem type="error">Use var(--background) or var(--slate-*)</ListItem>
              <ListItem type="error">Use Tailwind typography classes</ListItem>
              <ListItem type="error">Hardcode colors, sizes, or spacing</ListItem>
              <ListItem type="error">Add hover effects to active states</ListItem>
              <ListItem type="error">Forget animation-fill-mode on exits</ListItem>
            </List>
          </div>
          <div>
            <h4
              style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--green-9)',
                marginBottom: 'var(--gap--0-75rem)',
              }}
            >
              ✅ Do
            </h4>
            <List>
              <ListItem type="success">Use var(--lum-01), var(--lum-02), var(--lum-03)</ListItem>
              <ListItem type="success">Use CSS variable font sizes</ListItem>
              <ListItem type="success">Use CSS variable spacing</ListItem>
              <ListItem type="success">Disable hover on active states</ListItem>
              <ListItem type="success">Add smooth transitions with proper timing</ListItem>
            </List>
          </div>
        </Grid>
      </Section>

      {/* Quick Reference */}
      <Section title="Quick Reference">
        <div
          style={{
            background: 'var(--card-normal)',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--gap--1-5rem)',
          }}
        >
          <h4
            style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--card-foreground)',
              marginBottom: 'var(--gap--1rem)',
            }}
          >
            Most Common Variables
          </h4>
          <pre
            style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--muted-foreground)',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
              margin: 0,
              lineHeight: 1.6,
            }}
          >
{`/* Backgrounds */
--lum-01, --lum-02, --lum-03
--card-normal, --card-hover

/* Text */
--card-foreground, --muted-foreground
--text-base, --text-sm, --text-xs
--font-weight-medium, --font-weight-semi-bold

/* Spacing */
--gap--0-5rem (8px)
--gap--1rem (16px)
--gap--1-5rem (24px)

/* Borders */
--black-a1, --black-a2, --black-a3
--radius-button, --radius-card

/* Colors */
--primary-button-bg (iris-9)
--red-9 (destructive)
--green-9 (success)`}
          </pre>
        </div>
      </Section>

      {/* Responsive Design */}
      <Section title="Responsive Design">
        <PropertyGroup title="Breakpoints">
          <Property name="Mobile" value="< 768px" />
          <Property name="Tablet" value="768px - 1024px" />
          <Property name="Desktop" value="> 1024px" />
          <Property name="Max content" value="1280px" />
        </PropertyGroup>
        <Alert type="info">
          HeroCarousel: 4 cards (1280px) → 3 cards (1024px) → 2 cards (768px) → 1 card (mobile)
        </Alert>
      </Section>

      {/* Accessibility */}
      <Section title="Accessibility">
        <List>
          <ListItem>Use semantic HTML (button for actions, a for navigation)</ListItem>
          <ListItem>Add aria-label for icon-only buttons</ListItem>
          <ListItem>Ensure color contrast meets WCAG AA (4.5:1)</ListItem>
          <ListItem>Support keyboard navigation (Tab, Enter, Escape)</ListItem>
          <ListItem>Provide focus visible states</ListItem>
        </List>
      </Section>
    </div>
  );
}

// Helper Components
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gap--1rem)',
      }}
    >
      <h3
        style={{
          fontSize: 'var(--text-xl)',
          fontWeight: 'var(--font-weight-semi-bold)',
          color: 'var(--card-foreground)',
          paddingBottom: 'var(--gap--0-5rem)',
          borderBottom: '2px solid var(--black-a2)',
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 'var(--gap--1rem)',
      }}
    >
      {children}
    </div>
  );
}

function ColorGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'var(--card-normal)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--1rem)',
      }}
    >
      <h4
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-semi-bold)',
          color: 'var(--card-foreground)',
          marginBottom: 'var(--gap--0-75rem)',
        }}
      >
        {title}
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--0-5rem)' }}>
        {children}
      </div>
    </div>
  );
}

function ColorVariable({ name, usage }: { name: string; usage: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--gap--0-5rem)' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          background: `var(${name})`,
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--border-radius--0-25rem)',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1, minWidth: 0 }}>
        <Code>{name}</Code>
        <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', margin: 0 }}>
          {usage}
        </p>
      </div>
    </div>
  );
}

function PropertyGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'var(--card-normal)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--1rem)',
      }}
    >
      <h4
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-weight-semi-bold)',
          color: 'var(--card-foreground)',
          marginBottom: 'var(--gap--0-75rem)',
        }}
      >
        {title}
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--0-5rem)' }}>
        {children}
      </div>
    </div>
  );
}

function Property({ name, value }: { name: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--gap--0-5rem)' }}>
      <Code>{name}</Code>
      <span style={{ fontSize: 'var(--text-xs)', color: 'var(--muted-foreground)', textAlign: 'right' }}>{value}</span>
    </div>
  );
}

function ComponentRule({ title, rules }: { title: string; rules: string[] }) {
  return (
    <div
      style={{
        background: 'var(--card-normal)',
        border: '1px solid var(--black-a1)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--1rem)',
      }}
    >
      <h4
        style={{
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-weight-semi-bold)',
          color: 'var(--card-foreground)',
          marginBottom: 'var(--gap--0-75rem)',
        }}
      >
        {title}
      </h4>
      <ul
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--muted-foreground)',
          listStyle: 'disc',
          paddingLeft: 'var(--gap--1-25rem)',
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--gap--0-25rem)',
        }}
      >
        {rules.map((rule, i) => (
          <li key={i}>{rule}</li>
        ))}
      </ul>
    </div>
  );
}

function Alert({ type, children }: { type: 'error' | 'warning' | 'info' | 'success'; children: React.ReactNode }) {
  const colors = {
    error: { bg: 'var(--red-3)', border: 'var(--red-9)', text: 'var(--red-11)' },
    warning: { bg: 'var(--amber-3)', border: 'var(--amber-9)', text: 'var(--amber-11)' },
    info: { bg: 'var(--blue-3)', border: 'var(--blue-9)', text: 'var(--blue-11)' },
    success: { bg: 'var(--green-3)', border: 'var(--green-9)', text: 'var(--green-11)' },
  };

  return (
    <div
      style={{
        background: colors[type].bg,
        border: `1px solid ${colors[type].border}`,
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--1rem)',
        fontSize: 'var(--text-sm)',
        color: colors[type].text,
      }}
    >
      {children}
    </div>
  );
}

function List({ children }: { children: React.ReactNode }) {
  return (
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--gap--0-5rem)',
      }}
    >
      {children}
    </ul>
  );
}

function ListItem({ type, children }: { type?: 'error' | 'success'; children: React.ReactNode }) {
  const icon = type === 'error' ? '❌' : type === 'success' ? '✅' : '•';
  
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--gap--0-5rem)',
        fontSize: 'var(--text-sm)',
        color: 'var(--card-foreground)',
      }}
    >
      <span style={{ flexShrink: 0 }}>{icon}</span>
      <span>{children}</span>
    </li>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        background: 'var(--black-a2)',
        color: 'var(--iris-11)',
        padding: '2px 6px',
        borderRadius: 'var(--border-radius--0-25rem)',
        fontSize: 'var(--text-xs)',
        fontFamily: 'monospace',
        fontWeight: 'var(--font-weight-medium)',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </code>
  );
}