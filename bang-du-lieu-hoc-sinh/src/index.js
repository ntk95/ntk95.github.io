import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import studentReducer from './reducers/studentReducer';
import {Provider} from 'react-redux'

let initialState = [{id:1,name:'Hung',grade:1,school:'Nhan Chinh'},{id:2,name:'Nam',grade:2,school:'Thanh Xuan Trung'}
,{id:3,name:'Tu',grade:3,school:'Phan Dinh Giot'},{id:4,name:'Giang',grade:4,school:'Tran Hung Dao'}];

if( localStorage.getItem("students") === null)
localStorage.setItem('students',JSON.stringify(initialState));
else 
initialState = JSON.parse(localStorage.getItem('students'));

const store = createStore(studentReducer,initialState);


ReactDOM.render(
<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
