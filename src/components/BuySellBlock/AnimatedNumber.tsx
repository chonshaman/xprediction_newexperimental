import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';
import { ANIMATION_CONFIG } from './constants';

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
}

export const AnimatedNumber = React.memo<AnimatedNumberProps>(({ value, decimals = 2 }) => {
  const springValue = useSpring(value, ANIMATION_CONFIG.spring);
  const displayValue = useTransform(springValue, (current) => current.toFixed(decimals));

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
});

AnimatedNumber.displayName = 'AnimatedNumber';

export const AnimatedInteger = React.memo<{ value: number }>(({ value }) => {
  const springValue = useSpring(value, ANIMATION_CONFIG.spring);
  const displayValue = useTransform(springValue, (current) => Math.round(current).toString());

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
});

AnimatedInteger.displayName = 'AnimatedInteger';

export const AnimatedDecimal = React.memo<{ value: number }>(({ value }) => {
  const springValue = useSpring(value, ANIMATION_CONFIG.spring);
  const displayValue = useTransform(springValue, (current) => current.toFixed(1));

  useEffect(() => {
    springValue.set(value);
  }, [value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
});

AnimatedDecimal.displayName = 'AnimatedDecimal';
