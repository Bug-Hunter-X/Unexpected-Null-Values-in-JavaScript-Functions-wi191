# Unexpected Null Values in JavaScript Functions

This repository demonstrates a common issue in JavaScript where improper handling of `null` values can lead to unexpected behavior or errors. The `bug.js` file contains a function that adds two numbers but doesn't adequately handle the possibility of `null` inputs.  The `bugSolution.js` provides a corrected version.

**Problem:** The original function, `foo`, doesn't explicitly check for `null` input values.  When one of the inputs is `null`, the addition operation may result in unexpected behavior (NaN), or worse, cause an unhandled exception in more complex scenarios.  The code example illustrates this issue.

**Solution:** The improved version adds a check for `null` values.  If either input is `null`, the function returns `null`, providing a clear and predictable outcome.