/* import Styles from './index.module.css';
import { makepayment, settlement,transhistory,giftcards,reqtorewardify,referandearn,reports,refundtran } from '../../../../images/images';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const QuickAction=()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return(
        <Carousel activeIndex={index} onSelect={handleSelect} className={Styles.customCarousel} >
        <Carousel.Item>
        <h3>Quick Actions</h3>
        <div className={Styles.carouselItem}>
                      <img src={makepayment} alt="Make Payment" />
                      <img src={settlement} alt="Settlement" />
                      <img src={transhistory} alt="Transaction History" />
                      <img src={giftcards} alt="Gift Cards" />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <h3>Quick Actions</h3>
        <div className={Styles.carouselItem}>
                      <img src={reqtorewardify} alt="Request to Rewardify" />
                      <img src={referandearn} alt="Refer and Earn" />
                      <img src={reports} alt="Reports" />
                      <img src={refundtran} alt="Refund Transaction" />
        </div>
        </Carousel.Item>
      </Carousel>
    )
}

export default QuickAction */

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Styles from './index.module.css';
import {
  makepayment,
  settlement,
  transhistory,
  giftcards,
  reqtorewardify,
  referandearn,
  reports,
  refundtran,
} from '../../../../images/images';

const QuickAction = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={Styles.customCarousel}
      interval={null} /* Prevent auto-sliding */
      indicators={false} /* Optionally hide indicators */
    >
      <Carousel.Item>
        <h3>Quick Actions</h3>
        <div className={Styles.carouselItem}>
          <img src={makepayment} alt="Make Payment" />
          <img src={settlement} alt="Settlement" />
          <img src={transhistory} alt="Transaction History" />
          <img src={giftcards} alt="Gift Cards" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <h3>Quick Actions</h3>
        <div className={Styles.carouselItem}>
          <img src={reqtorewardify} alt="Request to Rewardify" />
          <img src={referandearn} alt="Refer and Earn" />
          <img src={reports} alt="Reports" />
          <img src={refundtran} alt="Refund Transaction" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default QuickAction;
