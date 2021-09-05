//creating object of core library to utilise its methods
const coreLibraryObj = require('../coreLibrary/coreLibrary');

class GetApiPage{

retrieveResponseOfGetApiWithOnlyEndpoint(endpoint)
{
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", endpoint, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log("Response of Get API is: "+ xmlHttp.responseText);
    return xmlHttp.responseText;
}

retrieveAllMp3FilesFromResponseInArray(response)
{
    const searchKeyword = ".mp3";
    let startingIndices=[];//array which will contain starting index of all the '.mp3' texts in the response
    let nameOfMp3FilesSet = new Set();//created to get unique values of files in collection
    let nameOfMp3FilesArray = []; //to get resultant array having all the mp3 files
    let nameOfMp3File="";//variable which will current mp3 file based on indices
    let indexOccurence = response.indexOf(searchKeyword, 0); //provide index of occurence of first .mp3 text in the response
    while(indexOccurence >= 0) //This loop will provide indexes of all occurences of .mp3 text from response in indexOccurence array
    {
    startingIndices.push(indexOccurence);
    indexOccurence = response.indexOf(searchKeyword, indexOccurence + 1); //provide index of occurence of current .mp3 text in the response
    }
    for(let i=0;i<startingIndices.length;i++) //this loop will provide resultant array having all .mp3 files
    {
        let j=startingIndices[i]-1;
        while (response[j]!='/') //retrieve name till '/' char is not reached in the response starting from .mp3 text towards left side of the response
        {
            nameOfMp3File=response[j]+nameOfMp3File; //name of current .mp3 file is retrieved char by char till '/' is not reached from right to left side
            j=j-1;
            if(j==-1)
            {
                console.error("Response received is incorrect. Response received is "+response); //error since name of currentmp3 file does not exist in the response
                break;
            }
        }
        nameOfMp3FilesSet.add(nameOfMp3File+".mp3");//adding current mp3 file in Set collection
        nameOfMp3File="";//making sure once file name is retrieved in set, then reset the nameOfMp3File variable for next iteration 
    }
        nameOfMp3FilesArray = Array.from(nameOfMp3FilesSet);
        if(nameOfMp3FilesArray.length<1) 
        {
            console.error("No Mp3 files retrieved from the response of Get API. Response received is "+response);
        }
    console.log(".mp3 files in response of API are: "+nameOfMp3FilesArray);
    return nameOfMp3FilesArray;
}

validateGivenMp3FileExistsInArrayOfRetrievedFiles(arrayOfRetrievedMp3Files, expectedMp3FilesArray)
{
    console.log("checking expected values in retrieved .mp3 files from the response")
    coreLibraryObj.validateArrayContainsExpectedValuesFromAnotherArray(arrayOfRetrievedMp3Files, expectedMp3FilesArray);
}

}
module.exports = new GetApiPage();