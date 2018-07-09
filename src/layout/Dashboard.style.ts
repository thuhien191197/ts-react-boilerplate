import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import {
  drawerWidth,
  transition,
} from '../theme/default'

const dashboardStyle = (theme: Theme) => createStyles({
  root: {
	padding: theme.spacing.unit * 10,
  },
  mainPanel: {
	width: '100%',
	[theme.breakpoints.up('md')]: {
		width: `calc(100% - ${drawerWidth}px)`,
	},
	overflow: 'auto',
	position: 'relative',
	float: 'right',
	...transition,
	maxHeight: '100%',
	overflowScrolling: 'touch',
  },
  wrapper: {
	position: 'relative',
	top: '0',
	height: '100vh',
  },
})
export default dashboardStyle
