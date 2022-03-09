import { createClient } from "contentful";
import { SPACE_KEY, TOKEN_KEY } from "./secret.js";

//host: "cdn.contentful.com" // PRODUCTION

const useContentful = () => {
  const client = createClient({
    space: SPACE_KEY,
    accessToken: TOKEN_KEY,
    host: "preview.contentful.com"
  });
  
  const getPhotos = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "photo",
        select: "fields"
        //order: "titre" // , "fields.titre": "Bébé"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const photo = item.fields;
        return photo;
      });
      return sanitizedEntries;

    } catch (error) {
      console.log(`Erreur lors de la récupération des photos : ${error}`);
    }
    
  }; // FIN getPhotos

  const getTarifs = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "tarif",
        select: "fields",
        order: "fields.ordreDaffichage" // , "fields.titre": "Bébé"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const tarifs = item.fields;
        return tarifs;
      });
      
      return sanitizedEntries;

    } catch (error) {
      console.log(`Erreur lors de la récupération des tarifs : ${error}`);
    }
  }; // FIN getTarifs

  return { getPhotos, getTarifs };//

};
export default useContentful;
