import {StyleSheet} from 'react-native';
import {
  DEFAULT_WHITE_COLOR,
  DEFAULT_GREY_COLOR,
  DEFAULT_LIGHT_GREY_COLOR,
  DEFAULT_BLACK_COLOR,
  DEFAULT_BACKGROUND_COLOR,
  APP_PRIMARY_COLOR,
  CARD_BUTTON_BACKGROUND_COLOR,
} from '../../../../themes/variable';

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },

  horizontalLine: {
    borderBottomColor: DEFAULT_GREY_COLOR,
    borderBottomWidth: 1,
    marginTop: 5,
    flex: 1,
    opacity: 0.3,
  },
  headersText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  width40: {
    width: '40%',
  },
  width60: {
    width: '60%',
  },
  width20: {
    width: '20%',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  inputSectionMainView: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  paddingLeft: {
    paddingLeft: 10,
  },
  colorIndicator: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  viewColor: {
    height: 15,
    width: 15,
  },
  indicatorText: {
    paddingLeft: 5,
    fontSize: 12,
    color: DEFAULT_GREY_COLOR,
  },
  marginTop15: {
    marginTop: 15,
  },
  checkBoxMainView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  fontSize12: {
    fontSize: 12,
  },
  headerStyles: {
    height: 40,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    borderColor: DEFAULT_BACKGROUND_COLOR,
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  saveButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: DEFAULT_BACKGROUND_COLOR,
  },
  footerSection: {
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    shadowOpacity: 0.8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'flex-start',
  },
  footerSectionView: {
    flex: 6,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  footerButtonStyles: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: APP_PRIMARY_COLOR,
    marginTop: 10,
    marginBottom: 10,
  },
  dateSectionView: {
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  dateIcon: {
    height: 10,
    width: 10,
    marginLeft: 0,
    fontSize: 2,
  },
  dateInput: {
    height: 15,
    borderColor: 'transparent',
  },
  dateText: {
    fontSize: 12,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  vaccinationHistoryHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  vaccinationHistoryValuesText: {
    fontSize: 12,
    color: DEFAULT_GREY_COLOR,
  },
  flex1: {
    flex: 1,
  },
  contentCenter: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  delete: {
    height: 15,
    width: 15,
  },
  vaccineHistoryCard: {
    flex: 1,
    borderColor: DEFAULT_GREY_COLOR,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 2,
    paddingBottom: 2,
    paddingTop: 4,
    paddingRight: 4,
    borderRadius: 4,
    marginBottom: 4,
  },
  width100: {
    width: '100%',
  },
  width80: {
    width: '80%',
  },
  addImage: {
    height: 25,
    width: 25,
  },
  halfModalStyles: {
    height: '40%',
    marginTop: 'auto',
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  modalCloseView: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  closeIconStyles: {
    height: 20,
    width: 20,
  },
  textInputWrapper: {
    height: 25,
    margin: 5,
    width: 100,
    borderWidth: 1,
    fontSize: 14,
    padding: 4,
    paddingLeft: 0,
    opacity: 0.5,
    borderColor: DEFAULT_BLACK_COLOR,
    marginLeft: 10,
  },
  vaccinationDetailsMainView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 10,
  },
  vacDateSelectorView: {
    flexDirection: 'row',
  },
  nativeButtonStyles: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: APP_PRIMARY_COLOR,
  },
  vaccinationSaveText: {
    fontSize: 14,
    color: DEFAULT_WHITE_COLOR,
  },
  covidDropDownMainView: {
    margin: 5,
    padding: 4,
    paddingLeft: 0,
    marginLeft: 0,
  },
  pickerStyles: {    
    minWidth: 120    
  },
  ageStyles: {
    height: 20,
    width: 20,
  },
  footerTotalSection: {
    borderColor: DEFAULT_GREY_COLOR,
    // backgroundColor: DEFAULT_LIGHT_GREY_COLOR,
    borderTopColor: DEFAULT_GREY_COLOR,
    backgroundColor: DEFAULT_WHITE_COLOR,
  },
  dateComponentStyles: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  asOfText: {
    fontSize: 12,
    paddingRight: 5,
  },
  dateField: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateIconFooter: {
    fontSize: 18,
  },
  footerView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  additionalRecordVitalView: {
    flexDirection: 'row',
    marginTop: 12,
  },
  textSectionMainView: {
    flex: 1,
    margin: 5,
    padding: 3,
    paddingLeft: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-start',
  },
  inputText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  flex: {
    flex: 1,
  },
  vitalRecordInputSection: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-start',
  },
  modalStyles: {
    height: '70%',
    marginTop: 'auto',
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  modalClose: {
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  closeIcon: {
    height: 25,
    width: 25,
  },
  modalText: {
    fontSize: 14,
  },
  recordVitalButtonMainView: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  recordVitalSaveButton: {
    display: 'flex',
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: APP_PRIMARY_COLOR,
  },
  startText: {
    fontSize: 14,
    color: DEFAULT_WHITE_COLOR,
    textTransform: 'uppercase',
  },

  digitStyle: {
    backgroundColor: DEFAULT_LIGHT_GREY_COLOR,
    fontSize: 12,
  },
  digitTxtStyle: {
    color: DEFAULT_BLACK_COLOR,
  },
  doctorInstructionsMainView: {
    marginBottom: 15,
    marginTop: 15,
  },
  doctorSectionMainView: {
    marginTop: 5,
    flexDirection: 'row',
  },
  doctorInstructionsText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  instText: {
    fontSize: 14,
  },
  textSection: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-start',
  },
  extraRecordingVitalMainView: {
    flex: 1,
    marginTop: 5,
  },
  textInfoView: {
    flex: 1,
  },
  recordText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  recordButtonMainView: {
    flex: 1,
    display: 'flex',
    marginTop: 5,
    marginBottom: 25,
    marginLeft: '30%',
  },
  nativeButton: {
    display: 'flex',
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: APP_PRIMARY_COLOR,
  },
  inputMain: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  modalMargins: {
    padding: 0,
    margin: 0,
  },
  saveButtonStyles: {
    width: 95,
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: APP_PRIMARY_COLOR,
  },
  textColor: {
    color: DEFAULT_WHITE_COLOR,
  },
  fontSize14: {
    fontSize: 14,
  },
  textCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  dateButton: {
    height: 40,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // backgroundColor: DEFAULT_LIGHT_GREY_COLOR,
    backgroundColor: CARD_BUTTON_BACKGROUND_COLOR,
    elevation: 0,
    flexDirection: 'row',
  },
  modalPaddingStyles: {
    margin: 0,
    padding: 0,
  },
  viewFlexAndRow: {
    flex: 1,
    flexDirection: 'row',
  },
  activityMainView: {
    flexDirection: 'row',
    width: '33%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonMainView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  activityButtonStyles: {
    width: 110,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: CARD_BUTTON_BACKGROUND_COLOR,
    borderColor: APP_PRIMARY_COLOR,
    borderRadius: 6,
    borderWidth: 1,
    elevation: 0,
    flexDirection: 'row',
  },
  activityTextStyles: {
    fontSize: 15,
    color: APP_PRIMARY_COLOR,
  },
  bottomLevelView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  changeDateTouchableView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  dateIconStyles: {
    height: 20,
    width: 20,
    marginLeft: 10
  },

});
