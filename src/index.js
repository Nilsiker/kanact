import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './components/Keycloak'
ReactDOM.render(
  <React.StrictMode>
    <ReactKeycloakProvider authClient={keycloak}>
      <App />
    </ReactKeycloakProvider>
  </React.StrictMode >,
  document.getElementById('root')
);