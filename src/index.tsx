import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/GlobalStyles';
import defaultTheme from './styles/theme/defaultTheme';
import { store } from './app/store';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <App />
      </Provider>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);

reportWebVitals();
