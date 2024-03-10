import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonLoading, IonHeader, IonTitle, IonToolbar, IonMenuButton } from '@ionic/react';

const NewsView: React.FC = () => {
  const [newsData, setNewsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const fetchNewsData = async () => {
    try {
      const response = await axios.get('https://somoskudasai.com/wp-json/wp/v2/posts?per_page=3');
      console.log('News data:', response.data); // Log the response data
      setNewsData(response.data);
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching news data:', error);
      setIsLoading(false)
    } finally {
      setIsLoading(false); // Hide the loader when fetching is done (success or error)
    }
  };
  
  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="flex justify-center"> 
          <div className="max-w-7xl mx-auto px-5 mb-3">
            <div className="mt-6-0 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {newsData.map((newsItem: any, index: number) => (
                <div key={index} className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <a href={newsItem.link}>
                    <img className="rounded-t-lg px-5 py-2" src={newsItem.yoast_head_json.og_image[0].url} alt={newsItem.title.rendered} />
                  </a>
                  <div className="p-5">
                    <a href={newsItem.link}>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{newsItem.title.rendered}</h5>
                    </a>
                    <div className="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">Anime</div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: newsItem.excerpt.rendered }}></p>
                    <a href={newsItem.yoast_head_json.og_url} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <IonLoading
          isOpen={isLoading} // Show the loader while fetching data
          message={'Loading...'}
        />
      </IonContent>
    </IonPage>
  );
};

export default NewsView;
