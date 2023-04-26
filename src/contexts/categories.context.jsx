import { createContext, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const COLLECTIONS = gql`
  query {
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

export const CategoriesProvider = ({ children }) => {
  const { loading, error, data } = useQuery(COLLECTIONS);
  const [categoriesMap, setCategoriesMap] = useState({});

  console.log(
    '🚀 ~ file: categories.context.jsx:27 ~ CategoriesProvider ~ loading:',
    loading
  );
  console.log(
    '🚀 ~ file: categories.context.jsx:28 ~ CategoriesProvider ~ data:',
    data
  );

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
