export function getTextColor(bgColor: string): string {
  if (!bgColor) return '#FFFFFF';
  
  // Remove # if present
  const hex = bgColor.replace('#', '');
  
  // Handle shorthand hex
  const fullHex = hex.length === 3 
    ? hex.split('').map(char => char + char).join('') 
    : hex;
  
  // Convert to RGB
  const r = parseInt(fullHex.substr(0, 2), 16);
  const g = parseInt(fullHex.substr(2, 2), 16);
  const b = parseInt(fullHex.substr(4, 2), 16);
  
  // Calculate relative luminance
  // Using perceived brightness formula
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return dark text for light backgrounds, light text for dark backgrounds
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}