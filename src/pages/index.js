import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
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
            <main className={styles.main}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>O książce</h2>
                    <div>
                        <p>
                            Ta książka została napisana z myślą o osobach
                            odpowiedzialnych za dokumentację w firmie. Nieważne
                            czy jesteś na stanowisku kierowniczym i prowadzisz
                            zespół, czy jesteś product ownerem i w Twoim
                            produkcie nie ma jeszcze dokumentacji, czy jesteś
                            jedynym technical writerem w firmie. Jeżeli Twoim
                            zadaniem jest kompleksowo zająć się dokumentacją, to
                            ta książka jest dla Ciebie.
                        </p>
                        <p>
                            <Link to="/docs/przedslowie">Czytaj online</Link>
                        </p>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
