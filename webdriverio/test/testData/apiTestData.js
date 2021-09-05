class ApiTestData{
get apiEndpoint () {return "https://www.sbs.com.au/guide/ajax_radio_program_catchup_data/language/hindi/location/NSW/sublocation/Sydney"};
get expectedMp3FilesArray () {return ["Saturday_ONDemand_SBS_RADIO2_17_00.mp3"],["Friday_ONDemand_SBS_RADIO2_17_00.mp3"],["Thursday_ONDemand_SBS_RADIO2_17_00.mp3"],["Wednesday_ONDemand_SBS_RADIO2_17_00.mp3"],["Tuesday_ONDemand_SBS_RADIO2_17_00.mp3"],["Monday_ONDemand_SBS_RADIO2_17_00.mp3"],["Sunday_ONDemand_SBS_RADIO2_17_00.mp3"]}; 

}

module.exports = new ApiTestData();