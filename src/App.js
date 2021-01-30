
import { useKeycloak } from '@react-keycloak/web';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch, useHistory, useLocation } from 'react-router-dom'
import './App.scss';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer'
import Header from './components/Header'
import Welcome from './components/Welcome';
import { Container, Jumbotron } from 'react-bootstrap';
import LoginModal from './components/LoginModal';
import { AlertTriangle } from 'react-feather';


function App() {
  const { keycloak, initialized } = useKeycloak()
  const [userInfo, setUserInfo] = useState({})
  const [showAuthError, setShowAuthError] = useState(false)

  setTimeout(() => {
    setShowAuthError(true)
  }, 1000)

  useEffect(() => {
    if (initialized && keycloak.authenticated)
      keycloak.loadUserInfo()
        .then((info) => {
          setUserInfo(info)
        })
        .catch((error) => setUserInfo({}))
  }, [keycloak, initialized])

  return (initialized
    ?
    <div className="App">
      <Router>
        <Header userInfo={userInfo} />
        <Container className="mt-5">
          <Switch>
            {initialized &&
              (keycloak.authenticated
                ?
                <Route path="/" component={Dashboard} />
                :
                <>
                  <Route path="/login" component={LoginModal} />
                  <Route path="/" exact component={Welcome} />
                </>
              )
            }
          </Switch>
        </Container>
        <Footer />
      </Router>
    </div>
    :
    <Container className="p-5 mx-auto text-dark">
      <Jumbotron className="bg-warning text-center" hidden={!showAuthError}>
        <AlertTriangle className="mx-auto mb-5" size="80" />
        <h1>Connecting to the authentication server is taking longer than expected...</h1>
        <h4>If you are the administrator of this app, you might need to check that the server is up and running!</h4>
      </Jumbotron>
    </Container>
  )
}

export default App
