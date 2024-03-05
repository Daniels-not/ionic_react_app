import React, { useState } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonInput, IonButton, IonIcon, IonLoading, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import { happy, man, woman } from 'ionicons/icons'; // Import Ionicons icons

const AgePrediction: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const predictAge = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      const { age } = response.data;
      setAge(age);
    } catch (error) {
      console.error('Error fetching age:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getAgeGroup = (): string => {
    if (age !== null) {
      if (age < 18) {
        return 'young';
      } else if (age >= 18 && age < 60) {
        return 'adult';
      } else {
        return 'elderly';
      }
    }
    return '';
  };

  const renderIcon = () => {
    switch (getAgeGroup()) {
      case 'young':
        return happy;
      case 'adult':
        return man;
      case 'elderly':
        return woman;
      default:
        return '';
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Age Predictor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="mx-auto h-screen w-screen">
        <div className="flex items-center justify-center h-full">
          <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
            <h2 className="font-bold text-gray-600 text-center mb-6">Age Prediction</h2>
            <div className="w-full mb-6">
              <IonInput
                placeholder="Enter name"
                value={name}
                onIonChange={(e) => setName(e.detail.value!)}
                className="w-full p-2 border border-gray-300 rounded-md"
              ></IonInput>
            </div>
            <IonButton expand="block" onClick={predictAge} className="text-white font-bold py-2 px-4 rounded w-full">
              Predict Age
            </IonButton>
            {age !== null && (
              <div className="mt-6 text-center">
                <p className="text-lg font-semibold">
                  {name} is {age} years old.
                </p>
                <div className="mt-4 flex items-center justify-center">
                  {renderIcon() && (
                    <IonIcon icon={renderIcon()} className="w-48 h-48 text-indigo-500" />
                  )}
                </div>
                <p className="mt-4">
                  {name} is a {getAgeGroup()}.
                </p>
              </div>
            )}
            <IonLoading
              isOpen={isLoading}
              message={'Fetching Age...'}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AgePrediction;
