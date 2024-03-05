import React, { useState } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonInput, IonButton, IonIcon, IonHeader, IonTitle, IonToolbar} from '@ionic/react';
import { male, female } from 'ionicons/icons'; // Import Ionicons icons

const GenderPrediction: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const predictGender = async () => {
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      const { gender } = response.data;
      setGender(gender);
    } catch (error) {
      console.error('Error fetching gender:', error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gender Predictor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className={gender === 'male' ? 'bg-blue-200' : 'bg-pink-200'}>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
            <div className="flex flex-col">
              <div>
                <h2 className="font-bold text-gray-600 text-center">Gender Prediction</h2>
              </div>
              <div className="p-6">
                <IonInput
                  placeholder="Enter name"
                  value={name}
                  onIonChange={(e) => setName(e.detail.value!)}
                  className="w-full mb-4 p-2 border border-gray-300 rounded-md"
                ></IonInput>
                <IonButton expand="block" onClick={predictGender} className="rounded">
                  Predict Gender
                </IonButton>
              </div>
              {gender && (
                <div className="flex flex-col items-center">
                  <div id="icon" className="mb-4">
                    <span>
                      {/* Use Ionicons icons instead of SVG */}
                      <IonIcon
                        className={`w-20 h-20 ${
                          gender === 'male' ? 'text-blue-400' : 'text-pink-400'
                        }`}
                        src={gender === 'male' ? male : female}
                      />
                    </span>
                  </div>
                  <div className="text-center">
                    {gender === 'male' ? (
                      <p className="text-blue-800">This name is predicted to be male.</p>
                    ) : (
                      <p className="text-pink-800">This name is predicted to be female.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GenderPrediction;
