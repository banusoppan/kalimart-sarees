import { createContext, useState ,useEffect} from 'react';
// import SHOP_DATA from '../shop-data.js';

// import PRODUCTS from '../shop-data.js';
import {  getCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});
  // useEffect(()=>{
  //   console.log(SHOP_DATA)
  //   addCollectionAndDocument('categories',SHOP_DATA)
  // },[])
  useEffect(() => {  
    // addCollectionAndDocuments('categories', SHOP_DATA);  
    const getCategoryMap = async () =>{
      const categoryMap =await getCollectionAndDocuments();
      console.log(categoryMap)
      setCategories(categoryMap)
    }
    getCategoryMap();
 }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
