import {useContext} from 'react';

import {CatalogStoreContext} from '../context';


export const useCatalogStore = () => useContext(CatalogStoreContext);
