import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";
import { motion } from "motion/react";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "text-primary-foreground hover:opacity-80 font-semibold text-sm hover:-translate-y-0.5",
        primary: "font-semibold text-sm",
        destructive:
          "text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 hover:opacity-80 font-semibold text-sm hover:-translate-y-0.5",
        outline:
          "border text-foreground hover:bg-accent/50 hover:text-accent-foreground dark:border-input dark:hover:bg-input/50 font-semibold text-sm hover:-translate-y-0.5",
        secondary:
          "text-secondary-foreground hover:opacity-80 font-semibold text-sm hover:-translate-y-0.5",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 font-semibold text-sm",
        link: "text-primary underline-offset-4 hover:underline font-semibold text-sm",
      },
      size: {
        xs: "h-9 px-[var(--gap--0-875rem)]",
        sm: "h-10 px-[var(--gap--1rem)]",
        default: "h-12 px-[var(--gap--1-5rem)]",
        lg: "h-14 px-[var(--gap--2rem)]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant, size, asChild = false, style, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const [isHovered, setIsHovered] = React.useState(false);

  // Apply CSS variable backgrounds based on variant
  const variantStyles = React.useMemo(() => {
    if (variant === "primary") {
      // Match PrimaryButton styling exactly
      const bgColor = !props.disabled && isHovered 
        ? "var(--primary-button-bg-hover)" 
        : "var(--primary-button-bg)";
      
      return {
        background: bgColor,
        borderRadius: "var(--radius-button)",
        color: "var(--side-bar-hold-white)",
        fontWeight: "var(--font-weight-semi-bold)",
        fontSize: size === "xs" ? "var(--text-sm)" : 
                  size === "sm" ? "var(--text-sm)" : 
                  size === "lg" ? "var(--text-lg)" : "var(--text-base)",
        cursor: props.disabled ? "not-allowed" : "pointer",
        ...style,
      };
    }
    if (variant === "outline") {
      // Match design system outline button styling exactly
      const bgGradient = !props.disabled && isHovered
        ? "radial-gradient(60% 60% at 50% 130%, var(--lum-05) 0%, var(--white-a1) 100%), var(--lum-03)"
        : "radial-gradient(60% 60% at 50% 130%, var(--lum-04) 0%, var(--white-a1) 100%), var(--lum-02)";
      
      const boxShadowValue = !props.disabled && isHovered
        ? "var(--shadow-2)"
        : "var(--shadow-1)";
      
      return {
        background: bgGradient,
        border: "1px solid var(--black-a2)",
        borderRadius: "var(--radius-button)",
        color: "var(--card-foreground)",
        fontWeight: "var(--font-weight-semi-bold)",
        fontSize: size === "xs" ? "var(--text-sm)" : 
                  size === "sm" ? "var(--text-sm)" : 
                  size === "lg" ? "var(--text-base)" : "var(--text-sm)",
        boxShadow: boxShadowValue,
        transition: "all 200ms ease-out",
        cursor: props.disabled ? "not-allowed" : "pointer",
        ...style,
      };
    }
    if (variant === "secondary") {
      // Match exact secondary button styling with radial gradient
      const bgGradient = !props.disabled && isHovered
        ? "radial-gradient(60% 60% at 50% 130%, var(--lum-05) 0%, var(--white-a1) 100%), var(--lum-03)"
        : "radial-gradient(46% 50% at 50% 100%, var(--lum-05, rgba(167, 187, 194, 0.30)) 0%, var(--white-a1, rgba(255, 255, 255, 0.02)) 100%), var(--lum-04, #EBF2F5)";
      
      const borderValue = !props.disabled && isHovered
        ? "1px solid var(--black-a2)"
        : "1px solid var(--border)";
      
      const boxShadowValue = !props.disabled && isHovered
        ? "var(--shadow-2)"
        : "var(--shadow-1)";
      
      return {
        background: bgGradient,
        border: borderValue,
        borderRadius: "0.5rem",
        boxShadow: boxShadowValue,
        color: "var(--card-foreground)",
        fontWeight: "var(--font-weight-semi-bold)",
        fontSize: size === "xs" ? "var(--text-sm)" : 
                  size === "sm" ? "var(--text-sm)" : 
                  size === "lg" ? "var(--text-base)" : "var(--text-sm)",
        transition: "all 200ms ease-out",
        cursor: props.disabled ? "not-allowed" : "pointer",
        ...style,
      };
    }
    if (variant === "default") {
      return {
        background: "var(--primary)",
        borderRadius: "var(--radius-button)",
        ...style,
      };
    }
    if (variant === "destructive") {
      return {
        background: "var(--destructive)",
        borderRadius: "var(--radius-button)",
        ...style,
      };
    }
    return {
      borderRadius: "var(--radius-button)",
      ...style,
    };
  }, [variant, style, isHovered, props.disabled, size]);

  // For primary variant, use motion for PrimaryButton-style animations
  if (variant === "primary" && !asChild) {
    const MotionButton = motion.button;
    return (
      <MotionButton
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        style={variantStyles}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={!props.disabled ? {
          y: -2,
          boxShadow: '0 8px 24px rgba(91, 91, 214, 0.35), 0 4px 12px rgba(91, 91, 214, 0.25), 0 2px 6px rgba(0, 0, 0, 0.1)',
        } : undefined}
        whileTap={!props.disabled ? {
          y: 0,
          scale: 0.95,
          boxShadow: '0 4px 12px rgba(91, 91, 214, 0.25), 0 2px 6px rgba(91, 91, 214, 0.15)',
        } : undefined}
        transition={{ 
          duration: 0.2,
          ease: 'easeOut'
        }}
        {...props}
      />
    );
  }

  // For outline variant, use motion for hover animations
  if (variant === "outline" && !asChild) {
    const MotionButton = motion.button;
    return (
      <MotionButton
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        style={variantStyles}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={!props.disabled ? {
          y: -2,
        } : undefined}
        whileTap={!props.disabled ? {
          y: 0,
          scale: 0.95,
        } : undefined}
        transition={{ 
          duration: 0.2,
          ease: 'easeOut'
        }}
        {...props}
      />
    );
  }

  // For secondary variant, use motion for subtle hover animations
  if (variant === "secondary" && !asChild) {
    const MotionButton = motion.button;
    return (
      <MotionButton
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        style={variantStyles}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={!props.disabled ? {
          y: -2,
        } : undefined}
        whileTap={!props.disabled ? {
          y: 0,
          scale: 0.95,
        } : undefined}
        transition={{ 
          duration: 0.2,
          ease: 'easeOut'
        }}
        {...props}
      />
    );
  }

  // For all other variants (default, destructive, ghost, link), add scale animation
  if (!asChild && (variant === "default" || variant === "destructive" || variant === "ghost" || variant === "link")) {
    const MotionButton = motion.button;
    return (
      <MotionButton
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        style={variantStyles}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={!props.disabled ? {
          y: -2,
        } : undefined}
        whileTap={!props.disabled ? {
          y: 0,
          scale: 0.95,
        } : undefined}
        transition={{ 
          duration: 0.2,
          ease: 'easeOut'
        }}
        {...props}
      />
    );
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={variantStyles}
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };