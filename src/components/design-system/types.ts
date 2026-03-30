/**
 * Type definitions for the Design System
 */

export interface SizeStateSpec {
  size: string;
  state: string;
  description: string;
  renderComponent: React.ComponentType;
  cssVars: { name: string; value: string; actualValue?: string }[];
  codeExample?: string; // Optional code example for developers
}

export interface ComponentVariant {
  id: string;
  label: string;
  category: string;
  sizeStates: SizeStateSpec[];
}

export interface NavigationTreeProps {
  activeVariant: string;
  onNavigate: (id: string) => void;
}

export interface ComponentPreviewProps {
  variant: ComponentVariant;
  selectedSize: string;
  selectedStateIndex: number;
  onSizeChange: (size: string) => void;
  onStateChange: (index: number) => void;
}