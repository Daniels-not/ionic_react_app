import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

// Import the SVG file
import toolboxSVG from '../assets/icons8-toolbox.svg';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> 
        {/* Display the SVG image */}
        <div className="flex justify-center items-center h-full">
          <img src={toolboxSVG} alt="Toolbox" className="h-42 w-auto" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
