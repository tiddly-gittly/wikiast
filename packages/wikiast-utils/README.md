# wikiast-utils

Wikiast packages shared utils functions

## Lodash

When importing a lodash function, like `import pick from "pick/lodash"`, it will require tons of helper functions to deal with edge cases. But we don't need that detailed edge cases.

So we replace all used lodash function with our own version in [src/lodash](src/lodash/).

## Udecode/Plate

Same as lodash but worser, when importing helper function from plate, it will require tons of dependencies, even including react + react-dom!

So we replace them with [src/plate](src/plate/), which might not be precise, but smaller and faster and passed the test.
