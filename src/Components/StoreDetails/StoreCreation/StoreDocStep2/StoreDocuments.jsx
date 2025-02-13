import styles from './index.module.css';
import { Formik, Form } from 'formik';
import FormikControl from '../../../FormikComponent/formikControl';
import { storeCreateValues, storeCreatevalidationSchema, storeCreateCheckoption } from '../../../../utils/formcontrol';
import StoreScanCard from '../StoreScanCard/StoreScanCard';
import { useNavigate } from 'react-router-dom';

const StoreDocuments = () => {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log('Form data:', values);
        navigate('/getstoredetails/storeAgeement');
    };

    return (
        <>
            <div className={styles.docstoreform_header}>Store Documents</div>
            <Formik
                initialValues={storeCreateValues}
                validationSchema={storeCreatevalidationSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => {
                    return (
                        <Form>
                            <div className={styles.docform_Container}>
                                {/* PAN & GSTIN Section */}
                                <div className={styles.PanDetail_Form}>
                                    <h3 className={styles.docstorecard_header}>Enter PAN & GSTIN details</h3>
                                    <FormikControl
                                        className={styles.form_control}
                                        control="input"
                                        placeholder="Store/Owner PAN"
                                        name="storeOwnerPan"
                                    />
                                    <FormikControl
                                        className={styles.form_control}
                                        control="input"
                                        placeholder="GSTIN"
                                        name="GSTIN"
                                    />
                                    <FormikControl
                                        className={styles.checkbox_control}
                                        optiondivname={styles.checkbox_option}
                                        control="checkbox"
                                        name="GSTINStatus"
                                        options={storeCreateCheckoption}
                                    />
                                </div>

                                {/* Bank Details Section */}
                                <div className={styles.bankDetail_Form}>
                                    <h3 className={styles.docstorecard_header}>Bank Details</h3>
                                    <FormikControl
                                        className={styles.form_control}
                                        control="input"
                                        placeholder="Bank Name"
                                        name="bankname"
                                    />
                                    <FormikControl
                                        className={styles.form_control}
                                        control="input"
                                        placeholder="Bank Account Number"
                                        name="bankAccountNumber"
                                    />
                                    <FormikControl
                                        className={styles.form_control}
                                        control="input"
                                        placeholder="Bank IFSC Code"
                                        name="bankIFSCCode"
                                    />
                                </div>

                                {/* Scan Card */}
                                <StoreScanCard />

                                {/* Submit Button */}
                                <button
                                    className={styles.continue_button}
                                    type="submit"
                                    onClick={()=>navigate('/getstoredetails/storeAgeement')}>Continue</button>


                               
                           
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default StoreDocuments;
