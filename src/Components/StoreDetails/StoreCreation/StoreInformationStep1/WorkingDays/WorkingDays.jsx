/* import { Form, Formik, Field } from "formik";
import styles from './index.module.css';
import FormikControl from "../../../../FormikComponent/formikControl";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const WorkdayDays = ({ storeCreateValues }) => {
  const days = useSelector((state) => state?.user?.user);
  const location = useLocation();

  // Ensure that workingdays is properly populated from the redux state
  useEffect(() => {
    if (location.pathname === '/home/profile/shopdetail' && days) {
      storeCreateValues.workingdays = days?.store?.schedule?.map(day => day.value) || [];
    }
  }, [days, location.pathname]);

  const WorkdaysCheckOption = [
    { key: 'Monday', value: '1' },
    { key: 'Tuesday', value: '2' },
    { key: 'Wednesday', value: '3' },
    { key: 'Thursday', value: '4' },
    { key: 'Friday', value: '5' },
    { key: 'Saturday', value: '6' },
    { key: 'Sunday', value: '7' }
  ];

  return (
    <Formik
      initialValues={{ workingdays: storeCreateValues?.workingdays || [] }}
    >
      <Form className={styles.workingdaysinfo_Form}>
        <div className={styles.workingdays_header}>
          <h3 className={styles.docinfocard_header}>Working Days</h3>
          <h4>Select All</h4>
        </div>
        <FormikControl
          className={styles.checkbox_control}
          optiondivname={styles.checkbox_option}
          control="checkbox"
          options={WorkdaysCheckOption}
          name="workingdays"
        />
      </Form>
    </Formik>
  );
};

export default WorkdayDays;
 */

import { Form, Formik } from "formik";
import * as Yup from "yup";
import styles from './index.module.css';
import FormikControl from "../../../../FormikComponent/formikControl";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WorkdayDays = ({ storeCreateValues }) => {
  const days = useSelector((state) => state?.user?.user);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/home/profile/shopdetail' && days) {
      storeCreateValues.workingdays =
        days?.store?.schedule?.map((day) => day.value) || [];
    }
  }, [days, location.pathname, storeCreateValues]);

  const WorkdaysCheckOption = [
    { key: 'Monday', value: '1' },
    { key: 'Tuesday', value: '2' },
    { key: 'Wednesday', value: '3' },
    { key: 'Thursday', value: '4' },
    { key: 'Friday', value: '5' },
    { key: 'Saturday', value: '6' },
    { key: 'Sunday', value: '7' },
  ];

  const validationSchema = Yup.object({
    workingdays: Yup.array()
      .min(1, "Please select at least one working day.")
      .required("Working days are required."),
  });

  const handleFormSubmit = (values) => {
    console.log("Form Values:", values);
    navigate('/next-page-route'); // Update the route to your desired next page
  };

  return (
    <Formik
      initialValues={{
        workingdays: storeCreateValues?.workingdays || [],
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, setFieldValue, values }) => (
        <Form className={styles.workingdaysinfo_Form} onSubmit={handleSubmit}>
          <div className={styles.workingdays_header}>
            <h3 className={styles.docinfocard_header}>Working Days</h3>
            <button
              type="button"
              onClick={() => {
                const allSelected =
                  values.workingdays.length === WorkdaysCheckOption.length;
                setFieldValue(
                  "workingdays",
                  allSelected ? [] : WorkdaysCheckOption.map((opt) => opt.value)
                );
              }}
              className={styles.select_all_button}
            >
              {values.workingdays.length === WorkdaysCheckOption.length
                ? "Unselect All"
                : "Select All"}
            </button>
          </div>
          <FormikControl
            className={styles.checkbox_control}
            optiondivname={styles.checkbox_option}
            control="checkbox"
            options={WorkdaysCheckOption}
            name="workingdays"
          />
        
        </Form>
      )}
    </Formik>
  );
};

export default WorkdayDays;
