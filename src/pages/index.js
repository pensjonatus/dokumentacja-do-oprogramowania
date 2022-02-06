import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomePageHeader from '../components/HomePageHeader/HomePageHeader';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Poradnik dla managerów projektów software'owych, którzy chcą mieć dobrą dokumentację dla użytkownika"
        >
            <HomePageHeader />
        </Layout>
    );
}
