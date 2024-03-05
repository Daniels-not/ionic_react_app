import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { flameOutline, newspaperOutline, waterOutline, schoolOutline, personOutline, accessibilityOutline} from 'ionicons/icons';
import { Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import NewsView from '../pages/NewsView';
import WeatherForecast from '../pages/WeatherForecast';
import UniversitySearch from '../pages/UniversitySearch';
import AgePrediction from '../pages/AgePrediction';
import GenderPrediction from '../pages/GenderPrediction';

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      {/* Define your routes for each tab */}
      <Route path="/tabs/Home" component={Home} exact={true} />
      <Route path="/tabs/News" component={NewsView} exact={true} />
      <Route path="/tabs/Weather" component={WeatherForecast} exact={true} />
      <Route path="/tabs/UniversitySearch" component={UniversitySearch} exact={true} />
      <Route path="/tabs/AgePrediction" component={AgePrediction} exact={true} />
      <Route path="/tabs/GenderPredictor" component={GenderPrediction} exact={true} />
      <Redirect exact from="/tabs" to="/tabs/Home" />
    </IonRouterOutlet>
    
    <IonTabBar slot="bottom" className="rounded">
      {/* Define each tab button */}
      <IonTabButton tab="Home" href="/tabs/Home">
        <IonIcon icon={flameOutline} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="News" href="/tabs/News">
        <IonIcon icon={newspaperOutline} />
        <IonLabel>News</IonLabel>
      </IonTabButton>
      <IonTabButton tab="Weather" href="/tabs/Weather">
        <IonIcon icon={waterOutline} />
        <IonLabel>Weather</IonLabel>
      </IonTabButton>
      <IonTabButton tab="UniversitySearch" href="/tabs/UniversitySearch">
        <IonIcon icon={schoolOutline}/>
        <IonLabel>University Search</IonLabel>
      </IonTabButton>
      <IonTabButton tab="AgePrediction" href="/tabs/AgePrediction">
        <IonIcon icon={personOutline}/>
        <IonLabel>Age Prediction</IonLabel>
      </IonTabButton>
      <IonTabButton tab="GenderPredictor" href="/tabs/GenderPredictor">
        <IonIcon icon={accessibilityOutline}/>
        <IonLabel>Gender Prediction</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
