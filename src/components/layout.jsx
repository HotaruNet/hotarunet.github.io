import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Helmet from './helmet';
import Header from './header';
import Footer from './footer';

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
