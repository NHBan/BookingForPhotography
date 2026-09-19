import React from 'react';
import styles from '../Home.module.css';

const CtaBanner = () => {
  return (
    <section className={styles['photographer-cta-section']}>
      <div className={styles.container}>
        <div className={styles['cta-banner']}>
          <div className={styles['cta-content']}>
            <h2>Bạn là nhiếp ảnh gia?</h2>
            <p>Đăng portfolio, nhận khách và quản lý lịch chụp ở một nơi.</p>
          </div>
          <div className={styles['cta-action']}>
            <a href="/tao-ho-so" className={styles['btn-create-profile']}>Tạo hồ sơ nhiếp ảnh gia</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;