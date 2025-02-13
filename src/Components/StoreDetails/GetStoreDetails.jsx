import styles from './index.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import icons from '../../icons/icons';
import StoreNavBar from './StoreCreation/StoreNavBar/StoreNavBar';

const GetStoreDetails = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
    }, 0); // Allow navigation to complete before scrolling
  };

  return (
    <div className={styles.store_create_layout}>
      <h1>REWARDIFY</h1>
      <div className={styles.store_create_Container}>
        <div className={styles.store_create_Layout_Form_Container}>
          <div className={styles.move_back} onClick={handleBackClick}>
            {icons.leftpointarrow} Back
          </div>
          <div className={styles.store_create_Layout_Form_Container_header}>
            Start your Onboarding Process with Us
          </div>
          <div className={styles.store_create_Layout_Form_Container_para}>
            Kindly fill the all information correctly to get onboarded quickly with REWARDIFY
          </div>
          <div className={styles.store_create_form}>
            <StoreNavBar />
            <div className={styles.store_create_form_different_form}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStoreDetails;
