import React from 'react';
import styles from '../Home.module.css';

const PhotographerCard = ({ image, altText, name, specialty, price, rating }) => {
  return (
    <article className={styles['photographer-card']}>
      <div className={styles['card-image']}>
        <img src={image} alt={altText} />
      </div>
      <div className={styles['card-info']}>
        <h3>{name}</h3>
        <p className={styles.specialty}>{specialty}</p>
        <div className={styles['card-footer']}>
          <span className={styles.price}>Từ {price}</span>
          <span className={styles.rating}>{rating}/5</span>
        </div>
      </div>
    </article>
  );
};

export default PhotographerCard;