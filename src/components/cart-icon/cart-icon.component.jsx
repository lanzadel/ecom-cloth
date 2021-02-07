import React from 'react';
import { connect } from 'react-redux';

import { toggleCarteHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.style.scss';

const CartIcon = ({toggleCarteHidden}) => (
	<div className='cart-icon' onClick={toggleCarteHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
)

const mapDispatchToProps = dispatch => ({
	toggleCarteHidden: () => dispatch(toggleCarteHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);