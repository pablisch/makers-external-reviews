# Review number 1

## User story

- school reports company produces grade sorting software.
- Input is a string of csv values of test results, e.g. "Green, Green, Amber, Red, Green".
- Software to generate a simple report indicating the number of each grade.

INPUT                               | OUTPUT
"Green, Green, Amber, Red, Green"   | "Green: 3\nAmber: 1\nRed: 1"
"Green"                             | "Green: 1"
"Green, Amber"                      | "Green: 1\nAmber: 1"

- No return is shown for grades with a zero count.
- Displayed results are given in the order green, amber, red.

Exceptions and edge cases:
- The results should be case insensitive.
- An 'invalid grade entry error' will be thrown if any grade is not green, amber or red.
- "No grades entered" will be returned if no grades are entered.
