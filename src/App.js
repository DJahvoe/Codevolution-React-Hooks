import React, { useReducer } from 'react';
import './App.css';
import ClassCounter from './components/1_useState/ClassCounter';
import HookCounter from './components/1_useState/HookCounter';
import HookCounterTwo from './components/1_useState/HookCounterTwo';
import ClassCounterTwo from './components/1_useState/ClassCounterTwo';
import HookCounterThree from './components/1_useState/HookCounterThree';
import HookCounterFour from './components/1_useState/HookCounterFour';

import ClassCounterOne from './components/2_useEffect/ClassCounterOne';
import HookCounterOne from './components/2_useEffect/HookCounterOne';
import ClassMouse from './components/2_useEffect/ClassMouse';
import HookMouse from './components/2_useEffect/HookMouse';
import MouseContainer from './components/2_useEffect/MouseContainer';
import IntervalClassCounter from './components/2_useEffect/IntervalClassCounter';
import IntervalHookCounter from './components/2_useEffect/IntervalHookCounter';
import DataFetching from './components/2_useEffect/DataFetching';

import ComponentC from './components/3_useContext/ComponentC';

import CounterOne from './components/4_useReducer/CounterOne';
import CounterTwo from './components/4_useReducer/CounterTwo';
import CounterThree from './components/4_useReducer/CounterThree';
import ComponentAHooks from './components/4_useReducer/withContext/ComponentA';
import ComponentBHooks from './components/4_useReducer/withContext/ComponentB';
import ComponentCHooks from './components/4_useReducer/withContext/ComponentC';
import DataFetchingOne from './components/4_useReducer/DataFetchingOne';
import DataFetchingTwo from './components/4_useReducer/DataFetchingTwo';

import ParentComponent from './components/5_useCallback (function cache)/ParentComponent';

import Counter from './components/6_useMemo (function return value cache)/Counter';

import FocusInput from './components/7_useRef/FocusInput';
import ClassTimer from './components/7_useRef/ClassTimer';
import HookTimer from './components/7_useRef/HookTimer';

import DocTitleOne from './components/8_custom_hooks/DocTitleOne';
import DocTitleTwo from './components/8_custom_hooks/DocTitleTwo';
import CustomCounterOne from './components/8_custom_hooks/CustomCounterOne';
import CounterCustomTwo from './components/8_custom_hooks/CustomCounterTwo';
import UserForm from './components/8_custom_hooks/UserForm';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		case 'reset':
			return initialState;
		default:
			return state;
	}
};
function App() {
	const [count, dispatch] = useReducer(reducer, initialState);
	return (
		<div className='App'>
			{/* useState hooks */}
			{/* <ClassCounter /> */}
			{/* <ClassCounterTwo /> */}
			{/* <HookCounter /> */}
			{/* <HookCounterTwo /> */}
			{/* <HookCounterThree /> */}
			{/* <HookCounterFour /> */}

			{/* useEffect hooks */}
			{/* <ClassCounterOne /> */}
			{/* <ClassMouse /> */}
			{/* <HookCounterOne /> */}
			{/* <MouseContainer /> */}
			{/* <IntervalClassCounter /> */}
			{/* <IntervalHookCounter /> */}
			{/* <DataFetching /> */}

			{/* useContext hooks */}
			{/* <UserContext.Provider value={'Sav'}>
				<ChannelContext.Provider value={'Corporation'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider> */}

			{/* useReducer hooks */}
			{/* <CounterOne /> */}
			{/* <CounterTwo /> */}
			{/* <CounterThree /> */}
			{/* <DataFetchingOne /> */}
			{/* <DataFetchingTwo /> */}

			{/* useReducer with useContext */}
			{/* <CountContext.Provider
				value={{ countState: count, countDispatch: dispatch }}
			>
				<div>
					Count - {count}
					<ComponentAHooks />
					<ComponentBHooks />
					<ComponentCHooks />
				</div>
			</CountContext.Provider> */}

			{/* useCallback hooks */}
			{/* <ParentComponent /> */}

			{/* useMemo hooks */}
			{/* <Counter /> */}

			{/* useRef hooks */}
			{/* <FocusInput /> */}
			{/* <ClassTimer /> */}
			{/* <HookTimer/> */}

			{/* custom hooks */}
			{/* <DocTitleOne /> */}
			{/* <DocTitleTwo /> */}
			{/* <CustomCounterOne /> */}
			{/* <CounterCustomTwo /> */}
			<UserForm />
		</div>
	);
}

export default App;
