import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Darmowa książka o tworzeniu dokumentacji do oprogramowania">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <img
                className={styles.coverImage}
                alt="Okładka książki"
                src={useBaseUrl('img/okladka.png')}
              />
            </div>
            <div className={classnames('col-sm', styles.welcomeOptions)}>
              <h1 className={styles.bookTitle}>{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/przedslowie')}
                >Czytaj online</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className={classnames('row', styles.moreOptions)}>
            <div className="col">
              <h2>Więcej opcji</h2>
            </div>
            <div className="col">
              <p>
                <a href={useBaseUrl('Dokumentacja-do-oprogramowania-poradnik-dla-managerow.pdf')} class="btn btn-warning">Pobierz PDF</a>
              </p>
              <p>
                <a href={useBaseUrl('Dokumentacja-do-oprogramowania-poradnik-dla-managerow.pdf')} class="btn btn-warning">Pobierz PDF</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
