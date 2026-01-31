import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            <Translate id="homepage.readDocs">ドキュメントを読む</Translate>
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
