import React from 'react';
import styles from '../Home.module.css';

const Header = () => {
    return (
        <header className={styles['site-header']}>
            <div className={`${styles.container} ${styles['header-container']}`}>
                <div className={styles.logo}>
                    <a href="/">
                        <img src="../../../public/Gemini_Generated_Image_qitkv9qitkv9qitk.png" alt="Khung Hình Logo" />
                    </a>
                </div>
                <nav className={styles['main-nav']}>
                    <ul>
                        <li><a href="/" className={styles.active}>Trang chủ</a></li>
                        <li><a href="/nhiep-anh-gia">Nhiếp ảnh gia</a></li>
                        <li><a href="/thu-vien-anh">Thư viện ảnh</a></li>
                    </ul>
                </nav>
                <div className={styles['header-actions']}>
                    <a href="/dang-nhap" className={styles['btn-login']}>Đăng nhập</a>
                    <a href="/dang-ky" className={styles['btn-register']}>Đăng ký</a>
                </div>
            </div>
        </header>
    );
};

export default Header;