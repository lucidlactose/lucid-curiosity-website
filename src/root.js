// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';

import {styled} from 'fusion-plugin-styletron-react';
import HomePage from './home-page/home-page.js';
import ItemListPage from './item-list/item-list-page';
import PageNotFound from './404-page/pageNotFound.js';
import SharedHeaderThing from './shared-header/shared-header-thing';
import SharedFooterThing from './shared-footer/shared-footer-thing';

const PageContainer = styled('div', {
  marginTop: '64px 0',
  padding: '64px 64px 32px',
});

const root = (
  <>
    <SharedHeaderThing />
    <PageContainer>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={ItemListPage} />
        <Route component={PageNotFound} />
      </Switch>
    </PageContainer>
    <SharedFooterThing />
  </>
);

export default root;
