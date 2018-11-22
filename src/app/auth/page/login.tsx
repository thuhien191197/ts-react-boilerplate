import classnames from 'classnames'
import React, { memo } from 'react'
import { addContainer } from 'layout/default/createContainer'
import { compose, pure } from 'recompose'


const style = require('../scss/authentication.scss')

const LoginView = () => {
	return (
		<div className={classnames(style.card, `${style.card}__image`, 't-background3', 'u-flex--1', 'u-flex--center')}>
			<button
				type="submit"
				className={classnames(`${style.card}__btn`, 'm-t-md', 'u-flex--center')}
			>
				SIGN IN
			</button>
		</div>
	)
}


export const LoginPage = compose(
	memo,
	addContainer(
		{
			breadcrumbItems: ['Login'],
		},
	),
)(LoginView)
