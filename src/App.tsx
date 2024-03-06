import React from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tabs from './components/Tabs';

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
import AgePrediction from './pages/AgePrediction';
import GenderPrediction from './pages/GenderPrediction';
import NewsView from './pages/NewsView';
import UniversitySearch from './pages/UniversitySearch';
import WeatherForecast from './pages/WeatherForecast';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Tabs />
      <IonRouterOutlet id="main-content">
        <Route path="/" component={Home} exact={true} />
        <Route path="/tabs/News" component={NewsView} exact={true} />
        <Route path="/tabs/Weather" component={WeatherForecast} exact={true} />
        <Route path="/tabs/UniversitySearch" component={UniversitySearch} exact={true} />
        <Route path="/tabs/AgePrediction" component={AgePrediction} exact={true} />
        <Route path="/tabs/GenderPredictor" component={GenderPrediction} exact={true} />
        <Redirect exact from="/tabs" to="/" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
