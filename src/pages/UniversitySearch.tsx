import React, { useState } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonInput, IonButton, IonSpinner, IonAlert, IonList, IonLabel, IonItem, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import 'animate.css';

const UniversitySearch: React.FC = () => {
  const [country, setCountry] = useState<string>('');
  const [universities, setUniversities] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [inputFocused, setInputFocused] = useState<boolean>(false);
  const [errorAlert, setErrorAlert] = useState<string>('');

  const searchUniversities = async () => {
    if (!country) {
      setErrorAlert('Please enter a country name.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
      setUniversities(response.data);
    } catch (error) {
      console.error('Error fetching universities:', error);
      setErrorAlert('An error occurred while fetching universities. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="start" />
          <IonTitle>University Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container mx-auto h-screen w-screen">
          <div className="flex items-center justify-center h-full">
            <div className="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50">
              <div className="flex flex-col">
                <div>
                  <h2 className="font-bold text-gray-600 text-center">University Search</h2>
                </div>
                <div className="my-6">
                  <div className="flex flex-row space-x-4 items-center">
                    <div>
                      <IonInput
                        placeholder="Enter country name"
                        value={country}
                        onIonChange={(e) => setCountry(e.detail.value!)}
                        onIonFocus={() => setInputFocused(true)}
                        onIonBlur={() => setInputFocused(false)}
                        className={`border ${inputFocused ? 'border-black' : 'border-gray-300'} rounded-md p-2 mb-2`}
                      />
                    </div>
                    <div>
                      <IonButton
                        expand="block"
                        onClick={searchUniversities}
                        disabled={!country || loading}
                        className={`text-white font-bold rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        {loading ? <IonSpinner name="dots" /> : 'Search'}
                      </IonButton>
                    </div>
                  </div>
                <div>
                        <IonList>
                          {universities.map((university: any, index: number) => (
                            <IonItem key={index} className="mb-4">
                              <IonLabel className="text-lg font-bold">{university.name}</IonLabel>
                              <p className="text-gray-600">Domain: {university.domains.join(', ')}</p>
                              <a href={university.web_pages[0]} className="text-blue-500 hover:underline">{university.web_pages[0]}</a>
                            </IonItem>
                          ))}
                        </IonList>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <IonAlert
          isOpen={!!errorAlert}
          onDidDismiss={() => setErrorAlert('')}
          header={'Error'}
          message={errorAlert}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );
};

export default UniversitySearch;
