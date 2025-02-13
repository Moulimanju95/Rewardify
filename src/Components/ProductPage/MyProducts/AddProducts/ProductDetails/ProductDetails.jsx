import style from './index.module.css';
import FormikControl from '../../../../FormikComponent/formikControl';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { forwardRef, useEffect, useState } from 'react';

const ProductDetails = forwardRef(({ editproductDetails, CategoryOptions, productoption, handleproductChange, locationdata }, ref) => {
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    setFilteredCategories(CategoryOptions);
  }, [CategoryOptions]);

  const productDetailsSchema = Yup.object({
    category: Yup.string().required('Required!'),
    ProductName: Yup.string().required('Required!'),
    ProductMRP: Yup.string().required('Required!'),
    Discounttype: Yup.string().required('Required!'),
    DiscountValue: Yup.string().required('Required!'),
    ProductPrice: Yup.string().required('Required!'),
    UOM: Yup.string().required('Required!'),
    ProductSize: Yup.string().required('Required!'),
    AvailableQuantity: Yup.string().required('Required!')
  });

  const option = [
    { key: 'Discount type', value: '' },
    { key: 'Special Discount', value: '1' },
    { key: '10% Discount', value: '2' }
  ];

  const unitOptions = [
    { key: 'UOM (unit of measurement)', value: '' },
    { key: 'One Unit', value: '1' },
    { key: 'One Pack', value: '2' },
    { key: 'Gram', value: '3' },
    { key: 'Kilogram', value: '4' },
    { key: 'Millilitre', value: '5' },
    { key: 'Litre', value: '6' }
  ];

  const handleProductNameChange = (value) => {
    handleproductChange(value);

    const updatedCategories = CategoryOptions.filter((category) => {
      // Adjust filtering logic to match actual data structure
      return category.relatedProducts?.includes(value);
    });

    setFilteredCategories(updatedCategories.length > 0 ? updatedCategories : CategoryOptions);
  };

  return (
    <Formik
      initialValues={editproductDetails}
      validationSchema={productDetailsSchema}
      innerRef={ref}
      enableReinitialize
    >
      {({ handleChange, setFieldValue }) => {
        return (
          <div className={style.ProductDetailsCard}>
            <h3 className={style.profile_header}>Product Details</h3>
            <Form className={style.ProductDetailsContent}>
              <FormikControl
                className={style.form_select}
                legend="Category"
                control="select"
                disabled={!!locationdata}
                options={filteredCategories ?? [{ key: 'Select related Category', value: '' }]}
                placeholder="Select related Category"
                name="category"
              />
              <FormikControl
                className={style.form_select}
                legend="Product Name"
                disabled={!!locationdata}
                onChange={(e) => {
                  handleChange(e);
                  handleProductNameChange(e.target.value);
                  setFieldValue('ProductName', e.target.value);
                }}
                control="select"
                options={productoption ?? [{ key: 'Product Name', value: '0' }]}
                placeholder="Product Name"
                name="ProductName"
              />
              {/* Other fields remain unchanged */}
              <FormikControl
                className={style.form_control}
                control="input"
                legend="Product MRP"
                placeholder="Product MRP"
                name="ProductMRP"
              />
              <div className={style.DiscountContainer}>
                <FormikControl
                  className={style.form_select}
                  control="select"
                  legend="Special discount"
                  options={option}
                  placeholder="Discount type"
                  name="Discounttype"
                />
                <FormikControl
                  className={style.form_control}
                  control="input"
                  legend="Discount Value"
                  placeholder="Discount Value"
                  name="DiscountValue"
                />
              </div>
              <FormikControl
                className={style.form_control}
                control="input"
                legend="Product Price"
                placeholder="Product Price"
                name="ProductPrice"
              />
              <FormikControl
                className={style.form_select}
                control="select"
                legend="UOM"
                disabled={!!locationdata}
                options={unitOptions}
                placeholder="UOM (unit of measurement)"
                name="UOM"
              />
              <FormikControl
                className={style.form_control}
                control="input"
                legend="Unit Size"
                disabled={!!locationdata}
                placeholder="Product Size (Enter the size of each Product)"
                name="ProductSize"
              />
              <FormikControl
                className={style.form_control}
                control="input"
                legend="Available Quantity"
                disabled={!!locationdata}
                placeholder="Available Quantity"
                name="AvailableQuantity"
              />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
});

export default ProductDetails;
