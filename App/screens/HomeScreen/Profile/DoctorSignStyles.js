import {StyleSheet} from 'react-native';
import {theme} from '../../../themes/Theme';
import {wp, hp} from '../../../themes/Scale';
import {
  APP_PRIMARY_COLOR,
  DEFAULT_WHITE_COLOR,
  LIST_SUB_TEXT_COLOR,
  CARD_SUB_TEXT_COLOR,
  TEXT_INPUT_TITLE,
  DEFAULT_BLACK_COLOR,
  DEFAULT_GREY_COLOR,
  PATIENT_CARD_BORDER_COLOR,
  DEFAULT_RED_COLOR,
} from '../../../themes/variable';

export default StyleSheet.create({
  HeaderText: {
    color: DEFAULT_WHITE_COLOR,
    marginLeft: 50,
    fontFamily: theme.fontFamily.primaryRegular,
    fontSize: theme.fontSizes.xs1,
    // opacity: 0.7,
  },
  signatureTouchableView: {
    flex: 1,
    marginLeft: wp(-20),
  },
  SignatureCapture: {
    height: '85%',
    borderColor: '#000033',
    borderWidth: 1,
  },
  PrescriptionText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 15,
  },
  SignatureView: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 16,
    marginTop: wp(25),
  },
  Signaturepad: {
    backgroundColor: '#F7F7F7',
    height: '50%',
    marginLeft: 16,
    marginRight: 16,
    //marginTop: wp(10),
    borderRadius: wp(5),
    flexDirection: 'row',
  },
  signatureMainView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: wp(-20),
  },
  Signhere: {
    fontFamily: theme.fontFamily.primaryRegular,
    transform: [{rotate: '270deg'}],
    textAlign: 'left',
    color: LIST_SUB_TEXT_COLOR,
  },
  signatureTouchableView: {
    flex: 1,
    marginLeft: wp(-20),
  },
  signimge: {
    height: '90%',
    width: '90%',
    alignSelf: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
  },
  ImageUploadview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImageUploadview1: {
    top: wp(15),
    paddingTop: wp(5),
    paddingBottom: wp(5),
    marginLeft: 16,
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    padding: 5,
  },
  uploadText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 12,
  },
  deleteSignView: {
    top: wp(15),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 16,
    flexDirection: 'row',
    paddingTop: wp(5),
    paddingBottom: wp(5),
  },
  deleteSign: {
    color: DEFAULT_RED_COLOR,
    fontFamily: 'NunitoSans-Regular',
  },
  Model: {
    backgroundColor: 'white',
    height: '65%',
    borderRadius: wp(15),
  },
  modalStyles: {
    marginLeft: wp(8),
    marginRight: wp(8),
  },
  viewBorderRadius: {
    borderRadius: wp(10),
  },
  modalHeader: {
    backgroundColor: 'white',
    backgroundColor: 'transparent',
    elevation: 0,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backgroundColorWhite: {
    backgroundColor: 'white',
  },
  signatureText: {
    backgroundColor: DEFAULT_WHITE_COLOR,
    fontSize: theme.fontSizes.ml,
    fontFamily: theme.fontFamily.primaryBold,
  },
  signatureColorsMainView: {
    borderColor: '#00000029',
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: DEFAULT_WHITE_COLOR,
    padding: wp(8),
    paddingRight: 0,
    borderRadius: 50,
    alignItems: 'center',
  },
  checkedIconView: {
    height: wp(20),
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    height: wp(20),
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    // backgroundColor: SIGNATURE_BLACK_COLOR,
    backgroundColor: 'black',
  },
  checkedIconViewRight: {
    transform: [{rotate: '45deg'}],
    height: hp(12),
    width: wp(5),
    borderBottomWidth: wp(1),
    borderBottomColor: DEFAULT_WHITE_COLOR,
    borderRightWidth: wp(1),
    borderRightColor: DEFAULT_WHITE_COLOR,
    marginTop: wp(-3),
  },
  checkedIconView1: {
    height: wp(20),
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    // backgroundColor: SIGNATURE_BLUE_COLOR,
    backgroundColor: 'blue',
  },
  checkedIconViewRight: {
    transform: [{rotate: '45deg'}],
    height: hp(12),
    width: wp(5),
    borderBottomWidth: wp(1),
    borderBottomColor: DEFAULT_WHITE_COLOR,
    borderRightWidth: wp(1),
    borderRightColor: DEFAULT_WHITE_COLOR,
    marginTop: wp(-3),
  },
  checkedIconView2: {
    height: wp(20),
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    // backgroundColor: SIGNATURE_GREEN_COLOR,
    backgroundColor: 'green',
  },
  signHereMainView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: wp(-15),
    backgroundColor: 'transparent',
  },
  signHereComponentText: {
    fontFamily: theme.fontFamily.primaryRegular,
    transform: [{rotate: '270deg'}],
    textAlign: 'left',
    color: CARD_SUB_TEXT_COLOR,
  },
  signButtonsView: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: PATIENT_CARD_BORDER_COLOR,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingTop: wp(5),
  },
  signatureButtonStyles: {
    width: '20%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 0,
  },
  clearButtonText: {
    fontFamily: theme.fontFamily.primaryRegular,
    color: CARD_SUB_TEXT_COLOR,
    fontSize: theme.fontSizes.md1,
  },
  signatureButtonStyles: {
    width: '20%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 0,
  },
});