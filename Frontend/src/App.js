import 'bootstrap/dist/css/bootstrap.min.css'; //1
import './App.css'; //2
import {Auth0Provider} from '@auth0/auth0-react'
import Routes from './Routes/Routes';
//sadasd
function App() {
  return (
  <div className='App'>
      <Auth0Provider 
      domain="app-ventas.us.auth0.com"
      clientId="LpVzZM2UWoOtpMZyZZai0mjcMYa7xsES"
      redirectUri={window.location.origin}>

        
      <Routes /> 
    </Auth0Provider>
  </div>
  );
}

export default App;
