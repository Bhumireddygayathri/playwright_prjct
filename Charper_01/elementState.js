/**
 * Validates element state and returns action for QA engineers.
 */
function validateElementState(isPresent, isDisplayed, isEnabled) {
  // Determine state
  const state = !isPresent 
    ? 'NOT FOUND' 
    : !isDisplayed 
    ? 'HIDDEN' 
    : !isEnabled 
    ? 'DISABLED' 
    : 'READY';

  // Determine severity using ternary operators
  const severity = (state === 'NOT FOUND') 
    ? 'CRITICAL' 
    : (state === 'HIDDEN' || state === 'DISABLED') 
    ? 'WARNING' 
    : 'OK';

  // Determine action
  let action = '';
  switch (state) {
    case 'READY': action = 'Proceed with action.'; break;
    case 'DISABLED': action = 'Wait for element to be enabled.'; break;
    case 'HIDDEN': action = 'Scroll into view or wait for visibility.'; break;
    case 'NOT FOUND': action = 'Check locator or wait for DOM presence.'; break;
  }

  return { state, severity, action };
}

// Example Usage (Mocking Playwright/Cypress states)
console.log(validateElementState(true, true, true));   // { state: 'READY', severity: 'OK', action: 'Proceed...' }
console.log(validateElementState(true, true, false));  // { state: 'DISABLED', severity: 'WARNING', action: 'Wait...' }
console.log(validateElementState(true, false, false)); // { state: 'HIDDEN', severity: 'WARNING', action: 'Scroll...' }
console.log(validateElementState(false, false, false));// { state: 'NOT FOUND', severity: 'CRITICAL', action: 'Check...' }
