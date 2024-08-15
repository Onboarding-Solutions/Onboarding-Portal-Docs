import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Server Documentation',
    url: '/docs/category/server',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Server-side documentation for the Onboarding Solutions API. Including File Service, Email Service, and more.
      </>
    ),
  },
  {
    title: 'React - Employee Onboarding',
    url: '/docs/category/react---employee-portal',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Styling and functionality for the Onboarding Solutions Employee Portal. 
        All the common public components can be found here.
      </>
    ),
  },
  {
    title: 'Angular - HR Onboarding',
    url: '/docs/category/angular---hr-portal',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The angular version frontend for the Onboarding Solutions HR Portal.
      </>
    ),
  },
];

function Feature({Svg, title, description, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <Link to={url}><Svg className={styles.featureSvg} role="img" /></Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><Link to={url}>{title}</Link></Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
