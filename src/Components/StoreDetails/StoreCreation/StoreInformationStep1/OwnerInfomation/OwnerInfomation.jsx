/* import {Formik, Form } from "formik";
import styles from './index.module.css' 
import FormikControl from "../../../../FormikComponent/formikControl";
import { WhatsappCheckOption ,storeinfoValues,storeInfovalidationSchema} from "../../../../../utils/formcontrol";
import { useState } from "react";
import api from "../../../../../utils/apinscalltoken";
import {MOBILENUMBER_OTP_GENERATE } from "../../../../../utils/api";
import { useFormikContext } from 'formik';

const OwnerInformation=()=>{
  const [verifyOtp,setverifyOtp]=useState(false);
  const { setFieldValue, values } = useFormikContext();

  const sendOtpToMoblile = async (number) => {
    try {
      const response = await api.post(MOBILENUMBER_OTP_GENERATE, {
        dialCode: 91,
        contactNo: number,
      });
      console.log('OTP sent successfully:', response);
    } catch (error) {
      console.error(`Error Sending OTP To Mobile: ${error}`);
    }
  };
  
 return(
  <>
   <div className={styles.docinfocard_header} >Owner Information</div>
    <Formik initialValues={storeinfoValues} validationSchema={storeInfovalidationSchema} >
                {(formik)=>{
                  return(
         <Form className={styles.OwnerInformation_Form} >
              
                 <FormikControl className={styles.form_control} control='input' placeholder='Owner’s Name' name='ownerName'  />  
                 <FormikControl className={styles.form_control} control='input' placeholder='Email Address' name='ownerEmail'/>
                 <div className={styles.input_with_button}>
                 <FormikControl className={styles.phonenu_control} control='input' placeholder='Mobile Number' name='ownerphonenu' />
                 <span className={styles.phone_verify_button} 
                 onClick={()=>{
                   setverifyOtp(!verifyOtp)
                 }
                 } >Verify</span>
                 {verifyOtp &&  
                 <> 
                       <p>Verification code has send to your mobile number</p>      
                       <div className={styles.phone_verify_content_input}>
                         <FormikControl className={styles.otp_control} control='input' name='otp1' maxLength='1'type="text"/>
                         <FormikControl className={styles.otp_control} control='input' name='otp2' maxLength='1'type="text"/>
                         <FormikControl className={styles.otp_control} control='input' name='otp3' maxLength='1'type="text"/>
                         <FormikControl className={styles.otp_control} control='input' name='otp4' maxLength='1'type="text"/>
                       </div>
                       <h6>Didn’t receive OTP?  Resend in 0:55</h6>
                 </>
                  }
                 </div>
                 <hr className={styles.dotted_Line}/>
           {      <FormikControl className={styles.checkbox_control} optiondivname={styles.checkbox_option} control='checkbox' 
                 name='whatsappnumber' options={WhatsappCheckOption}
                 label={<span>By providing your <strong>Whatsapp Number</strong> to get updates on payments, order confirmation etc</span>}  />
         }  </Form> )}
                }             
            </Formik>
            </>
  )
}

export default OwnerInformation; */

import { Formik, Form } from "formik";
import styles from './index.module.css';
import FormikControl from "../../../../FormikComponent/formikControl";
import {
  WhatsappCheckOption,
  storeinfoValues,
  storeInfovalidationSchema,
} from "../../../../../utils/formcontrol";
import { useState } from "react";
import api from "../../../../../utils/apinscalltoken";
import { MOBILENUMBER_OTP_GENERATE } from "../../../../../utils/api";
import { useNavigate } from "react-router-dom";

const OwnerInformation = () => {
  const [verifyOtp, setverifyOtp] = useState(false);
  const navigate = useNavigate();

  const sendOtpToMobile = async (number) => {
    try {
      const response = await api.post(MOBILENUMBER_OTP_GENERATE, {
        dialCode: 91,
        contactNo: number,
      });
      console.log("OTP sent successfully:", response);
    } catch (error) {
      console.error(`Error Sending OTP To Mobile: ${error}`);
    }
  };

  const handleFormSubmit = async (values) => {
    console.log("Form Submitted Values:", values);

  };

  return (
    <>
     {/*  <div className={styles.docinfocard_header}></div> */}
      <Formik
        initialValues={storeinfoValues}
        validationSchema={storeInfovalidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values }) => (
          <Form className={styles.OwnerInformation_Form}>
          <h3 className={styles.docinfocard_header}>Owner Information</h3>
            <FormikControl
              className={styles.form_control}
              control="input"
              placeholder="Owner’s Name"
              name="ownerName"
            />
            <FormikControl
              className={styles.form_control}
              control="input"
              placeholder="Email Address"
              name="ownerEmail"
            />
            <div className={styles.input_with_button}>
              <FormikControl
                className={styles.phonenu_control}
                control="input"
                placeholder="Mobile Number"
                name="ownerphonenu"
              />
              <span
                className={styles.phone_verify_button}
                onClick={() => {
                  setverifyOtp(!verifyOtp);
                  sendOtpToMobile(values.ownerphonenu);
                }}
              >
                Verify
              </span>
              {verifyOtp && (
                <>
                  <p>Verification code has been sent to your mobile number</p>
                  <div className={styles.phone_verify_content_input}>
                    <FormikControl
                      className={styles.otp_control}
                      control="input"
                      name="otp1"
                      maxLength="1"
                      type="text"
                    />
                    <FormikControl
                      className={styles.otp_control}
                      control="input"
                      name="otp2"
                      maxLength="1"
                      type="text"
                    />
                    <FormikControl
                      className={styles.otp_control}
                      control="input"
                      name="otp3"
                      maxLength="1"
                      type="text"
                    />
                    <FormikControl
                      className={styles.otp_control}
                      control="input"
                      name="otp4"
                      maxLength="1"
                      type="text"
                    />
                  </div>
                  <h6>Didn’t receive OTP? Resend in 0:55</h6>
                </>
              )}
            </div>
            <hr className={styles.dotted_Line} />
            <FormikControl
              className={styles.checkbox_control}
              optiondivname={styles.checkbox_option}
              control="checkbox"
              name="whatsappnumber"
              options={WhatsappCheckOption}
              label={
                <span>
                  By providing your <strong>Whatsapp Number</strong>, you agree
                  to get updates on payments, order confirmation, etc.
                </span>
              }
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default OwnerInformation;
