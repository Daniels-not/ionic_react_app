import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonRouterLink, IonIcon, IonLabel } from '@ionic/react';
import { flameOutline, newspaperOutline, waterOutline, schoolOutline, personOutline, accessibilityOutline, menuOutline } from 'ionicons/icons';
import Home from '../pages/Home';

function Tabs() {
  return (
    <>
      {/* Sidebar */}
      <IonMenu contentId="main-content" type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <ul className="ion-padding">
            <li className="ion-margin-bottom">
              <IonRouterLink
                routerLink="/"
                routerDirection="none"
                className="ion-link flex items-center space-x-2 text-sm py-2 px-4 rounded hover:bg-gray-200 active:bg-gray-300"
              >
                <IonIcon icon={flameOutline} className="text-3xl" />
                <IonLabel className="text-base">Home</IonLabel>
              </IonRouterLink>
            </li>
            <li className="ion-margin-bottom">
              <IonRouterLink
                routerLink="/tabs/News"
                routerDirection="none"
                className="ion-link flex items-center space-x-2 text-sm py-2 px-4 rounded hover:bg-gray-200 active:bg-gray-300"
              >
                <IonIcon icon={newspaperOutline} className="text-3xl" />
                <IonLabel className="text-base">News</IonLabel>
              </IonRouterLink>
            </li>
            <li className="ion-margin-bottom">
              <IonRouterLink
                routerLink="/tabs/Weather"
                routerDirection="none"
                className="ion-link flex items-center space-x-2 text-sm py-2 px-4 rounded hover:bg-gray-200 active:bg-gray-300"
              >
                <IonIcon icon={waterOutline} className="text-3xl" />
                <IonLabel className="text-base">Weather</IonLabel>
              </IonRouterLink>
            </li>
            <li className="ion-margin-bottom">
              <IonRouterLink
                routerLink="/tabs/UniversitySearch"
                routerDirection="none"
                className="ion-link flex items-center space-x-2 text-sm py-2 px-4 rounded hover:bg-gray-200 active:bg-gray-300"
              >
                <IonIcon icon={schoolOutline} className="text-3xl" />
                <IonLabel className="text-base">University Search</IonLabel>
              </IonRouterLink>
            </li>
            <li className="ion-margin-bottom">
              <IonRouterLink
                routerLink="/tabs/AgePrediction"
                routerDirection="none"
                className="ion-link flex items-center space-x-2 text-sm py-2 px-4 rounded hover:bg-gray-200 active:bg-gray-300"
              >
                <IonIcon icon={personOutline} className="text-3xl" />
                <IonLabel className="text-base">Age Prediction</IonLabel>
              </IonRouterLink>
            </li>
            <li className="ion-margin-bottom">
              <IonRouterLink
                routerLink="/tabs/GenderPredictor"
                routerDirection="none"
                className="ion-link flex items-center space-x-2 text-sm py-2 px-4 rounded hover:bg-gray-200 active:bg-gray-300"
              >
                <IonIcon icon={accessibilityOutline} className="text-3xl" />
                <IonLabel className="text-base">Gender Prediction</IonLabel>
              </IonRouterLink>
            </li>
          </ul>
        </IonContent>
      </IonMenu>

      {/* Main content */}
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Main</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </>
  );
}

export default Tabs;
