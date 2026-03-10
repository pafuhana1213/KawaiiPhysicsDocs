import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {translate} from '@docusaurus/Translate';

import styles from './contact.module.css';

interface ContactChannel {
  titleId: string;
  titleDefault: string;
  descriptionId: string;
  descriptionDefault: string;
  linkTextId: string;
  linkTextDefault: string;
  href: string;
  icon: ReactNode;
}

const FormIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const DiscussionsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IssuesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const channels: ContactChannel[] = [
  {
    titleId: 'contact.form.title',
    titleDefault: 'お問い合わせフォーム',
    descriptionId: 'contact.form.description',
    descriptionDefault: '採用報告やプライベートなお問い合わせはこちら',
    linkTextId: 'contact.form.linkText',
    linkTextDefault: 'フォームを開く',
    href: 'https://forms.gle/74S7mDvakPpaH9BUA',
    icon: <FormIcon />,
  },
  {
    titleId: 'contact.discussions.title',
    titleDefault: 'GitHub Discussions',
    descriptionId: 'contact.discussions.description',
    descriptionDefault: '使い方の質問やアイデア共有はこちら',
    linkTextId: 'contact.discussions.linkText',
    linkTextDefault: 'Discussions を開く',
    href: 'https://github.com/pafuhana1213/KawaiiPhysics/discussions',
    icon: <DiscussionsIcon />,
  },
  {
    titleId: 'contact.issues.title',
    titleDefault: 'GitHub Issues',
    descriptionId: 'contact.issues.description',
    descriptionDefault: 'バグ報告や機能リクエストはこちら',
    linkTextId: 'contact.issues.linkText',
    linkTextDefault: 'Issues を開く',
    href: 'https://github.com/pafuhana1213/KawaiiPhysics/issues',
    icon: <IssuesIcon />,
  },
  {
    titleId: 'contact.x.title',
    titleDefault: 'X (Twitter)',
    descriptionId: 'contact.x.description',
    descriptionDefault: 'カジュアルな連絡や最新情報はこちら',
    linkTextId: 'contact.x.linkText',
    linkTextDefault: 'X を開く',
    href: 'https://x.com/pafuhana1213',
    icon: <XIcon />,
  },
];

function HeroSection() {
  return (
    <div className={styles.hero}>
      <Heading as="h1" className={styles.heroTitle}>
        {translate({id: 'contact.title', message: 'お問い合わせ'})}
      </Heading>
      <p className={styles.heroSubtitle}>
        {translate({id: 'contact.subtitle', message: 'お気軽にご連絡ください'})}
      </p>
    </div>
  );
}

function ContactCard({channel}: {channel: ContactChannel}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{channel.icon}</div>
      <div className={styles.cardTitle}>
        {translate({id: channel.titleId, message: channel.titleDefault})}
      </div>
      <div className={styles.cardDescription}>
        {translate({id: channel.descriptionId, message: channel.descriptionDefault})}
      </div>
      <a
        href={channel.href}
        className={styles.cardLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {translate({id: channel.linkTextId, message: channel.linkTextDefault})}
        <span className={styles.cardLinkArrow}>→</span>
      </a>
    </div>
  );
}

export default function ContactPage(): ReactNode {
  return (
    <Layout
      title={translate({id: 'contact.title', message: 'お問い合わせ'})}
      description={translate({
        id: 'contact.description',
        message: 'KawaiiPhysicsに関するお問い合わせ・連絡先',
      })}>
      <main>
        <HeroSection />
        <div className={clsx('container', styles.content)}>
          <p className={styles.intro}>
            {translate({
              id: 'contact.intro',
              message: '目的に応じて、以下の連絡手段をご利用ください。',
            })}
          </p>
          <div className={styles.cardGrid}>
            {channels.map((channel) => (
              <ContactCard key={channel.titleId} channel={channel} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
