import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Helmet from './Helmet';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <div className="layout-container">
      <Helmet />
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={props.location.pathname}
          timeout={500}
          classNames="fade"
        >
          {props.children}
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}
