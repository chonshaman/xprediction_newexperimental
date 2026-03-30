/**
 * Presale Market State Management Documentation
 * Complete guide to presale lifecycle, state transitions, and UI behavior
 */

import React from 'react';
import { Check, X, Clock, TrendingUp, DollarSign, Users, AlertCircle, CheckCircle } from 'lucide-react';

export function PresaleStateDocumentation() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto',
      color: 'var(--card-foreground)',
      fontFamily: 'var(--font-sans)',
    }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--gap--3rem)' }}>
        <h1 style={{
          fontSize: 'var(--text-3xl)',
          fontWeight: 'var(--font-weight-extra-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          Presale Market State Management
        </h1>
        <p style={{
          fontSize: 'var(--text-base)',
          color: 'var(--muted-foreground)',
          lineHeight: '1.6',
        }}>
          Comprehensive documentation of the presale market lifecycle, covering all states from creation through resolution, including role-based UI behavior and edge cases.
        </p>
      </div>

      {/* State Overview */}
      <StateOverviewSection />

      {/* Lifecycle Diagram */}
      <LifecycleDiagramSection />

      {/* State Details */}
      <PresaleActiveStateSection />
      <PresaleFailedStateSection />
      <MarketLiveStateSection />
      <MarketResolvedStateSection />

      {/* Role-Based UI */}
      <RoleBasedUISection />

      {/* Edge Cases */}
      <EdgeCasesSection />

      {/* Data Model */}
      <DataModelSection />
    </div>
  );
}

function StateOverviewSection() {
  const states = [
    {
      state: 'PRESALE_ACTIVE',
      icon: <Clock size={20} />,
      color: '#6952FE',
      description: 'Market is open for funding. Investors can join by purchasing presale shares at $0.50 each.',
      duration: 'Until presale timer expires or creator manually publishes',
      nextState: 'PRESALE_FAILED or MARKET_LIVE',
    },
    {
      state: 'PRESALE_FAILED',
      icon: <X size={20} />,
      color: '#EF4444',
      description: 'Presale timer expired without reaching the soft cap. All investors eligible for full refunds.',
      duration: 'Permanent terminal state',
      nextState: 'None (terminal)',
    },
    {
      state: 'MARKET_LIVE',
      icon: <TrendingUp size={20} />,
      color: '#10B981',
      description: 'Soft cap reached and market published to AMM. Trading is live with vesting schedule active.',
      duration: 'Until market resolution date or early resolution',
      nextState: 'MARKET_RESOLVED',
    },
    {
      state: 'MARKET_RESOLVED',
      icon: <CheckCircle size={20} />,
      color: '#14B8A6',
      description: 'Market outcome determined (YES/NO/INVALID). Winners can claim payouts.',
      duration: 'Permanent terminal state',
      nextState: 'None (terminal)',
    },
  ];

  return (
    <section style={{ marginBottom: 'var(--gap--4rem)' }}>
      <h2 style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--1-5rem)',
        color: 'var(--card-foreground)',
      }}>
        State Overview
      </h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--gap--1rem)',
      }}>
        {states.map((stateInfo, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'var(--card-normal)',
              border: '1px solid var(--black-a2)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--gap--1-5rem)',
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--gap--0-5rem)',
              marginBottom: 'var(--gap--1rem)',
            }}>
              <div style={{ color: stateInfo.color }}>
                {stateInfo.icon}
              </div>
              <h3 style={{
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
                color: 'var(--card-foreground)',
              }}>
                {stateInfo.state}
              </h3>
            </div>
            
            <p style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--muted-foreground)',
              marginBottom: 'var(--gap--0-75rem)',
              lineHeight: '1.5',
            }}>
              {stateInfo.description}
            </p>
            
            <div style={{ 
              fontSize: 'var(--text-sm)',
              color: 'var(--muted-foreground)',
              borderTop: '1px solid var(--black-a1)',
              paddingTop: 'var(--gap--0-75rem)',
              marginTop: 'var(--gap--0-75rem)',
            }}>
              <div style={{ marginBottom: 'var(--gap--0-25rem)' }}>
                <strong style={{ color: 'var(--card-foreground)' }}>Duration:</strong> {stateInfo.duration}
              </div>
              <div>
                <strong style={{ color: 'var(--card-foreground)' }}>Next State:</strong> {stateInfo.nextState}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LifecycleDiagramSection() {
  return (
    <section style={{ marginBottom: 'var(--gap--4rem)' }}>
      <h2 style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--1-5rem)',
        color: 'var(--card-foreground)',
      }}>
        State Lifecycle Diagram
      </h2>
      
      <div style={{
        backgroundColor: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--2rem)',
        overflow: 'auto',
      }}>
        <div style={{ minWidth: '600px' }}>
          {/* Start */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--gap--2rem)' }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: 'var(--lum-03)',
              border: '2px solid var(--iris-9)',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--gap--1rem) var(--gap--1-5rem)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)',
              color: 'var(--card-foreground)',
            }}>
              🎯 Creator Creates Market
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 'var(--gap--1rem)' }}>
            <div style={{ 
              width: '2px', 
              height: '40px', 
              backgroundColor: 'var(--iris-9)', 
              margin: '0 auto',
            }} />
          </div>

          {/* PRESALE_ACTIVE */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--gap--2rem)' }}>
            <div style={{
              display: 'inline-block',
              backgroundColor: '#6952FE',
              borderRadius: 'var(--radius-card)',
              padding: 'var(--gap--1-5rem)',
              color: 'white',
              maxWidth: '400px',
            }}>
              <div style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--font-weight-semi-bold)', marginBottom: 'var(--gap--0-5rem)' }}>
                PRESALE_ACTIVE
              </div>
              <div style={{ fontSize: 'var(--text-sm)', opacity: 0.9 }}>
                Investors join • Creator stakes 10K XEF
              </div>
            </div>
          </div>

          {/* Decision Point */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 'var(--gap--4rem)',
            marginBottom: 'var(--gap--2rem)',
          }}>
            {/* Left Path - Failed */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ marginBottom: 'var(--gap--1rem)' }}>
                <div style={{ 
                  width: '2px', 
                  height: '40px', 
                  backgroundColor: '#EF4444', 
                  margin: '0 auto',
                }} />
              </div>
              <div style={{
                backgroundColor: '#EF4444',
                color: 'white',
                padding: 'var(--gap--0-75rem)',
                borderRadius: 'var(--radius-card)',
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--gap--1rem)',
              }}>
                ❌ Timer Expires<br />Soft Cap Not Reached
              </div>
              <div style={{
                backgroundColor: '#FEE2E2',
                color: '#991B1B',
                border: '2px solid #EF4444',
                borderRadius: 'var(--radius-card)',
                padding: 'var(--gap--1-5rem)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
              }}>
                PRESALE_FAILED
                <div style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--gap--0-5rem)', fontWeight: 'var(--font-weight-medium)' }}>
                  (Terminal State)
                </div>
              </div>
            </div>

            {/* Right Path - Success */}
            <div style={{ textAlign: 'center', flex: 1 }}>
              <div style={{ marginBottom: 'var(--gap--1rem)' }}>
                <div style={{ 
                  width: '2px', 
                  height: '40px', 
                  backgroundColor: '#10B981', 
                  margin: '0 auto',
                }} />
              </div>
              <div style={{
                backgroundColor: '#10B981',
                color: 'white',
                padding: 'var(--gap--0-75rem)',
                borderRadius: 'var(--radius-card)',
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--gap--1rem)',
              }}>
                ✅ Soft Cap Reached<br />Creator Publishes
              </div>
              <div style={{
                backgroundColor: '#D1FAE5',
                color: '#065F46',
                border: '2px solid #10B981',
                borderRadius: 'var(--radius-card)',
                padding: 'var(--gap--1-5rem)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
              }}>
                MARKET_LIVE
                <div style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--gap--0-5rem)', fontWeight: 'var(--font-weight-medium)' }}>
                  AMM Trading Active
                </div>
              </div>
            </div>
          </div>

          {/* Final Resolution - only from MARKET_LIVE */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'var(--gap--2rem)' }}>
            <div style={{ textAlign: 'center', maxWidth: '400px' }}>
              <div style={{ marginBottom: 'var(--gap--1rem)' }}>
                <div style={{ 
                  width: '2px', 
                  height: '40px', 
                  backgroundColor: '#14B8A6', 
                  margin: '0 auto',
                }} />
              </div>
              <div style={{
                backgroundColor: '#14B8A6',
                color: 'white',
                padding: 'var(--gap--0-75rem)',
                borderRadius: 'var(--radius-card)',
                fontSize: 'var(--text-sm)',
                marginBottom: 'var(--gap--1rem)',
              }}>
                Event Occurs • Outcome Determined
              </div>
              <div style={{
                backgroundColor: '#CCFBF1',
                color: '#115E59',
                border: '2px solid #14B8A6',
                borderRadius: 'var(--radius-card)',
                padding: 'var(--gap--1-5rem)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-semi-bold)',
              }}>
                MARKET_RESOLVED
                <div style={{ fontSize: 'var(--text-sm)', marginTop: 'var(--gap--0-5rem)', fontWeight: 'var(--font-weight-medium)' }}>
                  (Terminal State)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PresaleActiveStateSection() {
  return (
    <section style={{ marginBottom: 'var(--gap--4rem)' }}>
      <h2 style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--1-5rem)',
        color: 'var(--card-foreground)',
      }}>
        PRESALE_ACTIVE State
      </h2>

      <div style={{
        backgroundColor: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--2rem)',
      }}>
        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          When Can Publish Presale to Live Trading?
        </h3>

        <div style={{ marginBottom: 'var(--gap--2rem)' }}>
          <div style={{
            backgroundColor: 'var(--lum-03)',
            border: '1px solid var(--iris-9)',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--gap--1-5rem)',
            marginBottom: 'var(--gap--1rem)',
          }}>
            <h4 style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)',
              marginBottom: 'var(--gap--0-75rem)',
              color: 'var(--card-foreground)',
            }}>
              ✅ Requirements for Publishing
            </h4>
            <ul style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--muted-foreground)',
              paddingLeft: 'var(--gap--1-5rem)',
              margin: 0,
              lineHeight: '1.8',
            }}>
              <li><strong>Soft Cap Reached:</strong> raisedAmount ≥ softCapAmount (typically 10,000 USDX)</li>
              <li><strong>Creator Stake Locked:</strong> Creator must have staked 10,000 XEF (isLocked = true)</li>
              <li><strong>User Role:</strong> Only creator (viewerRole = 'creator') can publish</li>
              <li><strong>Timer Still Active:</strong> Can publish anytime before presale timer expires</li>
              <li><strong>Can Exceed Soft Cap:</strong> If raised &gt; soft cap, creator can still publish (e.g., 250% funded)</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: 'var(--card-hover)',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--gap--1-5rem)',
          }}>
            <h4 style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)',
              marginBottom: 'var(--gap--0-75rem)',
              color: 'var(--card-foreground)',
            }}>
              🔄 Automatic Transition
            </h4>
            <p style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--muted-foreground)',
              margin: 0,
              lineHeight: '1.6',
            }}>
              If timer expires AND soft cap is reached, market automatically transitions to MARKET_LIVE (no creator action required).
              If timer expires AND soft cap NOT reached → PRESALE_FAILED.
            </p>
          </div>
        </div>

        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          UI Display by Role
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--1rem)' }}>
          <RoleCard
            role="Creator"
            items={[
              'StatusBadge: Blue "Presale Live"',
              'SoftcapProgressBar: Shows progress (can exceed 100%)',
              'Timer: Countdown to presale end',
              'Primary Action Button: "Publish to Market" (enabled if soft cap reached)',
              'Creator Stake Card: Shows 10K XEF locked',
              'Participants List: All investors with amounts',
              'Statistics: Raised amount, number of participants',
            ]}
          />

          <RoleCard
            role="Investor (Joined)"
            items={[
              'StatusBadge: Blue "Presale Live"',
              'SoftcapProgressBar: Current funding progress',
              'Timer: Time remaining to join',
              'Investment Card: Shows user\'s invested amount',
              'Primary Action Button: Disabled (already joined)',
              'Participants List: Highlights user\'s position',
              'Can still see soft cap progress',
            ]}
          />

          <RoleCard
            role="Investor (Not Joined)"
            items={[
              'StatusBadge: Blue "Presale Live"',
              'SoftcapProgressBar: Funding progress',
              'Timer: Countdown to last chance to join',
              'Primary Action Button: "Join Presale" (enabled)',
              'Input Field: Enter USDX amount to invest',
              'Share Price Display: Fixed at $0.50 per share',
              'Soft Cap Info: Shows target and current raised amount',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PresaleFailedStateSection() {
  return (
    <section style={{ marginBottom: 'var(--gap--4rem)' }}>
      <h2 style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--1-5rem)',
        color: 'var(--card-foreground)',
      }}>
        PRESALE_FAILED State
      </h2>

      <div style={{
        backgroundColor: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--2rem)',
      }}>
        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          What Happens When Not Enough Soft Cap?
        </h3>

        <div style={{ marginBottom: 'var(--gap--2rem)' }}>
          <div style={{
            backgroundColor: '#FEF2F2',
            border: '2px solid #EF4444',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--gap--1-5rem)',
            marginBottom: 'var(--gap--1rem)',
          }}>
            <h4 style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)',
              marginBottom: 'var(--gap--0-75rem)',
              color: '#991B1B',
            }}>
              ❌ Trigger Conditions
            </h4>
            <ul style={{
              fontSize: 'var(--text-sm)',
              color: '#7F1D1D',
              paddingLeft: 'var(--gap--1-5rem)',
              margin: 0,
              lineHeight: '1.8',
            }}>
              <li>Presale timer expires (endingDays = 0, endingHours = 0, endingMinutes = 0)</li>
              <li>Raised amount &lt; soft cap amount (e.g., raised 2,800 USDX / 10,000 USDX target)</li>
              <li>State immediately transitions to PRESALE_FAILED</li>
              <li>This is a permanent terminal state (cannot revert)</li>
            </ul>
          </div>

          <div style={{
            backgroundColor: 'var(--card-hover)',
            border: '1px solid var(--black-a2)',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--gap--1-5rem)',
          }}>
            <h4 style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)',
              marginBottom: 'var(--gap--0-75rem)',
              color: 'var(--card-foreground)',
            }}>
              💰 Automatic Refund Process
            </h4>
            <ol style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--muted-foreground)',
              paddingLeft: 'var(--gap--1-5rem)',
              margin: 0,
              lineHeight: '1.8',
            }}>
              <li><strong>All Investors Eligible:</strong> Every participant can claim 100% refund of their investment</li>
              <li><strong>Refund Status Tracking:</strong> Each participant has refundStatus ('refunded' | 'pending')</li>
              <li><strong>Claim Tracking:</strong> refundClaimed boolean tracks if user clicked "Claim Refund"</li>
              <li><strong>No Deadline:</strong> Refunds available indefinitely (funds locked in contract)</li>
              <li><strong>Creator Stake:</strong> Creator's 10K XEF stake also returned</li>
            </ol>
          </div>
        </div>

        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          How to Refund - UI Display
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--1rem)' }}>
          <RoleCard
            role="Creator"
            items={[
              'StatusBadge: Red "Presale Unsuccessful"',
              'RefundCard: Shows total raised amount being returned',
              'Message: "Presale did not reach soft cap. All funds will be refunded."',
              'Participants List: Each shows refund status (claimed/pending)',
              'Creator Stake Card: Shows 10K XEF unlocked and returned',
              'No Action Button: Creator cannot restart or modify failed presale',
            ]}
          />

          <RoleCard
            role="Investor (Joined)"
            items={[
              'StatusBadge: Red "Presale Unsuccessful"',
              'RefundCard Prominent: Large card showing investment amount to refund',
              'Primary Action Button: "Claim Refund" (enabled if not claimed)',
              'If Already Claimed: Button shows "Refunded ✓" (disabled)',
              'Refund Amount Display: Shows exact USDX amount invested (e.g., 500 USDX)',
              'Participants List: Shows own refund status highlighted',
              'Message: "You are eligible for a full refund of your investment"',
            ]}
          />

          <RoleCard
            role="Viewer (Not Invested)"
            items={[
              'StatusBadge: Red "Presale Unsuccessful"',
              'Info Card: Explains presale failed to reach soft cap',
              'Statistics: Final raised amount vs soft cap target',
              'Participants List: Shows all investors (read-only)',
              'No Action Button: Cannot join failed presale',
              'Message: "This presale did not reach its funding goal"',
            ]}
          />
        </div>

        <div style={{
          backgroundColor: 'var(--lum-03)',
          border: '1px solid var(--iris-9)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--1-5rem)',
          marginTop: 'var(--gap--1-5rem)',
        }}>
          <h4 style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semi-bold)',
            marginBottom: 'var(--gap--0-75rem)',
            color: 'var(--card-foreground)',
          }}>
            📊 Example Data Structure (Participant with Refund)
          </h4>
          <pre style={{
            backgroundColor: 'var(--lum-01)',
            padding: 'var(--gap--1rem)',
            borderRadius: 'var(--border-radius--0-5rem)',
            fontSize: 'var(--text-sm)',
            color: 'var(--card-foreground)',
            overflow: 'auto',
            fontFamily: 'monospace',
          }}>
{`{
  id: 'participant-1',
  name: 'Jane Smith',
  amount: '500', // USDX invested
  dateJoined: '21 Jan, 2025',
  refundStatus: 'refunded',
  refundClaimed: true, // User clicked "Claim Refund"
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}

function MarketLiveStateSection() {
  return (
    <section style={{ marginBottom: 'var(--gap--4rem)' }}>
      <h2 style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--1-5rem)',
        color: 'var(--card-foreground)',
      }}>
        MARKET_LIVE State
      </h2>

      <div style={{
        backgroundColor: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--2rem)',
      }}>
        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          What Happens When Market Goes Live?
        </h3>

        <div style={{ marginBottom: 'var(--gap--2rem)' }}>
          <div style={{
            backgroundColor: '#ECFDF5',
            border: '2px solid #10B981',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--gap--1-5rem)',
            marginBottom: 'var(--gap--1rem)',
          }}>
            <h4 style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)',
              marginBottom: 'var(--gap--0-75rem)',
              color: '#065F46',
            }}>
              🚀 Transition Actions
            </h4>
            <ol style={{
              fontSize: 'var(--text-sm)',
              color: '#047857',
              paddingLeft: 'var(--gap--1-5rem)',
              margin: 0,
              lineHeight: '1.8',
            }}>
              <li><strong>AMM Minting:</strong> Market minted to Automated Market Maker</li>
              <li><strong>Initial Price Set:</strong> ammInitialPrice = {'{'}yes: 0.50, no: 0.50{'}'}</li>
              <li><strong>Presale Shares Convert:</strong> Each presale share → AMM position at $0.50</li>
              <li><strong>Vesting Begins:</strong> Investor shares locked for 24-hour vesting period</li>
              <li><strong>Creator Stake Locked:</strong> Creator's 10K XEF remains locked until resolution</li>
              <li><strong>Trading Opens:</strong> Anyone (not just presale investors) can trade</li>
              <li><strong>Timer Resets:</strong> Now counts down to resolution date instead of presale end</li>
            </ol>
          </div>

          <div style={{
            backgroundColor: 'var(--lum-03)',
            border: '1px solid var(--iris-9)',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--gap--1-5rem)',
          }}>
            <h4 style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)',
              marginBottom: 'var(--gap--0-75rem)',
              color: 'var(--card-foreground)',
            }}>
              ⏱️ Vesting Schedule Mechanics
            </h4>
            <ul style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--muted-foreground)',
              paddingLeft: 'var(--gap--1-5rem)',
              margin: 0,
              lineHeight: '1.8',
            }}>
              <li><strong>Duration:</strong> 24 hours from market going live</li>
              <li><strong>Unlock Rate:</strong> ~4.17% per hour (linear vesting)</li>
              <li><strong>Example:</strong> If user has 1000 shares → ~42 shares unlock per hour</li>
              <li><strong>Trading Restriction:</strong> Can only sell unlocked shares during vesting</li>
              <li><strong>After 24h:</strong> All shares fully unlocked, can trade freely</li>
              <li><strong>Early Resolution:</strong> Vesting immediately terminates, all shares unlock</li>
            </ul>
          </div>
        </div>

        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          UI Display by Role
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--1rem)' }}>
          <RoleCard
            role="Creator"
            items={[
              'StatusBadge: Green "Market Live"',
              'Market Statistics: Current YES/NO prices, total volume',
              'Creator Stake Card: Shows 10K XEF locked + trading fees accumulated',
              'Trading Fees Display: "Earning 2% of all trades" (updates live)',
              'Resolution Info: Shows resolution date and criteria',
              'Link to Market: Button to open market in main trading view',
              'No Vesting Display: Creator does not have vesting (only investors)',
            ]}
          />

          <RoleCard
            role="Investor (Presale Participant)"
            items={[
              'StatusBadge: Green "Market Live"',
              'VestingProgressCard: Prominent display of vesting status',
              '  - Total Shares: e.g., 1000 shares',
              '  - Unlocked Shares: e.g., 400 (40%)',
              '  - Locked Shares: e.g., 600 (60%)',
              '  - Progress Bar: Visual vesting progress',
              '  - Next Unlock: "42 shares in 58 minutes"',
              'Current Position Value: Shows $ value at current AMM prices',
              'Primary Action: "Trade Market" button → opens trading view',
              'Price Display: Current YES/NO prices vs initial $0.50',
            ]}
          />

          <RoleCard
            role="Public Trader (Non-Presale)"
            items={[
              'StatusBadge: Green "Market Live"',
              'Market Info: Shows it started as presale, now open trading',
              'Current Prices: YES/NO prices with % change from $0.50',
              'Trading Volume: Total volume since market went live',
              'Primary Action: "Trade Now" button',
              'No Vesting Info: Only presale investors have vesting',
              'Resolution Countdown: Days/hours until resolution date',
            ]}
          />
        </div>

        <div style={{
          backgroundColor: 'var(--card-hover)',
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--1-5rem)',
          marginTop: 'var(--gap--1-5rem)',
        }}>
          <h4 style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semi-bold)',
            marginBottom: 'var(--gap--0-75rem)',
            color: 'var(--card-foreground)',
          }}>
            📊 Example Vesting Data
          </h4>
          <pre style={{
            backgroundColor: 'var(--lum-01)',
            padding: 'var(--gap--1rem)',
            borderRadius: 'var(--border-radius--0-5rem)',
            fontSize: 'var(--text-sm)',
            color: 'var(--card-foreground)',
            overflow: 'auto',
            fontFamily: 'monospace',
          }}>
{`viewerVesting: {
  totalShares: 1000,
  unlockedShares: 400,  // Can trade these
  lockedShares: 600,    // Cannot trade yet
  vestingDurationHours: 24,
  vestingStartTime: Date (10 hours ago),
  nextUnlockTime: Date (in 1 hour),
  unlockPercentPerHour: 4.17,
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}

function MarketResolvedStateSection() {
  return (
    <section style={{ marginBottom: 'var(--gap--4rem)' }}>
      <h2 style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--1-5rem)',
        color: 'var(--card-foreground)',
      }}>
        MARKET_RESOLVED State
      </h2>

      <div style={{
        backgroundColor: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--2rem)',
      }}>
        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          What Happens When Market Resolved?
        </h3>

        <div style={{ marginBottom: 'var(--gap--2rem)' }}>
          <div style={{
            backgroundColor: '#F0FDFA',
            border: '2px solid #14B8A6',
            borderRadius: 'var(--radius-card)',
            padding: 'var(--gap--1-5rem)',
            marginBottom: 'var(--gap--1rem)',
          }}>
            <h4 style={{
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-weight-semi-bold)',
              marginBottom: 'var(--gap--0-75rem)',
              color: '#115E59',
            }}>
              ✅ Resolution Actions
            </h4>
            <ol style={{
              fontSize: 'var(--text-sm)',
              color: '#0F766E',
              paddingLeft: 'var(--gap--1-5rem)',
              margin: 0,
              lineHeight: '1.8',
            }}>
              <li><strong>Outcome Determined:</strong> resolutionOutcome set to 'YES', 'NO', or 'INVALID'</li>
              <li><strong>Trading Halts:</strong> AMM trading immediately disabled</li>
              <li><strong>Final Prices:</strong> Winning side → $1.00, losing side → $0.00</li>
              <li><strong>Vesting Terminates:</strong> All locked shares immediately unlock</li>
              <li><strong>Creator Stake Released:</strong> Creator's 10K XEF unlocked</li>
              <li><strong>Payout Calculation:</strong> Winners can claim shares × $1.00</li>
              <li><strong>Timestamp Recorded:</strong> resolutionTimestamp for historical tracking</li>
            </ol>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--gap--1rem)',
          }}>
            <OutcomeCard
              outcome="YES"
              color="#10B981"
              bgColor="#D1FAE5"
              description="Event occurred as predicted. YES holders receive $1.00 per share."
            />
            <OutcomeCard
              outcome="NO"
              color="#EF4444"
              bgColor="#FEE2E2"
              description="Event did not occur. NO holders receive $1.00 per share."
            />
            <OutcomeCard
              outcome="INVALID"
              color="#F59E0B"
              bgColor="#FEF3C7"
              description="Market invalid (ambiguous outcome). All participants refunded proportionally."
            />
          </div>
        </div>

        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          What Happens When Market Early Resolved?
        </h3>

        <div style={{
          backgroundColor: 'var(--lum-03)',
          border: '1px solid var(--iris-9)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--1-5rem)',
          marginBottom: 'var(--gap--2rem)',
        }}>
          <h4 style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semi-bold)',
            marginBottom: 'var(--gap--0-75rem)',
            color: 'var(--card-foreground)',
          }}>
            ⚡ Early Resolution Scenario
          </h4>
          <p style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--muted-foreground)',
            marginBottom: 'var(--gap--1rem)',
            lineHeight: '1.6',
          }}>
            <strong>Example:</strong> Market resolution date is Dec 31, 2025, but the event occurs on Feb 15, 2025.
          </p>
          <ul style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--muted-foreground)',
            paddingLeft: 'var(--gap--1-5rem)',
            margin: 0,
            lineHeight: '1.8',
          }}>
            <li><strong>Immediate Halt:</strong> Trading stops the moment outcome is confirmed</li>
            <li><strong>Vesting Override:</strong> If still in vesting period, ALL shares unlock instantly</li>
            <li><strong>Same Payout Logic:</strong> Winners get $1.00 per share</li>
            <li><strong>Creator Benefits:</strong> Creator gets trading fees accumulated up to resolution + stake returned</li>
            <li><strong>No Waiting:</strong> Payouts available immediately (no waiting until original resolution date)</li>
            <li><strong>UI Update:</strong> Shows "Early Resolution" badge + actual resolution date vs planned date</li>
          </ul>
        </div>

        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          UI Display by Role & Outcome
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--1rem)' }}>
          <RoleCard
            role="Winner (Holds Winning Outcome)"
            items={[
              'StatusBadge: Teal "Payout In Progress" or "Payout Completed"',
              'Outcome Banner: Large green "Market Resolved: YES ✓" (or NO)',
              'Payout Card: Shows total payout amount (shares × $1.00)',
              '  - Example: "You won! 1,200 shares × $1.00 = $1,200 USDX"',
              'Primary Action: "Claim Payout" button (green, prominent)',
              'If Claimed: Shows "Payout Claimed ✓" with timestamp',
              'Resolution Info: Explains why outcome was chosen',
              'Vesting Status: "Fully Unlocked" (no longer relevant)',
            ]}
          />

          <RoleCard
            role="Loser (Holds Losing Outcome)"
            items={[
              'StatusBadge: Teal "Payout In Progress"',
              'Outcome Banner: Shows losing outcome (e.g., "Market Resolved: YES")',
              'Loss Card: Shows position value → $0.00',
              '  - Example: "Your 500 NO shares are now worth $0.00"',
              'No Action Button: Cannot claim anything',
              'Resolution Info: Explains outcome determination',
              'Message: "Better luck next time!" or similar',
              'Historical Data: Can view trading history',
            ]}
          />

          <RoleCard
            role="Creator"
            items={[
              'StatusBadge: Teal "Payout Completed"',
              'Resolution Summary: Shows final outcome',
              'Creator Earnings Card:',
              '  - Stake Returned: 10,000 XEF',
              '  - Trading Fees Earned: e.g., 2,500 XEF (2% of total volume)',
              '  - Total Return: 12,500 XEF',
              'Primary Action: "Claim Creator Rewards" button',
              'Market Statistics: Final prices, total volume, participants',
              'Payout History Card: List of all winners and amounts claimed',
            ]}
          />

          <RoleCard
            role="INVALID Resolution (All Participants)"
            items={[
              'StatusBadge: Orange "Payout In Progress"',
              'Invalid Banner: "Market Resolved as INVALID"',
              'Refund Card: Shows proportional refund calculation',
              '  - Formula: (User Investment / Total Pool) × Total Pool',
              '  - Essentially: Full refund of original position value',
              'Primary Action: "Claim Refund" button',
              'Explanation: "Market outcome was ambiguous or criteria unclear"',
              'All Participants Equal: Everyone gets invested amount back',
            ]}
          />
        </div>

        <div style={{
          backgroundColor: 'var(--card-hover)',
          border: '1px solid var(--black-a2)',
          borderRadius: 'var(--radius-card)',
          padding: 'var(--gap--1-5rem)',
          marginTop: 'var(--gap--1-5rem)',
        }}>
          <h4 style={{
            fontSize: 'var(--text-base)',
            fontWeight: 'var(--font-weight-semi-bold)',
            marginBottom: 'var(--gap--0-75rem)',
            color: 'var(--card-foreground)',
          }}>
            📊 Example Resolution Data
          </h4>
          <pre style={{
            backgroundColor: 'var(--lum-01)',
            padding: 'var(--gap--1rem)',
            borderRadius: 'var(--border-radius--0-5rem)',
            fontSize: 'var(--text-sm)',
            color: 'var(--card-foreground)',
            overflow: 'auto',
            fontFamily: 'monospace',
          }}>
{`{
  state: 'MARKET_RESOLVED',
  resolutionOutcome: 'YES',
  resolutionTimestamp: Date('2025-02-18'),
  currentPrice: { yes: 1.00, no: 0.00 },
  totalVolume: 125000,
  viewerVesting: {
    totalShares: 1200,
    unlockedShares: 1200, // All unlocked
    lockedShares: 0,
  },
  creatorStake: {
    amount: 10000,
    isLocked: false, // Released
    tradingFeesAccumulated: 2500,
  }
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}

function RoleBasedUISection() {
  return (
    <section style={{ marginBottom: 'var(--gap--4rem)' }}>
      <h2 style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--1-5rem)',
        color: 'var(--card-foreground)',
      }}>
        Role-Based UI Components Summary
      </h2>

      <div style={{
        backgroundColor: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--2rem)',
      }}>
        <p style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--muted-foreground)',
          marginBottom: 'var(--gap--2rem)',
          lineHeight: '1.6',
        }}>
          The UI adapts based on two factors: <strong>Market State</strong> (PRESALE_ACTIVE, PRESALE_FAILED, MARKET_LIVE, MARKET_RESOLVED) and <strong>Viewer Role</strong> (creator, investor-joined, investor-not-joined).
        </p>

        <div style={{ display: 'grid', gap: 'var(--gap--1-5rem)' }}>
          <ComponentTable
            title="Always Visible (All Roles, All States)"
            items={[
              'StatusBadge - Color-coded based on state',
              'Market Question & Category',
              'Contract Address with copy functionality',
              'Resolution Criteria (full description)',
              'Creator Attribution (@username)',
              'Market Type (Yes/No or Multi-Outcome)',
            ]}
          />

          <ComponentTable
            title="Conditional Components"
            items={[
              'SoftcapProgressBar - Only PRESALE_ACTIVE state',
              'Timer Countdown - PRESALE_ACTIVE (presale end) or MARKET_LIVE (resolution)',
              'RefundCard - Only PRESALE_FAILED + investor-joined',
              'VestingProgressCard - Only MARKET_LIVE + investor-joined (presale participant)',
              'PayoutCard - Only MARKET_RESOLVED + winning position holders',
              'CreatorStakeCard - Only visible to creator role',
              'TradingFeesCard - Only MARKET_LIVE/RESOLVED + creator role',
            ]}
          />

          <ComponentTable
            title="Action Buttons (State + Role Dependent)"
            items={[
              '"Join Presale" - PRESALE_ACTIVE + investor-not-joined',
              '"Publish to Market" - PRESALE_ACTIVE + creator + soft cap reached',
              '"Claim Refund" - PRESALE_FAILED + investor-joined + not yet claimed',
              '"Trade Market" - MARKET_LIVE + any role',
              '"Claim Payout" - MARKET_RESOLVED + winner + not yet claimed',
              '"Claim Creator Rewards" - MARKET_RESOLVED + creator',
            ]}
          />

          <ComponentTable
            title="Right Column Components (PresaleDetailRightColumn)"
            items={[
              'StatisticsCard - Shows raised/soft cap (PRESALE_ACTIVE)',
              'CreatorStake - Shows creator stake status (creator only)',
              'MarketPricesCard - Shows AMM prices (MARKET_LIVE/RESOLVED)',
              'VolumeCard - Shows trading volume (MARKET_LIVE/RESOLVED)',
              'ParticipantsCard - Always visible, content varies by state',
              'CommentsSection - Always visible',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function EdgeCasesSection() {
  return (
    <section style={{ marginBottom: 'var(--gap--4rem)' }}>
      <h2 style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--1-5rem)',
        color: 'var(--card-foreground)',
      }}>
        Edge Cases & Special Scenarios
      </h2>

      <div style={{
        backgroundColor: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--2rem)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gap--1-5rem)' }}>
          <EdgeCaseCard
            title="Presale Exceeds Soft Cap (250%+ Funded)"
            scenario="Market ID 3: Raised 25,000 USDX / 10,000 USDX soft cap = 250%"
            handling={[
              'SoftcapProgressBar shows >100% progress',
              'Creator can still publish anytime before timer expires',
              'Extra funds do NOT go to creator - all convert to presale shares',
              'More shares minted = deeper AMM liquidity when live',
              'Creator still gets same 10K XEF stake + 2% trading fees',
            ]}
          />

          <EdgeCaseCard
            title="User Joins Presale 1 Minute Before Timer Expires"
            scenario="Timer shows 0 days, 0 hours, 1 minute remaining"
            handling={[
              'Investment is valid if transaction confirms before timer hits 0',
              'If soft cap reached after their investment → MARKET_LIVE',
              'If soft cap NOT reached after timer expires → PRESALE_FAILED, user gets refund',
              'Vesting starts from market live timestamp (not their join time)',
              'UI should warn: "⚠️ Less than 5 minutes remaining!"',
            ]}
          />

          <EdgeCaseCard
            title="Market Goes Live During Vesting Period, Then Resolves"
            scenario="Market goes live → 5 hours later, event occurs (early resolution)"
            handling={[
              'User has locked shares (only 20% unlocked after 5 hours)',
              'Resolution immediately unlocks ALL remaining shares',
              'User can claim full payout on 100% of shares',
              'Vesting progress card shows "Unlocked due to early resolution"',
              'No penalty for locked shares - full payout available',
            ]}
          />

          <EdgeCaseCard
            title="Creator Tries to Publish Before Soft Cap"
            scenario='Creator clicks "Publish to Market" when raised = 8,000 / 10,000'
            handling={[
              'Button is disabled (opacity 50%, cursor not-allowed)',
              'Tooltip shows: "Soft cap not reached (80%). Need 100%"',
              'UI shows: "Raised 8,000 / 10,000 USDX"',
              'Progress bar shows 80% visually',
              'If timer expires in this state → PRESALE_FAILED automatically',
            ]}
          />

          <EdgeCaseCard
            title="Multiple Investors Claim Refund Simultaneously"
            scenario="PRESALE_FAILED state, 10 investors all click Claim Refund at same time"
            handling={[
              'Smart contract handles queue (FIFO or parallel based on gas)',
              'Each participant refundClaimed updates independently',
              'UI shows loading state on button: "Claiming..." spinner',
              'After success: Button → "Refunded ✓" (disabled)',
              'Participants list updates in real-time as claims process',
              'No race condition - each user\'s refund is isolated',
            ]}
          />

          <EdgeCaseCard
            title="Market INVALID Resolution"
            scenario="Outcome cannot be determined objectively (ambiguous criteria)"
            handling={[
              'resolutionOutcome = \'INVALID\'',
              'ALL participants (YES and NO holders) get proportional refunds',
              'Creator stake returned but NO trading fees earned',
              'UI shows orange "Invalid Resolution" badge',
              'Explanation shown: "Market criteria was ambiguous"',
              'All users see "Claim Refund" button (not "Claim Payout")',
            ]}
          />

          <EdgeCaseCard
            title="User Navigates Away During Vesting"
            scenario="User has 600/1000 shares locked, closes browser for 20 hours"
            handling={[
              'Vesting continues server-side (time-based, not UI-based)',
              'When user returns: Component recalculates unlocked shares',
              'useEffect updates based on vestingStartTime + current time',
              'Shows updated progress: e.g., 950/1000 unlocked',
              'Next unlock countdown may show "< 1 hour" or "Fully unlocked"',
              'No lost progress - all time-based on blockchain timestamps',
            ]}
          />

          <EdgeCaseCard
            title="Creator Has No Investors at Presale End"
            scenario="Timer expires, raised = 0 USDX, no participants joined"
            handling={[
              'State → PRESALE_FAILED',
              'Creator gets 10K XEF stake back',
              'No refunds to process (no investors)',
              'Participants list empty or shows creator only',
              'UI message: "No investors joined this presale"',
              'Market cannot be republished or restarted',
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function DataModelSection() {
  return (
    <section style={{ marginBottom: 'var(--gap--4rem)' }}>
      <h2 style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--1-5rem)',
        color: 'var(--card-foreground)',
      }}>
        Data Model Reference
      </h2>

      <div style={{
        backgroundColor: 'var(--card-normal)',
        border: '1px solid var(--black-a2)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--gap--2rem)',
      }}>
        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          PresaleState Type
        </h3>
        <pre style={{
          backgroundColor: 'var(--lum-01)',
          padding: 'var(--gap--1rem)',
          borderRadius: 'var(--border-radius--0-5rem)',
          fontSize: 'var(--text-sm)',
          color: 'var(--card-foreground)',
          overflow: 'auto',
          fontFamily: 'monospace',
          marginBottom: 'var(--gap--2rem)',
        }}>
{`export type PresaleState = 
  | 'PRESALE_ACTIVE'     // Market open for funding
  | 'PRESALE_FAILED'     // Timer expired, soft cap not reached
  | 'MARKET_LIVE'        // Soft cap reached, AMM trading active
  | 'MARKET_RESOLVED';   // Event occurred, outcome finalized`}
        </pre>

        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          VestingSchedule Interface
        </h3>
        <pre style={{
          backgroundColor: 'var(--lum-01)',
          padding: 'var(--gap--1rem)',
          borderRadius: 'var(--border-radius--0-5rem)',
          fontSize: 'var(--text-sm)',
          color: 'var(--card-foreground)',
          overflow: 'auto',
          fontFamily: 'monospace',
          marginBottom: 'var(--gap--2rem)',
        }}>
{`export interface VestingSchedule {
  totalShares: number;
  unlockedShares: number;
  lockedShares: number;
  vestingDurationHours: number; // 24 hours
  vestingStartTime?: Date;
  nextUnlockTime?: Date;
  unlockPercentPerHour: number; // 4.17% per hour
}`}
        </pre>

        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          CreatorStake Interface
        </h3>
        <pre style={{
          backgroundColor: 'var(--lum-01)',
          padding: 'var(--gap--1rem)',
          borderRadius: 'var(--border-radius--0-5rem)',
          fontSize: 'var(--text-sm)',
          color: 'var(--card-foreground)',
          overflow: 'auto',
          fontFamily: 'monospace',
          marginBottom: 'var(--gap--2rem)',
        }}>
{`export interface CreatorStake {
  amount: number; // 10,000 XEF
  isLocked: boolean;
  tradingFeesAccumulated: number; // Updates during MARKET_LIVE
  tradingFeePercentage: number; // 2% of all trades
}`}
        </pre>

        <h3 style={{
          fontSize: 'var(--text-lg)',
          fontWeight: 'var(--font-weight-semi-bold)',
          marginBottom: 'var(--gap--1rem)',
          color: 'var(--card-foreground)',
        }}>
          Key Field Mappings by State
        </h3>
        <div style={{
          backgroundColor: 'var(--lum-01)',
          borderRadius: 'var(--border-radius--0-5rem)',
          overflow: 'hidden',
        }}>
          <table style={{
            width: '100%',
            fontSize: 'var(--text-sm)',
            color: 'var(--card-foreground)',
            borderCollapse: 'collapse',
          }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--lum-02)' }}>
                <th style={{ padding: 'var(--gap--0-75rem)', textAlign: 'left', borderBottom: '1px solid var(--black-a2)' }}>Field</th>
                <th style={{ padding: 'var(--gap--0-75rem)', textAlign: 'left', borderBottom: '1px solid var(--black-a2)' }}>PRESALE_ACTIVE</th>
                <th style={{ padding: 'var(--gap--0-75rem)', textAlign: 'left', borderBottom: '1px solid var(--black-a2)' }}>PRESALE_FAILED</th>
                <th style={{ padding: 'var(--gap--0-75rem)', textAlign: 'left', borderBottom: '1px solid var(--black-a2)' }}>MARKET_LIVE</th>
                <th style={{ padding: 'var(--gap--0-75rem)', textAlign: 'left', borderBottom: '1px solid var(--black-a2)' }}>MARKET_RESOLVED</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>raisedAmount</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>Updates as investors join</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>Final amount (frozen)</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>Final presale amount</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>Final presale amount</td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>vestingSchedule</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>undefined</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>undefined</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>Active (if investor)</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>All unlocked</td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>ammInitialPrice</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>undefined</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>undefined</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>{'{'}yes: 0.50, no: 0.50{'}'}</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>{'{'}yes: 0.50, no: 0.50{'}'}</td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>currentPrice</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>undefined</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>undefined</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>Live AMM prices</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>Final: winner=$1, loser=$0</td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>resolutionOutcome</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>null</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>null</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>null</td>
                <td style={{ padding: 'var(--gap--0-75rem)', borderBottom: '1px solid var(--black-a1)' }}>'YES' | 'NO' | 'INVALID'</td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--gap--0-75rem)' }}>refundStatus</td>
                <td style={{ padding: 'var(--gap--0-75rem)' }}>undefined</td>
                <td style={{ padding: 'var(--gap--0-75rem)' }}>'refunded' | 'pending'</td>
                <td style={{ padding: 'var(--gap--0-75rem)' }}>undefined</td>
                <td style={{ padding: 'var(--gap--0-75rem)' }}>undefined (unless INVALID)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Helper Components

function RoleCard({ role, items }: { role: string; items: string[] }) {
  return (
    <div style={{
      backgroundColor: 'var(--card-hover)',
      border: '1px solid var(--black-a2)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--gap--1-5rem)',
    }}>
      <h4 style={{
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--0-75rem)',
        color: 'var(--card-foreground)',
      }}>
        👤 {role}
      </h4>
      <ul style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--muted-foreground)',
        paddingLeft: 'var(--gap--1-5rem)',
        margin: 0,
        lineHeight: '1.8',
      }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function OutcomeCard({ outcome, color, bgColor, description }: { outcome: string; color: string; bgColor: string; description: string }) {
  return (
    <div style={{
      backgroundColor: bgColor,
      border: `2px solid ${color}`,
      borderRadius: 'var(--radius-card)',
      padding: 'var(--gap--1-5rem)',
    }}>
      <div style={{
        fontSize: 'var(--text-lg)',
        fontWeight: 'var(--font-weight-semi-bold)',
        color: color,
        marginBottom: 'var(--gap--0-5rem)',
      }}>
        {outcome}
      </div>
      <p style={{
        fontSize: 'var(--text-sm)',
        color: color,
        margin: 0,
        lineHeight: '1.5',
      }}>
        {description}
      </p>
    </div>
  );
}

function ComponentTable({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 style={{
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--0-75rem)',
        color: 'var(--card-foreground)',
      }}>
        {title}
      </h4>
      <ul style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--muted-foreground)',
        paddingLeft: 'var(--gap--1-5rem)',
        margin: 0,
        lineHeight: '1.8',
      }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function EdgeCaseCard({ title, scenario, handling }: { title: string; scenario: string; handling: string[] }) {
  return (
    <div style={{
      backgroundColor: 'var(--card-hover)',
      border: '1px solid var(--black-a2)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--gap--1-5rem)',
    }}>
      <h4 style={{
        fontSize: 'var(--text-base)',
        fontWeight: 'var(--font-weight-semi-bold)',
        marginBottom: 'var(--gap--0-5rem)',
        color: 'var(--card-foreground)',
      }}>
        {title}
      </h4>
      <p style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--muted-foreground)',
        fontStyle: 'italic',
        marginBottom: 'var(--gap--0-75rem)',
        lineHeight: '1.5',
      }}>
        {scenario}
      </p>
      <div style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--card-foreground)',
        fontWeight: 'var(--font-weight-medium)',
        marginBottom: 'var(--gap--0-5rem)',
      }}>
        Handling:
      </div>
      <ul style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--muted-foreground)',
        paddingLeft: 'var(--gap--1-5rem)',
        margin: 0,
        lineHeight: '1.8',
      }}>
        {handling.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
