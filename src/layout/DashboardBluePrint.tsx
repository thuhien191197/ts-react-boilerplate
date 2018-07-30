import {
	Alignment,
	Breadcrumb,
	Button,
	Card,
	Classes,
	H5,
	IMenuItemProps,
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
	OverflowList,
	Popover,
	Tab,
	Tabs,
} from '@blueprintjs/core'
import * as classnames from 'classnames'
import { css } from 'emotion'
import * as React from 'react'
import { compose, pure, withState, withStateHandlers } from 'recompose'
import './DashboardBluePrint.scss'
import { MainTab } from './MainTab'
import { SearchBox } from './SearchBox'
import { SwitchTheme } from './SwitchTheme'
import { UserBox } from './UserBox'

const MenuContent = () => (
	<div className="">
		This will show Menu Content
	</div>
)



interface IMenuPropsOut {

}
interface IMenuState {
	isOpen: boolean
}
interface IMenuHandler {
	popUpMenu: () => void
}
interface IMenuPropsIn extends IMenuPropsOut, IMenuState, IMenuHandler {

}
const MenuView = ({ isOpen, popUpMenu }: IMenuPropsIn) => (
	<Popover
		popoverClassName={Classes.POPOVER_CONTENT_SIZING}
		portalClassName="foo"
		enforceFocus={false}
		isOpen={isOpen}
		content={<MenuContent />}
		position="bottom-left"

	>
		<Button className={Classes.MINIMAL} icon="menu" text="Menu" onClick={popUpMenu} />
	</Popover>
)

const generateState = withStateHandlers(
	{
		isOpen: false,
	},
	{
		popUpMenu: ({ isOpen }) => () => ({ isOpen: !isOpen }),
	},
)

const EnhanceMenuView = compose<IMenuPropsIn, IMenuPropsOut>(generateState, pure)(MenuView)

const DashBoard = () => (
	<div >
	 	<Navbar>
			<NavbarGroup className="nav">
				<NavbarHeading>
					<img src={'https://demo.trackitforlife.com/static/assets/img/logotext.png'} className="logo"/>
				</NavbarHeading>
				<NavbarDivider />
				<EnhanceMenuView />
				<div className="rightAvatar">
					<SearchBox />
					{/* <Button className={Classes.MINIMAL} icon="document" text="Files" /> */}
					<UserBox />
				</div>
			</NavbarGroup>
		</Navbar>
		<MainTab />
	</div>
)

export const DashBoardBluePrint = compose(pure)(DashBoard)