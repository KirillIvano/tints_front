import {ProductPreview} from '@/domain/product/types';
import {useMainPageContext} from './useMainPageContext';


export const useBestsellers = (): ProductPreview[] =>
    useMainPageContext().bestsellers;
