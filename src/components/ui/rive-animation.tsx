import { useRive } from '@rive-app/react-canvas';
import { cn } from './utils';
import { useEffect, useRef } from 'react';

interface RiveAnimationProps {
  src: string;
  artboard?: string;
  animations?: string | string[];
  stateMachines?: string | string[];
  autoplay?: boolean;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  trackMouse?: boolean;
}

export function RiveAnimation({
  src,
  artboard,
  animations,
  stateMachines,
  autoplay = true,
  className,
  onLoad,
  onError,
  trackMouse = false,
}: RiveAnimationProps) {
  const cleanupAttemptedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { RiveComponent, rive, canvas } = useRive({
    src,
    artboard,
    animations,
    stateMachines,
    autoplay,
    shouldDisableRiveListeners: false, // Keep default listeners enabled
    onLoad: () => {
      console.log('Rive loaded successfully');
      if (onLoad) onLoad();
    },
    onLoadError: () => {
      console.error('Rive load failed');
      if (onError) onError();
    },
  });

  // Debug and inspect Rive instance
  useEffect(() => {
    if (!rive) return;

    console.log('=== RIVE FILE DISCOVERY ===');
    console.log('Rive loaded:', !!rive);
    
    // List all available properties and methods
    try {
      const riveObj = rive as any;
      
      // Try to get state machine names
      if (riveObj.stateMachineNames) {
        console.log('🎮 Available state machines:', riveObj.stateMachineNames);
      }
      
      // Deep dive into artboards and their state machines
      if (riveObj.contents?.artboards) {
        console.log('📋 Artboards:');
        riveObj.contents.artboards.forEach((artboard: any, index: number) => {
          console.log(`  ${index}: ${artboard.name}`);
          if (artboard.stateMachines && artboard.stateMachines.length > 0) {
            console.log(`    State Machines (${artboard.stateMachines.length}):`);
            artboard.stateMachines.forEach((sm: any, smIndex: number) => {
              console.log(`      ${smIndex}: ${sm.name || '(unnamed)'}`);
              if (sm.inputs) {
                console.log(`        Inputs (${sm.inputs.length}):`);
                sm.inputs.forEach((input: any) => {
                  console.log(`          - ${input.name} (${input.type})`);
                });
              } else {
                console.log(`        No inputs array found`);
              }
            });
          }
        });
      }
      
    } catch (error) {
      console.error('Error discovering Rive contents:', error);
    }
    
    console.log('Requested state machine:', stateMachines);
    
    // Check for state machine inputs using the API
    if (stateMachines && trackMouse) {
      try {
        const inputs = rive.stateMachineInputs(stateMachines as string);
        console.log(`\nInputs via API for "${stateMachines}":`, inputs?.length || 0);
        if (inputs && inputs.length > 0) {
          const inputDetails = inputs.map((input: any) => ({
            name: input.name,
            type: input.type,
            value: input.value
          }));
          console.log('Input details:', inputDetails);
        }
      } catch (error) {
        console.error('Error getting state machine inputs:', error);
      }
    }
    console.log('===========================');
  }, [rive, stateMachines, trackMouse]);

  // Mouse tracking effect using Rive's joystick inputs
  useEffect(() => {
    if (!trackMouse || !rive || !containerRef.current) {
      console.log('Mouse tracking not initialized:', { trackMouse, rive: !!rive, container: !!containerRef.current });
      return;
    }

    console.log('Setting up global mouse tracking...');
    
    // Get inputs once and store them
    let joyFollowInput: any = null;
    let joyOrbitInput: any = null;
    
    if (stateMachines) {
      try {
        const inputs = rive.stateMachineInputs(stateMachines as string);
        console.log('Getting inputs from state machine...');
        console.log('Total inputs:', inputs?.length || 0);
        
        if (inputs && inputs.length > 0) {
          // Log all input details
          const inputNames = inputs.map((i: any) => i.name);
          console.log('All input names:', inputNames);
          console.log('Actual input names (stringified):', JSON.stringify(inputNames));
          
          // Log each input's full details
          inputs.forEach((input: any, idx: number) => {
            console.log(`Input ${idx}:`, {
              name: input.name,
              type: input.type,
              value: input.value
            });
          });
          
          // Find inputs - try exact match first, then case-insensitive
          joyFollowInput = inputs.find((input: any) => input.name === 'joy-follow');
          joyOrbitInput = inputs.find((input: any) => input.name === 'joy-orbit');
          
          if (!joyFollowInput) {
            // Try case-insensitive
            joyFollowInput = inputs.find((input: any) => input.name.toLowerCase() === 'joy-follow');
          }
          if (!joyOrbitInput) {
            // Try case-insensitive
            joyOrbitInput = inputs.find((input: any) => input.name.toLowerCase() === 'joy-orbit');
          }
          
          console.log('joy-follow input found:', !!joyFollowInput, joyFollowInput?.name);
          console.log('joy-orbit input found:', !!joyOrbitInput, joyOrbitInput?.name);
        } else {
          console.error(`❌ No inputs available in state machine "${stateMachines}"`);
        }
      } catch (error) {
        console.error('Error getting state machine inputs:', error);
      }
    }

    let eventCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const canvasElement = containerRef.current.querySelector('canvas');
      if (!canvasElement) return;

      const rect = canvasElement.getBoundingClientRect();
      
      // Calculate position relative to canvas center
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Try different ranges - start with -100 to 100
      const normalizedX = ((e.clientX - centerX) / (rect.width / 2)) * 100;
      const normalizedY = ((e.clientY - centerY) / (rect.height / 2)) * 100;

      // Log every 60 frames
      if (eventCount % 60 === 0) {
        console.log('Mouse move:', { 
          mouseX: e.clientX, 
          mouseY: e.clientY, 
          normalizedX: normalizedX.toFixed(2), 
          normalizedY: normalizedY.toFixed(2) 
        });
      }
      eventCount++;

      try {
        if (joyFollowInput) {
          joyFollowInput.value = normalizedX;
          if (eventCount % 60 === 0) {
            console.log('✓ Set joy-follow to:', normalizedX.toFixed(2));
          }
        }
        
        if (joyOrbitInput) {
          joyOrbitInput.value = normalizedY;
          if (eventCount % 60 === 0) {
            console.log('✓ Set joy-orbit to:', normalizedY.toFixed(2));
          }
        }
      } catch (error) {
        console.error('Error setting joystick inputs:', error);
      }
    };

    // Listen to mouse movement globally
    window.addEventListener('mousemove', handleMouseMove);
    console.log('Global mousemove listener attached');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      console.log('Global mousemove listener removed');
    };
  }, [rive, trackMouse, stateMachines]);

  useEffect(() => {
    return () => {
      // Only attempt cleanup once to avoid duplicate errors
      if (cleanupAttemptedRef.current) return;
      cleanupAttemptedRef.current = true;
      
      if (rive) {
        try {
          // Try to cleanup, but suppress any errors
          if (typeof rive.cleanup === 'function') {
            rive.cleanup();
          }
        } catch (error) {
          // Suppress cleanup errors silently
        }
      }
    };
  }, [rive]);

  return (
    <div ref={containerRef} className={cn("w-full h-full min-h-[200px]", className)}>
      <RiveComponent className="w-full h-full" />
    </div>
  );
}