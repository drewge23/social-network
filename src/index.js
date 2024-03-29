import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntirePage = () => {
  root.render(
    <React.StrictMode>
        <StoreContext.Provider value={store}>
            <App store={store} 
                state={store.getState()}
                dispatch={store.dispatch.bind(store)} />
        </StoreContext.Provider>
    </React.StrictMode>
  );
}

// in case renderEntirePage needs state
// store.subscribe(() => {
//     let state = store.getState();
//     renderEntirePage(state);
// })

store.subscribe(renderEntirePage);
renderEntirePage();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
