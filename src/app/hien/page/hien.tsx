// import { createTabHien } from '../com-hien/createTabHien'
import { Switch } from '@blueprintjs/core'
import { createTab } from 'com/index'
import { TRootState } from 'conf/redux/reducer'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose, pure } from 'recompose'
import { Dispatch } from 'redux'
const style = require('../scss/style.scss')



const SettingPageView = () => (
	<>
		<div className="main-display">
			<h1 className="main-h1">
				I'm main
			</h1>
		</div>
		<div className={style.iAmOnlyOne}>
			I'm only one
		</div>
		<h1 className="title sub-title">Hello Apollo13</h1>
		<div className="mixin">
			<button className="login-button">MIXIN</button>
		</div>
		<input className="input-2"/>
		<div className="testFunction">
			FUNCTION
		</div>
		<div className="mad">
			TEST MIXIN
		</div>
		<div className="sidebar">
		Sidebar
		</div>
		<div className="p-h-xl">
		Spacing
		</div>

	</>
)
const SpecialCom = () => (<h1>Abc</h1>)

const AddTab = createTab({
	breadcrumbItems: [
		{
			text: 'Grand',
			href: '#',
		},
		{
			text: 'Parent',
			href: '#',
		},
	],
	tabs: [
		{
			id: 'hien1',
			panel: <SettingPageView />,
			title: 'Hien 1',
		},
		{
			id: 'hien2',
			panel: <SpecialCom />,
			title: 'Hien 2',
		},
	],
})

export const HienPage = compose(pure)(AddTab)