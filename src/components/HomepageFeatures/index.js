import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Server Documentation',
    url: 'https://expressjs.com/',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Server-side documentation for the Onboarding Solutions API. Including File Service, Email Service, and more.
      </>
    ),
  },
  {
    title: 'React - Employee Onboarding',
    url: 'https://reactjs.org/',
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
    url: 'https://angular.io/',
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
        <a href={url}><Svg className={styles.featureSvg} role="img" /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3"><a href={url}>{title}</a></Heading>
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
