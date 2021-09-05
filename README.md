# SBSAutomationTests
1.	Mocha tests are under test->specs->sbsTests.js file
2.	I have created test suite with the name 'sbsTestSuite' having both test cases in package.json file. Test suite can be run with command 'npm run sbsTestSuite'. Both test cases are run in parallel in Chrome. Run config can be changed via wdio.conf.js file
3.	Pages (.js files) of front-end application are created in test->frontendPageObjects folder. Pages of ‘Get API’ are created in test->apiPages folder. Pages have class which contains getter fields (elements) and methods. Methods and fields of pages are called from tests via creating objects of page classes
4.	Install all the packages present in package.json file (Installing node.js is pre-requisite)
5.	Test data for front-end tests is in class that resides in test->TestData->frontendTestData.js file. Test data for API tests is in class that resides in test->TestData->apiTestData.js file. Test data is called from tests via creating objects of test data classes
6.	Front end Audio test not only validates what is there in the PDF but also validates progression of audio at various intervals
7.	I have reported results in Allure HTML report which will be generated in allure-report folder within the project. Screenshot will be provided in the report if test case gets failed. In order to achieve this, I have updated afterTest and onComplete hooks in wdio.conf.js file. make sure that you have correct execution policy to access script.p1 like powershell files may be from Node. If not then run command 'Set-ExecutionPolicy RemoteSigned' after opening Windows Powershell as an administrator



 
 
 
