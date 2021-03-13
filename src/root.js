// @flow
import React from 'react';
import {assetUrl} from 'fusion-core';
import {Route, Switch} from 'fusion-plugin-react-router';
import {styled} from 'fusion-plugin-styletron-react';

import {BackgroundDarkWhite} from './styles';
import HomePage from './home-page/home-page.js';
import UploadPage from './upload-page/upload-page.js';
import ItemListPage from './item-list/item-list-page';
import PageNotFound from './404-page/pageNotFound.js';
import SharedHeaderThing from './shared-header/shared-header-thing';
import SharedFooterThing from './shared-footer/shared-footer-thing';
import ConlangPage from './conlang-page/conlang-page';

const Wrapper = styled('div', {
  backgroundImage: `url(${assetUrl('./assets/something.png')})`,
})

// Header height: 50px
// Footer height: 260px
const PageContainer = styled('div', {
  backgroundColor: BackgroundDarkWhite,
  fontFamily: 'HelveticaNeue-Light, Arial',
  minHeight: 'calc(100vh - 50px - 260px)',
  maxWidth: '1420px',
  margin: '64px auto 14px',
});

const root = (
  <Wrapper>
    <SharedHeaderThing />
    <PageContainer>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact name="upload" path="/upload" component={UploadPage} />
        <Route exact name="conlang" path="/conlang" component={ConlangPage} />
        <Route exact path="/list" component={ItemListPage} />
        <Route component={PageNotFound} />
      </Switch>
    </PageContainer>
    <SharedFooterThing />
  </Wrapper>
);

export default root;
