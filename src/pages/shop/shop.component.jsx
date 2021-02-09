import React from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';


const ShopPage = ({match}) => (
	
	<div className='shope-page'>
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:categoryId`} component={CollectionPage} />		
	</div>
)

export default ShopPage;