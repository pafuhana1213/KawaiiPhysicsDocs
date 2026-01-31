import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

const iconStyle = {
  marginRight: '0.5rem',
  verticalAlign: 'middle',
  display: 'inline-block',
};

// GitHub logo SVG
function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={iconStyle}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

// Fab logo SVG (store/marketplace icon)
function FabIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={iconStyle}>
      <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12z"/>
    </svg>
  );
}

// Document icon SVG
function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={iconStyle}>
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM9 13h6v2H9v-2zm0 4h6v2H9v-2zm0-8h3v2H9V9z"/>
    </svg>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const videoId = '0f-l-SP07Mo';

  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.videoBackground}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1`}
          title="KawaiiPhysics Demo"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={styles.videoIframe}
        />
      </div>
      <div className={styles.videoOverlay} />
      <div className={clsx('container', styles.heroContent)}>
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          Kawaii Physics
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--lg"
            href="https://www.fab.com/ja/listings/f870c07e-0a02-4a78-a888-e52a22794572">
            <FabIcon />Fab
          </Link>
          <Link
            className="button button--outline button--lg"
            href="https://github.com/pafuhana1213/KawaiiPhysics">
            <GitHubIcon />GitHub
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs">
            <DocumentIcon />Document
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description}: {title: string; description: string}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature
            title={translate({id: 'homepage.feature1.title', message: 'シンプルなセットアップ'})}
            description={translate({id: 'homepage.feature1.description', message: 'AnimGraph内で1つのノードを追加するだけで、髪や服に物理を適用できます。'})}
          />
          <Feature
            title={translate({id: 'homepage.feature2.title', message: '軽量な処理'})}
            description={translate({id: 'homepage.feature2.description', message: 'PhysXに依存しない独自アルゴリズムにより、低負荷で安定した物理シミュレーションを実現。'})}
          />
          <Feature
            title={translate({id: 'homepage.feature3.title', message: '柔軟なカスタマイズ'})}
            description={translate({id: 'homepage.feature3.description', message: 'コリジョン、カーブ、外部力など、豊富なパラメータで細かな調整が可能。'})}
          />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="KawaiiPhysics Documentation"
      description={translate({id: 'homepage.description', message: 'Unreal Engine向け軽量ボーン物理プラグイン KawaiiPhysics のドキュメント'})}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
