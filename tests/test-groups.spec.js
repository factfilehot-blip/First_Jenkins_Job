import {test} from '@playwright/test';

test.describe("", () => {
    test.beforeAll(async () => {
        console.log("Before all test cases executed");
    });
    test.afterAll(async () => {
        console.log("After all test cases executed");
    });
    
    test.beforeEach(async () => {
        console.log("Before each test case executed");
    });

    test.afterEach(async () => {
        console.log("After each test case executed");
    });

    test("Test Case 1 ", async () => {
        console.log("Test case 1 executed");
        
    });

    test("Test Case 2 ", async () => {
        console.log("Test case 2 executed");

        
    });

    test("Test Case 3 ", async () => {

         console.log("Test case 3 executed");


    });


});