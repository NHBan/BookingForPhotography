import React from 'react';
import PhotographerCard from './PhotographerCard';
import styles from '../Home.module.css';

const FeaturedPhotographers = () => {
  // Dữ liệu mẫu (Thay bằng API Django Backend sau)
  const photographersList = [
    { id: 1, image: 'photographer-1.jpg', altText: 'Minh Anh - Chân dung, Hà Nội', name: 'Minh Anh', specialty: 'Chân dung, Hà Nội', price: '1.200.000đ', rating: '4,9' },
    { id: 2, image: 'photographer-2.jpg', altText: 'Quốc Bảo - Ảnh cưới, TP. HCM', name: 'Quốc Bảo', specialty: 'Ảnh cưới, TP. HCM', price: '6.500.000đ', rating: '4,8' },
    { id: 3, image: 'photographer-3.jpg', altText: 'Thu Hà - Gia đình, Đà Nẵng', name: 'Thu Hà', specialty: 'Gia đình, Đà Nẵng', price: '1.800.000đ', rating: '5,0' },
    { id: 4, image: 'photographer-4.jpg', altText: 'Đức Long - Sự kiện, Hà Nội', name: 'Đức Long', specialty: 'Sự kiện, Hà Nội', price: '3.000.000đ', rating: '4,7' },
  ];

  return (
    <section className={styles['featured-photographers']}>
      <div className={styles.container}>
        <div className={styles['section-header']}>
          <h2>Nhiếp ảnh gia được đặt nhiều</h2>
          <a href="/nhiep-anh-gia" className={styles['view-more-link']}>Xem thêm</a>
        </div>

        <div className={styles['photographer-grid']}>
          {photographersList.map((photographer) => (
            <PhotographerCard 
              key={photographer.id}
              image={photographer.image}
              altText={photographer.altText}
              name={photographer.name}
              specialty={photographer.specialty}
              price={photographer.price}
              rating={photographer.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotographers;