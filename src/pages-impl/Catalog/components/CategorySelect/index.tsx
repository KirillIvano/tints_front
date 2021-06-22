import {observer} from 'mobx-react-lite';
import React, {useCallback} from 'react';

import {useProductStore} from '@/domain/product/hooks';
import {Typo} from '@/uikit';
import {StyledProps} from '@/util/types';

import {useCatalogStore} from '../../hooks/useCatalogStore';
import css from './styles.module.scss';


type CategorySelectItemProps = {
    name: string;
    id: number;
    isSelected: boolean;
    onSelect: (id: number) => void;
}

const CategorySelectItem = ({
    name,
    id,
    isSelected,

    onSelect,
}: CategorySelectItemProps) => (
    <label className={css.category}>
        <input
            className={css.category__input}
            type="radio"
            name="catalog_category"
            checked={isSelected}
            value={name}
            onChange={() => onSelect(id)}
        />

        <Typo className={css.category__name}>
            {name}
        </Typo>
    </label>
);


type CategoryAllItemProps = {
    isSelected: boolean;
    onSelect: () => void;
}

const CategoryAllItem = ({
    isSelected,
    onSelect,
}: CategoryAllItemProps) => (
    <label className={css.category}>
        <input
            className={css.category__input}
            type="radio"
            name="catalog_category"
            checked={isSelected}
            value="Все"
            onChange={() => onSelect()}
        />

        <Typo className={css.category__name}>
            Все
        </Typo>
    </label>
);

const CategorySelect = observer(({className}: StyledProps) => {
    const {productCategories} = useProductStore();
    const catalogStore = useCatalogStore();

    const handleSelect = useCallback((id?: number) => catalogStore.setCategoryId(id), [catalogStore]);

    return (
        <div className={className}>
            <CategoryAllItem
                isSelected={!catalogStore.currentCategory}
                onSelect={handleSelect}
            />

            {productCategories.map(({id, name}) =>
                (
                    <CategorySelectItem
                        key={id}
                        name={name}
                        id={id}
                        onSelect={handleSelect}
                        isSelected={catalogStore.currentCategory === id}
                    />
                ),
            )}
        </div>
    );
});

export default CategorySelect;
