import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
// import { SessionVaultProvider } from './core/SessionVaultProvider';
import { PrivateRoute } from './core/PrivateRoute';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import LoginPage from './pages/login/LoginPage';
import AuthProvider from './core/AuthProvider'
import AuthActionCompletePage from './pages/auth-action-complete/AuthActionCompletePage';
import SplashContainer from './components/splash/SplashContainer';
import TeaProvider from './core/TeaProvider';
import TeaListPage from './pages/tea/TeaListPage';
import StartPage from './pages/start/StartPage';
import DatabaseProvider from './core/databaseProvider';
import TastingNotesDbProvider from './core/TastingNotesDbProvider';
import TeaCategoriesDbProvider from './core/TeaCategoriesDbProvider';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* <SessionVaultProvider> */}
    <AuthProvider>
      <IonReactRouter>
        <SplashContainer>
          <IonRouterOutlet>
            <Route exact path='/auth-action-complete'>
              <AuthActionCompletePage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/">
              <StartPage />
            </Route>
            <Route exact path='/teas'>
              <PrivateRoute>
                <DatabaseProvider>
                  <TastingNotesDbProvider>
                    <TeaCategoriesDbProvider>
                      <TeaProvider>
                        <TeaListPage />
                      </TeaProvider>
                    </TeaCategoriesDbProvider>
                  </TastingNotesDbProvider>
                </DatabaseProvider>
              </PrivateRoute>
            </Route>
          </IonRouterOutlet>
        </SplashContainer>
      </IonReactRouter>
    </AuthProvider>
    {/* </SessionVaultProvider> */}
  </IonApp>
);

export default App;
