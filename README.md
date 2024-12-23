# JavaScript's Loose Typing: Unexpected Addition Behavior with undefined, null, and NaN

This repository demonstrates a common, yet often overlooked, quirk in JavaScript's handling of arithmetic operations involving `undefined`, `null`, and `NaN` values.

The `bug.js` file showcases the unexpected results, highlighting the differences in behavior between these values.  The solution file (`bugSolution.js`) provides strategies for handling these situations and avoiding potential errors.

## Understanding the Issue

JavaScript's loose typing can lead to unexpected behavior when performing arithmetic.  In particular:

* **`undefined`**:  Adding `undefined` to a number results in `NaN` (Not a Number).
* **`null`**: Adding `null` to a number treats `null` as 0.
* **`NaN`**: `NaN` in any arithmetic operation propagates, resulting in `NaN`.

These inconsistencies can be difficult to debug if not anticipated.

## Solution

The `bugSolution.js` file provides several approaches to handle these situations, including:

1. Explicit type checking and default values:
   This approach ensures you're dealing with valid numbers before performing the operation.
2. Using the `isNaN()` function to check for `NaN` values before performing any calculations.