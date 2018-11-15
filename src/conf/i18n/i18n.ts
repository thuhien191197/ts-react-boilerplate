import * as en from 'react-intl/locale-data/en'
import * as vi from 'react-intl/locale-data/vi'
import { addLocaleData } from 'react-intl'


// TODO: Make lazy load when user request

export const settingI18n = () => {
	addLocaleData([...en, ...vi])
}
