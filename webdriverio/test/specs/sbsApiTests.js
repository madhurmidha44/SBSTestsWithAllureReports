//creating objects of pages to utilise their methods. Page object model is achieved here
const getApiPageObj = require('../apiPages/getApiPage');
const apiTestDataObj = require('../testData/apiTestData');

describe("SBS back end API automation tests", () => {
    it("Get all .mp3 audio files and validate the response", () => {
        let response=getApiPageObj.retrieveResponseOfGetApiWithOnlyEndpoint(apiTestDataObj.apiEndpoint);
        arrayOfRetrievedMp3Files=getApiPageObj.retrieveAllMp3FilesFromResponseInArray(response);  
        getApiPageObj.validateGivenMp3FileExistsInArrayOfRetrievedFiles(arrayOfRetrievedMp3Files, apiTestDataObj.expectedMp3FilesArray);  
    }) 
});