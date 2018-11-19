import * as Immutable from 'seamless-immutable'
import classnames from 'classnames'
import React from 'react'
import { concatPath } from 'util/route'
import { connect } from 'react-redux'
import { Location } from 'history'
import { push } from 'connected-react-router'
import { RouteComponentProps, withRouter } from 'react-router'

import {
	Button,
	Classes,
	H5,
	IMenuItemProps,
	Icon,
	Intent,
	Menu,
	MenuDivider,
	MenuItem,
	Popover,
	Position,
	Text,
} from '@blueprintjs/core'
import {
	compose,
	pure,
	renderComponent,
	withStateHandlers,
} from 'recompose'


const  styles = require('../scss/style.scss')

type ILinkPropsOut = IMenuItemProps & {
	// isActive: boolean,
	path: string
}
type ReduxProps = {
	push: typeof push
}
type ILinkPropsIn = ILinkPropsOut & RouteComponentProps<any> & ReduxProps
const isRouteEqualPathname = (location: Location, pathLink: string) => {
	return	(pathLink === location.pathname && true)
			|| (location.pathname === pathLink && true)
			|| false
}
const LinkItemView = ({ icon, text, path, match, location, history, push }: ILinkPropsIn) => {
	const updatePath = concatPath(match.url)
	// const fullPath = updatePath(path)
	// console.log('')
	return (
		<MenuItem
			onClick={() => push(path)}
			icon={icon}
			active={isRouteEqualPathname(location, path)}
			className={Classes.POPOVER_DISMISS}
			text={
				text
			}
		/>
	)
}

const LinkItem = compose<ILinkPropsIn, ILinkPropsOut>(withRouter, connect(undefined, {push}))(LinkItemView)
const SlideBar = () => (
	<section className={'o-menu--vertical'}>
		<Menu>
			<MenuDivider title="NAVIGATION" />
			<LinkItem icon="lock" text="Setting" path="/setting"  />
			<LinkItem icon="lock" text="Dashboard" path="/"  />
		</Menu>
		<Menu>
			<MenuDivider title="Test" />
			<LinkItem icon="lock" text="Organization" path="/t-test/auth" />
			<LinkItem icon="lock" text="Login" path="/auth" />
		</Menu>
		<Menu>
			<MenuDivider title="Example" />
			<LinkItem icon="lock" text="Man" path="/man" />
			<LinkItem icon="lock" text="Hien" path="/hien" />
		</Menu>

	</section>
)

interface IOpenState {
	isOpen: boolean
}
interface IOpenHandler {
	hide: () => void
	show: () => void
	toggle: () => void
}

interface IMenuContentPropOut {}
interface IMenuContentPropIn extends IOpenState, IOpenHandler {}
const addOpenStateHandler = withStateHandlers(
	{
		isOpen: false,
	},
	{
		hide: () => () => ({ isOpen: false }),
		show: () => () => ({ isOpen: true }),
		toggle: ({ isOpen }) => () => ({ isOpen: !isOpen }),
	},
)
const MenuContentView = ({ isOpen, show, hide, toggle }: IMenuContentPropIn) => (
	<>
		<Popover
			position={Position.BOTTOM}
		>
			<Button className={Classes.MINIMAL} icon="menu">
				MENU
			</Button>
			<SlideBar />
		</Popover>
	</>
)

 export const MenuContent = compose<IMenuContentPropIn, IMenuContentPropOut>(pure, addOpenStateHandler)(MenuContentView)
