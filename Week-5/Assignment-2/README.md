# Week 5 - Assignment 2

[Welcome to Pesto assignment - 2 from the Week 5](https://pestotech.teachable.com/courses/1782350/lectures/40231574)

Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

## Guidelines:
1. JS function should have Map API implemented.
2. Map's set functionality should have been used.
3. Bonus - if space and time complexity is taken care.
4. Reference:

```
function isVowel(char) {
    return "aeiou".includes(char);
}
function vowelCount(str) {
    const vowelMap = new Map();
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase()
        if (isVowel(lowerCaseChar)) {
            if (vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}
```

## Outcome:
1. Understanding of Map API and its functionalities.
