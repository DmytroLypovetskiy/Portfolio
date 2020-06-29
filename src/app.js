import React, { Component } from 'react';
import {
  HashRouter,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Nav, Contacts, Summary, Skills, Experience, Education, Languages, Header } from './components/';

import './style.scss';

class App extends Component {
  state = {
    name: 'Dmytro Lypovetskiy',
    title: 'Front-end developer',
    role: 'Software Engineer',
    contacts: [
      { address: 'Brooklyn, NY' },
      { cell: '2012755909' },
      { email: 'lipovetskiy@gmail.com' }
    ],
    summary: 'Professional with more than 12 years of experience in design and development of high quality enterprise online properties. Very motivated and creative personality with solid working ethics and ability to work under pressure.',
    skills: [
      { 'OS': 'MacOS, Windows' },
      { 'Database': 'MongoDB, PostgressSQL, NetSuite' },
      { 'Languages': 'Java Script, HTML, CSS, React, NodeJS, PHP' },
      { 'Tests': 'Mocha, Chai, Jasmine, Protractor, Jest' },
      { 'Versioning': 'Git, SVN' },
      { 'CMS': 'Magento, Wordpress, Sales Force Commerce Cloud, Adobe CQ' },
      { 'Build/Deploy': 'Jenkins, CircleCI' },
      { 'Containers': 'Docker' },
      { 'Cloud': 'Amazon AWS, S3' }
    ],
    experience: [
      {
        title: 'Senior Software Engineer (Front End)',
        company: 'Poppin',
        date: 'May 2018 – June 2020',
        duties: [
          'working on server side JavaScript to extend available delivery and shipping methods;',
          'refactoring old legacy code to utilize modern features;',
          'working with Damandware Salesforce Commerce Cloud as e-commerce platform;',
          'web-site re-designing (JavaScript, HTML, CSS, ISML, React);',
          'integration with 3party API like Listrack, Netsuite Oracle Database, Google Tag Manager;',
          'working on internal company web-applications (feeds, API);',
        ]
      },
      {
        title: 'Senior Software Engineer (Front End / FullStack)',
        company: 'X.AI',
        date: 'May 2017 – May 2018',
        duties: [
          'developing company website (JavaScript, HTML and CSS on Front, Wordpress and PHP on Back-End);',
          'implementing plugins and custom Wordpress theme;',
          'working closely with design team creating reusable interface components for the company website;',
          'implementing new customer onboarding web application using NodeJS, MongoDB, JavaScript, HTML and SCSS for CSS;',
          'integration with 3party API like Intercom, Optimizely, Stripe;',
        ]
      },
      {
        title: 'Senior Software Engineer (Front End)',
        company: 'EPAM Systems (Client Viacom. BET)',
        date: 'April 2013 – May 2017',
        duties: [
          'responsive web site implementation using HTML/HTML5, CSS, jQuery/JavaScript;',
          'creating templates, widgets and components for the company website using Adobe CQ as content management system;',
          'improving and optimization existing functionality;',
          'integration Omniture API - an online marketing and web analytics system;',
          'working closely with design and back-end teams to analyze needs and requirements;',
          'integration new custom Viacom web player;',
        ]
      },
      {
        title: 'Senior/Lead Software Engineer (Front End)',
        company: 'EPAM Systems',
        date: 'August 2011 - April 2013',
        duties: [
          'creating the proposals for the customers;',
          'participating in requirements discussions;',
          'wireframes estimation and managing of the wireframes development process;',
          'identifying staffing needs;',
          'monitoring and tracking team training process;',
          'collecting information for quarterly reports;',
          'facilitating employees career and professional development;',
          'searching for opportunities to utilize bench resources;',
          'supervising 12 team members;',
          'projects and team load capacity estimation, aggregation of team reports;',
        ]
      },
      {
        title: 'Senior Software Engineer (Front End)',
        company: 'Ciklum',
        date: 'September 2010 - August 2011',
        duties: [
          'Magento E-Commerce custom theme implementation for German clients;',
          'developing UI from Mockups using HTML5/CSS3, jQuery/JavaScript;',
          'created all necessary project documentation and release notes;',
        ]
      },
      {
        title: 'Markup mentor/Lead of HTML/CSS Department',
        company: 'PSD2HTML',
        date: 'March 2009 - September 2010',
        duties: [
          'researched, created and updated documentation for UI developers;',
          'tasks estimations;',
          'quality review of implemented tickets;',
          'created carriers plans for html/css developers;',
          'conducted HTML / CSS trainings for engineering, QA, management and support staff;',
          'supervised a team of ~20 markup developers;',
          'performed a key role in development with all difficult or VIP projects;',
        ]
      }
    ],
    education: [
      {
        title: 'Computer Technology/Computer Systems Technology. Master’s degree',
        university: 'Kharkiv National University of Radio and Electronics',
        place: 'Kharkiv, Ukraine',
        date: '2000 - 2005',
      }
    ],
    languages: [
      {
        Ukrainian: '(Native or bilingual proficiency)',
        Russian: '(Native or bilingual proficiency)',
        English: '(Professional working proficiency)',
      }
    ]
  }
  render() {
    const { name, title, role, contacts, summary, skills, experience, education, languages } = this.state;

    return (
      <HashRouter>
        <Route render={({ location }) => <Nav path={location.pathname} />} />
        <Route render={() => <Header name={name} title={title} role={role} />} />
        <section className="container-fluid py-4">
          <Switch>
            <Route
              path={'/'}
              exact
            >
              <Contacts contacts={contacts} />
              <Summary summary={summary} />
              <Skills skills={skills} />
              <Experience experience={experience} />
              <Education education={education} />
              <Languages languages={languages} />
            </Route>
            <Route
              path={'/contacts'}
              exact
              render={() => <Contacts contacts={contacts} />}
            />
            <Route
              path={'/summary'}
              exact
              render={() => <Summary summary={summary} />}
            />
            <Route
              path={'/skills'}
              exact
              render={() => <Skills skills={skills} />}
            />
            <Route
              path={'/experience'}
              exact
              render={() => <Experience experience={experience} />}
            />
            <Route
              path={'/education'}
              exact
              render={() => <Education education={education} />}
            />
            <Route
              path={'/languages'}
              exact
              render={() => <Languages languages={languages} />}
            />
            <Redirect to={'/'} />
          </Switch>
        </section>

      </HashRouter >
    );
  }
}

export default App;
