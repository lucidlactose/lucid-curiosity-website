// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';

import Home from './home-page/home.js';
import PageNotFound from './404-page/pageNotFound.js';
import ItemListPage from './item-list/item-list-page';
import SharedHeaderThing from './shared-header/shared-header-thing';
// import SharedFooterThing from './shared-footer/shared-footer-thing';
import {styled} from 'fusion-plugin-styletron-react';

const PageContainer = styled('div', {
  position: 'relative',
  minHeight: '110vh',
  maxWidth: '1420px',
  margin: '0 auto',
});

const root = (
  <>
    <PageContainer>
      <SharedHeaderThing />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={ItemListPage} />
        <Route component={PageNotFound} />
      </Switch>
    </PageContainer>
    {/*<SharedFooterThing />*/}
  </>
);

export default root;
