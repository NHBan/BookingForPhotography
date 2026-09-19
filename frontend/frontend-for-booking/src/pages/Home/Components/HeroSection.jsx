import React from 'react';
import styles from '../Home.module.css';

const HeroSection = () => {
  return (
    <section className={styles['hero-section']}>
      <div className={`${styles.container} ${styles['hero-container']}`}>
        {/* Cột nội dung tìm kiếm */}
        <div className={styles['hero-content']}>
          <h1 className={styles['hero-title']}>Tìm người chụp đúng gu của bạn</h1>
          <p className={styles['hero-description']}>
            Xem portfolio thật, so sánh giá và đặt lịch với nhiếp ảnh gia trong khu vực của bạn.
          </p>

          <form action="/tim-kiem" method="GET" className={styles['search-box']}>
            <div className={styles['form-group']}>
              <label htmlFor="category">Thể loại</label>
              <select id="category" name="the-loai">
                <option value="tat-ca">Tất cả</option>
                <option value="chan-dung">Chân dung</option>
                <option value="phong-canh">Phong cảnh</option>
                <option value="su-kien">Sự kiện</option>
              </select>
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="location">Khu vực</label>
              <select id="location" name="khu-vuc">
                <option value="toan-quoc">Toàn quốc</option>
                <option value="ha-noi">Hà Nội</option>
                <option value="ho-chi-minh">Hồ Chí Minh</option>
                <option value="da-nang">Đà Nẵng</option>
              </select>
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="date">Ngày chụp</label>
              <input type="date" id="date" name="ngay-chup" placeholder="dd/mm/yyyy" />
            </div>
            <button type="submit" className={styles['btn-search']}>Tìm nhiếp ảnh gia</button>
          </form>
        </div>

        {/* Cột thư viện ảnh mẫu */}
        <div className={styles['hero-gallery']} aria-label="Bộ sưu tập ảnh mẫu">
          <div className={`${styles['gallery-item']} ${styles['item-large']}`}>
            <figure>
              <img src="image-1.jpg" alt="Ảnh mẫu chân dung" />
              <figcaption className={styles['sr-only']}>Ảnh 1</figcaption>
            </figure>
          </div>
          <div className={`${styles['gallery-item']} ${styles['item-small-top']}`}>
            <figure>
              <img src="image-2.jpg" alt="Ảnh mẫu portfolio" />
              <figcaption className={styles['sr-only']}>Ảnh 2</figcaption>
            </figure>
          </div>
          <div className={`${styles['gallery-item']} ${styles['item-small-bottom']}`}>
            <figure>
              <img src="image-3.jpg" alt="Ảnh mẫu khoảnh khắc" />
              <figcaption className={styles['sr-only']}>Ảnh 3</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;