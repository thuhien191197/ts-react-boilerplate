import { Button, InputGroup } from '@blueprintjs/core'
import * as classnames from 'classnames'
import * as React from 'react'
import { compose, pure, withStateHandlers } from 'recompose'
import { ITextState, ITextStateHandle, textState } from '../com/onChangeText'
import { HienToDoPage } from './hienToDo'
const style = require('../scss/style.scss')

export interface IHelloPropsOut {

}

export interface IHelloState{
	result: string,
	isHidden: boolean,
}


export interface IHelloStateHandle extends ITextStateHandle{
	handleChangeText: (text:string) => void,
	onClickButton: () => void,

}


interface IHelloPropsIn extends IHelloPropsOut, IHelloState, IHelloStateHandle, ITextState {

}


export const helloState = withStateHandlers<IHelloState, any, any>(
	{
		// text: '',
		result: '',
		isHidden: true,
	},
	{
		handleChangeText: () => (text) => {
			console.log('textInput:', text)
			return (
				{
					result: 'Hello ' + text + ' ^^',
				}
			)
		},
		onClickButton: ({ isHidden }) => () => ({ isHidden: !isHidden }),
		// handleKeyPress: () => (event) => {
		// 	if (e.key === 'Enter') {
		// 		{handleChangeText}
		// 	  }
		// 	return(
		// 		{
		// 			result: 'Hello ' + text,
		// 		}
		// 	)
		// },
	},
)


const HienHelloView = ({ text, handleChangeText, result, onClickButton, isHidden, onChangeText }: IHelloPropsIn) => {
	return (
		<>
			<h3 className={classnames(style.title, 'p-b-sm')}>SAY SOMETHING</h3>
			<InputGroup type="text" placeholder="What is your name?" value={text}
				large={true}
				onKeyPress={event => event.key === 'Enter' ? handleChangeText(text) : null}
				onChange={(event: any) => onChangeText(event.target.value)} />
			<Button onClick={() => handleChangeText(text)} >
				Done
			</Button>
			{/* {isHidden ? '' : result } */}
			<div className="p-t-sm">
				{result}
			</div>
			<HienToDoPage textHello= {text}/>
		</>
	)
}

export const HienHelloPage = compose<IHelloPropsIn, IHelloPropsOut>(helloState, textState)(HienHelloView)