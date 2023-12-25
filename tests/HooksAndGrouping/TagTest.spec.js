import {test, expect} from '@playwright/test';


test('Test 1@sanity', async () => {
    console.log("Test 1 runs: @sanity")
});

test('Test 2@sanity', async () => {
    console.log("Test 2 runs: @sanity")
});

test('Test 3@reg', async () => {
    console.log("Test 3 runs: @reg")
});

test('Test 4@reg', async () => {
    console.log("Test 4 runs: @reg")
});

test('Test 5@sanity@reg', async () => {
    console.log("Test 5 runs: @sanity and @reg")
});


// npx playwright test TagTest.spec.js --project=chromium --grep "@reg"
// npx playwright test TagTest.spec.js --project=chromium --grep "@sanity"
//npx playwright test TagTest.spec.js --project=chromium --grep "@sanity@reg"
//npx playwright test TagTest.spec.js --project=chromium --grep "@sanity" --grep-invert "@reg"
//npx playwright test TagTest.spec.js --project=chromium --grep "@reg" --grep-invert "@sanity"    



