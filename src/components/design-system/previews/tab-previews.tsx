/**
 * Tab Preview Components
 * 
 * Preview components for Master Tab and Child Tab components
 */

import React, { useState } from 'react';
import { MasterTab } from '@/components/market-details/MasterTab';
import { ChildTab } from '@/components/market-details/ChildTab';
import { CategoryTab } from '@/components/navigation/CategoryTab';
import { LayoutGrid, Bitcoin, TrendingUp, DollarSign } from 'lucide-react';

/**
 * Master Tab - Default State (Explore selected)
 */
export function MasterTabExploreDefault() {
  const [activeTab, setActiveTab] = useState<'explore' | 'my-markets'>('explore');
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <MasterTab activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

/**
 * Master Tab - My Markets Selected
 */
export function MasterTabMyMarketsSelected() {
  const [activeTab, setActiveTab] = useState<'explore' | 'my-markets'>('my-markets');
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <MasterTab activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

/**
 * Child Tab - Yes Selected
 */
export function ChildTabYesSelected() {
  const [activeTab, setActiveTab] = useState<'yes' | 'no'>('yes');
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <ChildTab
        activeOutcome={activeTab}
        onOutcomeChange={setActiveTab}
        outcomes={[
          { id: 'yes', label: 'Yes', percentage: 67 },
          { id: 'no', label: 'No', percentage: 33 }
        ]}
      />
    </div>
  );
}

/**
 * Child Tab - No Selected
 */
export function ChildTabNoSelected() {
  const [activeTab, setActiveTab] = useState<'yes' | 'no'>('no');
  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <ChildTab
        activeOutcome={activeTab}
        onOutcomeChange={setActiveTab}
        outcomes={[
          { id: 'yes', label: 'Yes', percentage: 67 },
          { id: 'no', label: 'No', percentage: 33 }
        ]}
      />
    </div>
  );
}

/**
 * Category Tab - All Selected
 */
export function CategoryTabAllSelected() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All', icon: LayoutGrid },
    { id: 'crypto', label: 'Crypto', icon: Bitcoin },
    { id: 'politics', label: 'Politics', icon: TrendingUp },
    { id: 'finance', label: 'Finance', icon: DollarSign }
  ];

  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <CategoryTab
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </div>
  );
}

/**
 * Category Tab - Crypto Selected
 */
export function CategoryTabCryptoSelected() {
  const [activeCategory, setActiveCategory] = useState('crypto');
  
  const categories = [
    { id: 'all', label: 'All', icon: LayoutGrid },
    { id: 'crypto', label: 'Crypto', icon: Bitcoin },
    { id: 'politics', label: 'Politics', icon: TrendingUp },
    { id: 'finance', label: 'Finance', icon: DollarSign }
  ];

  return (
    <div style={{ padding: '24px', background: 'var(--lum-01)' }}>
      <CategoryTab
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </div>
  );
}
