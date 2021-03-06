import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Layout from 'demo/Layout';
import AddressDemo from 'demo/Address';
import AlertsDemo from 'demo/Alerts';
import BadgesDemo from 'demo/Badges';
import BubblesDemo from 'demo/Bubbles';
import ButtonsDemo from 'demo/Buttons';
import CardsDemo from 'demo/Cards';
import InputsDemo from 'demo/Inputs';
import HomeDemo from 'demo/Home';
import AlignmentDemo from 'demo/Alignment';
import TreesDemo from 'demo/Trees';
import DrawersDemo from 'demo/Drawers';
import MenusDemo from 'demo/Menus';
import HeadingsDemo from 'demo/Headings';
import ModalsDemo from 'demo/Modals';
import NavsDemo from 'demo/Navs';
import OverlaysDemo from 'demo/Overlays';
import RangesDemo from 'demo/Ranges';
import TabsDemo from 'demo/Tabs';
import TogglesDemo from 'demo/Toggles';
import ToastsDemo from 'demo/Toasts';

export default (
  <Route path="/" component={Layout}>
    <IndexRedirect to="/home" />
    <Route path="home" component={HomeDemo} />
      <Route path="address" component={AddressDemo} />
      <Route path="badges" component={BadgesDemo} />
      <Route path="alerts" component={AlertsDemo} />
      <Route path="bubbles" component={BubblesDemo} />
      <Route path="buttons" component={ButtonsDemo} />
      <Route path="cards" component={CardsDemo} />
      <Route path="inputs" component={InputsDemo} />
      <Route path="alignment" component={AlignmentDemo} />
      <Route path="drawers" component={DrawersDemo} />
      <Route path="menus" component={MenusDemo} />
      <Route path="modals" component={ModalsDemo} />
      <Route path="navs" component={NavsDemo} />
      <Route path="headings" component={HeadingsDemo} />
      <Route path="overlays" component={OverlaysDemo} />
      <Route path="ranges" component={RangesDemo} />
      <Route path="tabs" component={TabsDemo} />
      <Route path="toasts" component={ToastsDemo} />
      <Route path="trees" component={TreesDemo} />
      <Route path="toggles" component={TogglesDemo} />
  </Route>
);
