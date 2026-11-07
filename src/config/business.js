// Verified site facts are separated from owner-confirmation items. Keep flags false until verified.
export const business = {
  name:'Texas HVAC Repair', email:'info@txhvacrepair.com', phone:'8172600888', phoneDisplay:'(817) 260-0888',
  location:'Central Office, Arlington, TX', familyOwned:true,
  facebook:'https://www.facebook.com/texashvacrepair', website:'https://txhvacrepair.com',
  serviceSummary:'Family-owned HVAC and refrigeration service for homes and businesses across Dallas–Fort Worth.',
  claims:{ primaryPhoneConfirmed:false, secondaryPhoneConfirmed:false, addressConfirmed:false, emergency247Confirmed:false, satisfactionGuaranteeConfirmed:false, yearsInBusinessConfirmed:false, googleProfileConfirmed:false, hoursConfirmed:false, licenseConfirmed:false, insuranceConfirmed:false, manufacturerAuthorizationsConfirmed:false, currentSpecialConfirmed:false, homeWarrantyPolicyConfirmed:false, complaintProcessConfirmed:false, realPhotosApproved:false },
  // [CONFIRM] Values below must be supplied by the owner before display.
  secondaryPhone:'8178641220', streetAddress:'7121 Blackberry Dr, Arlington, TX 76016', googleProfileUrl:'', googleReviewUrl:'',
  googleRating:null, googleReviewCount:null, hours:[], licenseNumber:'', insuranceStatement:'', manufacturerNames:[], currentSpecial:null,
  emergencyProcess:'Emergency service available. Call to confirm availability.', homeWarrantyContent:'', complaintProcessContent:'',
  // [CONFIRM] Site claims; not rendered unless their corresponding flags are true.
  yearsInBusiness:15, satisfactionText:'100% satisfaction guarantee',
};
