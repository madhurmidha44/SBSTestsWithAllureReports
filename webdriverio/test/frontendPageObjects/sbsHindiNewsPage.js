//creating object of core library to utilise its methods
const coreLibraryObj = require('../coreLibrary/coreLibrary');
const allureReporter = require('@wdio/allure-reporter').default;

//Page of app containing specific selectors and methods for a specific page

class SbsHindiNewsPage{
    //define selectors using getter methods
    get titleOfAudioTrack () { return $("h1[class='audiotrack__title']") }
    get subscribeDrpdwn () { return $("div[class*='podcast-subscribe__label dropdown']") }
    get applePodcastUnderSubscribe () { return $("//div[contains(@class,'podcast-subscribe dropdown dropdown--open')]/div[@class='dropdown__body']//a[text()='APPLE PODCASTS']") }
    get googlePodcastUnderSubscribe () { return $("//div[contains(@class,'podcast-subscribe dropdown dropdown--open')]/div[@class='dropdown__body']//a[text()='GOOGLE PODCASTS']") }
    get audioIcon () { return $("span[class='audiotrack__icon audiotrack__icon--play-pause']") }
    get muteUnmuteIcon () { return $("button[aria-label='Mute']") }
    get audioPlayerPauseIcon () { return $("span[class='audio-player__icon audio-player__icon--play-pause']") }
    get TwentySecFwdIcon () { return $("span[class='audio-player__icon icon icon--step-forward-20']") }
    get elapsedTimeOfAudio () { return $("span[class='audio-player__time audio-player__time--elapsed']") }
    get languageToggleLink () { return $("a[data-type='toggle-language']") }
    get viewableLanguageList () { return $("//a[@data-type='toggle-language']/following-sibling::div[@class='dropdown__body']//div[@class='language-toggle__body']/ul/li") }//language list is viewable only when class is dropdown__body, otheriwse it is hidden
    get totalTimeOfAudio () { return $("span[class='audio-player__time audio-player__time--duration']") }
    
    //methods to encapsule automation code to interact with the page
    openFinancialSupportScreen(sbsHindiFinancialUrl) {
        allureReporter.addStep("Open SBS Hindi Financial URL: "+sbsHindiFinancialUrl)
        coreLibraryObj.openBrowser(sbsHindiFinancialUrl);
    }

    waitForTitleOfAudioTrack()
    {
        this.titleOfAudioTrack.waitForExist(); //default timeout set to 30 seconds in wdio.cong.js file
    }
    validateTitleOfAudioTrack(expectedTitleOfAudioTrack)
    {   
        allureReporter.addStep("Comparing actual title: "+this.titleOfAudioTrack.getText() +" with "+expectedTitleOfAudioTrack);    
        expect(this.titleOfAudioTrack).toHaveTextContaining(
            expectedTitleOfAudioTrack);
    }
    clickSubscribeDrodown()
    {
        allureReporter.addStep("Clicking Subscribe dropdown");
        this.subscribeDrpdwn.click();
    }
    validateApplePodcastIsDisplayedOnClickingSubscribeDrdwn()
    {
        allureReporter.addStep("validating 'Apple Podcast' is displayed on clicking Subscribe Drpdwn");
        expect(this.applePodcastUnderSubscribe).toBeExisting();
    }
    validateGooglePodcastIsDisplayedOnClickingSubscribeDrdwn()
    {
        allureReporter.addStep("validating 'Google Podcast' is displayed on clicking Subscribe Drpdwn");
        expect(this.googlePodcastUnderSubscribe).toBeExisting();
    }
    clickAudioIcon()
    {
        allureReporter.addStep("Clicking Audio icon");
        this.audioIcon.click();
    }
    waitForAudioPlayerPauseIcon()
    {
        this.audioPlayerPauseIcon.waitForExist(); //default timeout set to 30 seconds in wdio.cong.js file
    }
    validateAudioPlayerPauseIconIsPresent()
    {
        allureReporter.addStep("Validating Audio player/pause icon is present for the Audio");
        expect(this.audioPlayerPauseIcon).toBeExisting();
    }
    validateMuteUnmuteIconIsPresent()
    {
        allureReporter.addStep("Validating Mute/Unmute icon is present for the Audio");
        expect(this.muteUnmuteIcon).toBeExisting();
    }
    waitUntilAudioIsStarted()
    {
        browser.waitUntil(()=>this.elapsedTimeOfAudio.getText()>="00:01",{timeout:30000});
    }
    muteAudioForSpecifiedMillisecAndThenUnmute(timeInMs)
    {
        allureReporter.addStep("Muting Audio for "+timeInMs+" milliseconds");
        this.muteUnmuteIcon.click();
        browser.pause(timeInMs);
        allureReporter.addStep("unmuting Audio");
        this.muteUnmuteIcon.click();
    }
    validateAudioHasAlreadyRunForSpecifiedTime(elapsedTime)
    {
        allureReporter.addStep("Validating Audio has run for "+elapsedTime);
        const assert = require('assert');
        assert.ok(this.elapsedTimeOfAudio.getText() >= elapsedTime);
    }
    pauseRunningAudioForSpecifiedMillisec(pauseTimeInMs)
    {
        allureReporter.addStep("Pausing Audio for "+pauseTimeInMs+" milliseconds");
        this.audioPlayerPauseIcon.click();
        browser.pause(pauseTimeInMs);
    }
    resumePausedAudio()
    {
        allureReporter.addStep("Resuming Audio");
        this.audioPlayerPauseIcon.click();
    }
    validateAudioCompletionIsLessThanTheSpecifiedTime(time)
    {
        allureReporter.addStep("Validating Audio completion is less than "+time);
        const assert = require('assert');
        assert.ok(this.elapsedTimeOfAudio.getText() <= time)
    }
    click20SecFwdIcon()
    {
        allureReporter.addStep("Clicking 20 sec Fwd icon for Audio");
        this.TwentySecFwdIcon.click();
    }
    clickLanguageToggleLink()
    {
        allureReporter.addStep("Clicking language toggle link");
        this.languageToggleLink.click();
    }
    validateViewableLanguageListIsPresent()
    {
        allureReporter.addStep("Validating list exists after clicking language toggle link");
        expect(this.viewableLanguageList).toBeExisting();
    }
    getTotalTimeOfAudio()
    {
        allureReporter.addStep("Getting total time of Audio");
        return this.totalTimeOfAudio.getText();
    }

}

module.exports = new SbsHindiNewsPage();
