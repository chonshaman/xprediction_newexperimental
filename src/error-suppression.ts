// Global error handler to suppress known Rive WebGL cleanup errors
// This prevents the application from crashing due to a known bug in @rive-app/webgl

// Store the original console.error
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

// Override console.warn to filter out React internal warnings
console.warn = (...args: any[]) => {
  const message = args[0]?.toString() || '';
  if (message.includes('Expected static flag was missing')) {
    return;
  }
  originalConsoleWarn.apply(console, args);
};

// Override console.error to filter out Rive WebGL errors
console.error = (...args: any[]) => {
  const errorMessage = args[0]?.toString() || '';
  
  // Suppress known Rive WebGL cleanup errors
  if (
    errorMessage.includes('delete is not a function') ||
    errorMessage.includes('deleteRiveRenderer') ||
    errorMessage.includes('webgl.mjs') ||
    errorMessage.includes('Expected static flag was missing') ||
    errorMessage.includes('Internal React error: Expected static flag')
  ) {
    // Silently ignore these errors
    return;
  }
  
  // Call original console.error for all other errors
  originalConsoleError.apply(console, args);
};

// Global error event handler
if (typeof window !== 'undefined') {
  const originalErrorHandler = window.onerror;
  
  window.onerror = (message, source, lineno, colno, error) => {
    const errorMessage = message?.toString() || '';
    
    // Suppress Rive WebGL errors
    if (
      errorMessage.includes('delete is not a function') ||
      (error && error.stack && error.stack.includes('deleteRiveRenderer'))
    ) {
      return true; // Prevent default error handling
    }
    
    // Call original handler for other errors
    if (originalErrorHandler) {
      return originalErrorHandler(message, source, lineno, colno, error);
    }
    
    return false;
  };

  // Handle unhandled promise rejections
  const originalUnhandledRejection = window.onunhandledrejection;
  
  window.onunhandledrejection = (event) => {
    const errorMessage = event.reason?.toString() || '';
    
    if (
      errorMessage.includes('delete is not a function') ||
      errorMessage.includes('deleteRiveRenderer')
    ) {
      event.preventDefault();
      return;
    }
    
    if (originalUnhandledRejection) {
      originalUnhandledRejection.call(window, event);
    }
  };
}

export {};