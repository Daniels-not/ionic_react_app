import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonAlert } from '@ionic/react';

// Import the SVG file
import toolboxSVG from '../assets/icons8-toolbox.svg';

const Home: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [alertLanguage, setAlertLanguage] = useState('Spanish');

  useEffect(() => {
    setShowAlert(true);
  }, []);

  const handleLanguageChange = (newLanguage: string) => {
    setAlertLanguage(newLanguage);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Map</IonTitle>
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
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Menu Issue'}
        message={alertLanguage === 'english' ? 
          "If the menu stops working, simply open it manually by holding the top left corner and dragging it to the right. This issue will be resolved in the next update. Please note that it only affects certain devices." :
          "Si el menú deja de funcionar, simplemente ábrelo manualmente sosteniendo la esquina superior izquierda y arrastrándolo hacia la derecha. Este problema se resolverá en la próxima actualización. Ten en cuenta que solo afecta a ciertos dispositivos."
        }
        buttons={[
          {
            text: 'English',
            handler: () => {
              handleLanguageChange('English');
            }
          },
          {
            text: 'OK',
            role: 'cancel',
            handler: () => {
              setShowAlert(false);
            }
          }
        ]}
      />
    </IonPage>
  );
};

export default Home;
