import { createClient } from "contentful";
//accessToken: "GYfFIIpoNlxFXn8pPlZTA9ETAIGFjcRbM31RXLD8v74", // PRODUCTION
//host: "cdn.contentful.com" // PRODUCTION

const useContentful = () => {
  const client = createClient({
    space: "cwvmuneq0mx7",
    accessToken: "OZnKQNxDTZHvUFh9Ns4DOzIyiUKnAa_tqwQUeqpCsbQ",
    host: "preview.contentful.com"
  });
  
  const getCategories = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "categorie",
        select: "fields"
        //order: "titre" // , "fields.titre": "Bébé"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const categorie = item.fields;

        return categorie;
        //{
          //...item, categorie
          //categorie
        //};
      });
      return sanitizedEntries;

    } catch (error) {
      console.log(`Erreur lors de la récupération des catégories ${error}`);
    }
    
  };

  return { getCategories };//

};
export default useContentful;
