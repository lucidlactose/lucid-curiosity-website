// @flow
import React from 'react';
import {Route, Switch} from 'fusion-plugin-react-router';

import {styled} from 'fusion-plugin-styletron-react';
import {BackgroundDarkWhite} from './styles';
import HomePage from './home-page/home-page.js';
import UploadPage from './upload-page/upload-page.js';
import ItemListPage from './item-list/item-list-page';
import PageNotFound from './404-page/pageNotFound.js';
import SharedHeaderThing from './shared-header/shared-header-thing';
import SharedFooterThing from './shared-footer/shared-footer-thing';

const PageContainer = styled('div', {
  backgroundColor: BackgroundDarkWhite,
  fontFamily: 'HelveticaNeue-Light, Arial',
  minHeight: 'calc(100vh - 370px)',
  maxWidth: '1420px',
  margin: '64px auto 14px',
});

const root = (
  <>
    <SharedHeaderThing />
    <PageContainer>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/upload" component={UploadPage} />
        <Route exact path="/list" component={ItemListPage} />
        <Route component={PageNotFound} />
      </Switch>
    </PageContainer>
    <SharedFooterThing />
  </>
);

export default root;
