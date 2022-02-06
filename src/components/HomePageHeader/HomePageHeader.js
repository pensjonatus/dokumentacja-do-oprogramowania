import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './HomePageHeader.module.css';
import video from './computer-time.mp4';

export default function HomePageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={styles.wrapper}>
            <video autoPlay muted loop className={styles.video}>
                <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className={styles.overlay}>
                <h1 className={styles.title}>{siteConfig.title}</h1>
                <p className={styles.subTitle}>{siteConfig.tagline}</p>
                <Link to="/docs/przedslowie" className={styles.button}>
                    Czytaj
                </Link>
            </div>
        </header>
    );
}
