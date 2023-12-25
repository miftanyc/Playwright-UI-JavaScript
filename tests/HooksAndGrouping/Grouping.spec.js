import {test, expect} from '@playwright/test';


test.describe.only('Group 1', async () => {//only or skip can be used to manage groups run

    test('Test 1', async () => {
        console.log("Test 1 runs")
    });

    test('Test 2', async () => {
        console.log("Test 2 runs")
    });

});


test.describe.skip('Group 2', async () => {

    test('Test 3', async () => {
        console.log("Test 3 runs")
    });

    test('Test 4', async () => {
        console.log("Test 4 runs")
    });


});



