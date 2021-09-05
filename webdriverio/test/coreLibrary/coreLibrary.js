const allureReporter = require('@wdio/allure-reporter').default;
class CoreLibrary{
    openBrowser(url)
    {
        browser.url(url); 
        browser.maximizeWindow();      
    }
    validateArrayContainsExpectedValuesFromAnotherArray(array, expectedValuesArray)
    {
    const assert = require('assert');
    for(let i=0;i<expectedValuesArray.length;i++)
        {
            allureReporter.addStep("Checking if "+expectedValuesArray[i]+ " value exists in array "+array);
            assert.ok(array.includes(expectedValuesArray[i]));
        }
    }


}

module.exports = new CoreLibrary();
