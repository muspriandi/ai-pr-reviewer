# ai-pr-reviewer

A tiny utility library in plain Node.js, used as a demo target for AI-powered pull request review.

The flow: open a PR, an AI reviewer reads the diff, then posts comments on the PR.

## Usage

Requires Node.js 18+. No dependencies.

```sh
npm start
```

## Functions

Defined in `src/utils.js`:

| Function | Description |
|---|---|
| `average(numbers)` | Mean of an array of numbers |
| `capitalize(text)` | Uppercase the first letter of a string |
| `isEven(n)` | Whether a number is even |
| `calculate(expression)` | Evaluate a math expression string |

## Project layout

```
src/utils.js   # utility functions
src/index.js   # demo calls
```
