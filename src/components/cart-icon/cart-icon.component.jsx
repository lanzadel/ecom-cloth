import React from 'react';
import { connect } from 'react-redux';

import { toggleCarteHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = ({toggleCarteHidden, itemCount}) => (
	<div className='cart-icon' onClick={toggleCarteHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
)

const mapDispatchToProps = dispatch => ({
	toggleCarteHidden: () => dispatch(toggleCarteHidden())
})

const mapStateToProps = state => ({
	itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);