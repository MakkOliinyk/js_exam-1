# JS exam #1

You are given 105m to solve the tasks in [./src](./src) folder. Each task 
contains files with description and tests. The goal is to solve all tasks in 
time. Make sure you are blocked for `git push` until your solutions pass all 
tests.

To push unfinished solution add option `--no-verify` to the push command. <br>
 `git push origin <branch_name> --no-verify`.
 
Each task can be rated at `0`, `1` or `2` points.

* `0` - wrong solution or without solution;
* `1` - solution works (tests passed) but code is not clean. It can be a lot of 
unneeded or wrong methods in the code (e.g. using `map` or `filter` instead of 
`forEach` to iterate over array).
* `2` - solution works (tests passed) and code is clean.

---
 
1. [Younger in front](./src/youngerInFront/youngerInFront.js). 

    Implement function which takes a natural number `N` and returns an array 
    with its digits in order from youngest to oldest. `Youngest` means the last 
    digit in number and `oldest` means the first one.
    
    e.g. for `N = 46156` it should return `[6, 5, 1, 6, 4]`. Make sure all items 
    in returned arrays are numbers. `['6', '5', '1', '6', '4']` is wrong answer.
    
2. [Count occurrences](./src/countOccurrences/countOccurrences.js)

    Implement function which takes two params (`str`, `substr`) and returns the
    number of times the `subst` appears in `str`. 
    
    e.g. for `str = 'azyxxzyzy'`, `substr = 'zy'` it should return `3`, because
    `'zy'` appears 3 times: `'a[zy]xx[zy][zy]'`.
    
    `str` and `substr` contains only lowercase alphabetical letters. `substr` 
    doesn't contain repeating letters (`substr` can't be equal `xyx`)
    
3.  [Storage](./src/storage/storage.js)

    Implement a storage which works with next pattern:
    
    ```javascript
    const store = storage();
    store.setValue('name', 'Peter');
    store.setValue('age', 30); 
    store.getValue('name'); // Peter 
    store.getValue('age'); // 30 
    store.setValue('age', 31); 
    store.getValue('age'); // 31 
    store.getValue('occupation'); // undefined
    ```

**Read the guideline before start**

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)
