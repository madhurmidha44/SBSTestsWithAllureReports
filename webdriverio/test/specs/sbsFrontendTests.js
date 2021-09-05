//creating objects of pages to utilise their methods. Page object model is achieved here
const allureCommandline = require('allure-commandline');
const sbsHindiNewsPageObj = require('../frontendPageObjects/sbsHindiNewsPage');
const frontendTestDataObj = require('../testData/frontendTestData');
const allureReporter = require('@wdio/allure-reporter').default;

describe("SBS front end automation tests", () => {
    it("Automate the audio player", () => {
        sbsHindiNewsPageObj.openFinancialSupportScreen(frontendTestDataObj.sbsHindiFinancialUrl);
        sbsHindiNewsPageObj.waitForTitleOfAudioTrack();
        sbsHindiNewsPageObj.validateTitleOfAudioTrack(frontendTestDataObj.titleOfAudioTrack);
        sbsHindiNewsPageObj.clickSubscribeDrodown();
        sbsHindiNewsPageObj.validateApplePodcastIsDisplayedOnClickingSubscribeDrdwn();
        sbsHindiNewsPageObj.validateGooglePodcastIsDisplayedOnClickingSubscribeDrdwn();
        sbsHindiNewsPageObj.clickAudioIcon();
        sbsHindiNewsPageObj.waitForAudioPlayerPauseIcon();
        sbsHindiNewsPageObj.validateAudioPlayerPauseIconIsPresent();
        sbsHindiNewsPageObj.validateMuteUnmuteIconIsPresent();
        sbsHindiNewsPageObj.waitUntilAudioIsStarted();/*Here audio is run for 1 sec since wait checks 
        that 1 sec is completed for the video, otherwise mute etc controls are not interactable*/
        let initialTotalTimeOfAudio=sbsHindiNewsPageObj.getTotalTimeOfAudio();
        sbsHindiNewsPageObj.muteAudioForSpecifiedMillisecAndThenUnmute(2000);//Audio here runs for 2 more secs
        sbsHindiNewsPageObj.validateAudioHasAlreadyRunForSpecifiedTime("00:03");//Audio till here has already run for min 3 secs
        sbsHindiNewsPageObj.pauseRunningAudioForSpecifiedMillisec(3000);
        sbsHindiNewsPageObj.resumePausedAudio();
        sbsHindiNewsPageObj.validateAudioHasAlreadyRunForSpecifiedTime("00:03");//Audio till here has already run for min 3 secs even before pausing
        sbsHindiNewsPageObj.validateAudioCompletionIsLessThanTheSpecifiedTime("00:05");/*Audio till here has run
        for max 4 secs including Webdriverio processing time for the operations*/
        sbsHindiNewsPageObj.click20SecFwdIcon();//Audio here runs for 20 more secs
        sbsHindiNewsPageObj.validateAudioHasAlreadyRunForSpecifiedTime("00:23");//Audio till here has already run for min 23 secs
        sbsHindiNewsPageObj.validateAudioCompletionIsLessThanTheSpecifiedTime("00:26");/*Audio till here has 
        run for max 25 secs including Webdriverio processing time for the operations*/
        let laterTotalTimeOfAudio=sbsHindiNewsPageObj.getTotalTimeOfAudio();
        allureReporter.addStep("Validating total time of audio remains the same while audio is running");
        const assert = require('assert');
        assert.ok(initialTotalTimeOfAudio===laterTotalTimeOfAudio);//Validating total time of audio remains the same while audio is running
        sbsHindiNewsPageObj.clickLanguageToggleLink();
        sbsHindiNewsPageObj.validateViewableLanguageListIsPresent();
    })
}); 

