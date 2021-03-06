import { getTypographyByEm } from '../helper/typography'
import { getEm } from '../helper/unit'

const generalTypography = {
	// fontFamily: isIOS() ? 'FontAwesome' : 'Roboto',
	fontSize: 14,
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightMedium: 500,
}

const em = getEm(generalTypography.fontSize)

const materialTypography = getTypographyByEm(em, generalTypography)

export const typography = materialTypography

export type TTypography = typeof typography
