/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import 'solid-devtools';
import { Route, Router } from '@solidjs/router';
import Homepage from './pages/homepage';
import NotFound from './pages/404';
import Honigverkostung from './pages/honey';
import { Component, ComponentProps } from 'solid-js';
import Footer from './components/footer';
import Header from './components/header';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

const Layout: Component = (props: any) => {
  return (
    <>
      <Header/>
      {props.children}
      <Footer/>
    </>
  )
}

render(() => (
  <Router root={Layout}>
    <Route path="/" component={Homepage}/>
    <Route path="/honigverkostung" component={Honigverkostung}/>
    <Route path="*" component={NotFound} />
  </Router>),
root!);
