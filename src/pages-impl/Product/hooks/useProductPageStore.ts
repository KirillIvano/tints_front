import {useContext} from 'react';

import {ProductPageStoreContext} from '../context';


export const useProductPageStore = () => useContext(ProductPageStoreContext);
