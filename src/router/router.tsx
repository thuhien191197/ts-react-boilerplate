import { compose, mapObjIndexed, omit, values } from 'ramda'
import * as React from 'react'
import { Switch } from 'react-router'

import { createBrowserHistory } from 'history'
// import { RootState } from '../reducers';
// import DashBoard from 'layout/Dashboard'
import { getPageList } from 'module/helper/module'
import {
  Route,
  Router } from 'react-router-dom'
import { compose as recompose, pure } from 'recompose'
import { DashBoardBluePrint } from '../layout/DashboardBluePrint'
const hist = createBrowserHistory()

const pages = getPageList()
const renderDashBoard = (props: any) => {
	const convertRouteComponent = mapObjIndexed((page: any, key: string) => (
		<Route
		{...page}
		key={key}
		/>
	))
	const routesRender = compose(values, convertRouteComponent)(pages)

	const pageIgnore = [
		'todoSingle',
	]
	const slidebarRoutes = compose(values, omit(pageIgnore))(pages)
	return (
		<DashBoardBluePrint routes={values(pages)} {...props} >
			<Switch>
				{routesRender}
			</Switch>
		</DashBoardBluePrint>
	)
}
const AppRouteView = () => (
	<>
		<Router history={hist}>
			<Switch>
				<Route path={''} render={renderDashBoard}>
				</Route>
			</Switch>
		</Router>
	</>
)
export const AppRoute = recompose(pure)(AppRouteView)
