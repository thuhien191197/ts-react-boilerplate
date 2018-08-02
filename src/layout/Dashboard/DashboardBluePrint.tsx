import {
	Button,
	Classes,
	Dialog,
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
	Popover,
} from '@blueprintjs/core'
import * as React from 'react'
import { compose, pure, withState, withStateHandlers } from 'recompose'
// const styles = require('./DashboardBluePrint.scss.json')
import { MainTab } from './MainTab'
import { SearchBox } from './SearchBox'
import { UserBox } from './UserBox'
const  styles = require('./DashboardBluePrint.scss')

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
	<>
		<Dialog isOpen={isOpen} backdropClassName={styles.menuDiaglogSibling}>
			<MenuContent />
		</Dialog>
		<Button className={Classes.MINIMAL} icon="menu" text="Menu" onClick={popUpMenu} />
	</>
	// <Popover
	// 	popoverClassName={Classes.POPOVER_CONTENT_SIZING}
	// 	portalClassName="foo"
	// 	enforceFocus={false}
	// 	isOpen={isOpen}
	// 	content={<MenuContent />}
	// 	position="bottom-left"
	// >
	// 	<Button className={Classes.MINIMAL} icon="menu" text="Menu" onClick={popUpMenu} />
	// </Popover>
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

interface IDashboardPropsIn {
	children: any
}
const DashBoard = ({ children }: IDashboardPropsIn) => (
	<div className="dashboard-app">
	 	<Navbar>
			<NavbarGroup className="nav">
				<NavbarHeading>
					<img src={'https://demo.trackitforlife.com/static/assets/img/logotext.png'} className={styles.logo}/>
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
		<MainTab children={children}/>
	</div>
)

export const DashBoardBluePrint = compose(pure)(DashBoard)