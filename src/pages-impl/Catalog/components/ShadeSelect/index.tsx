import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';
import cn from 'classnames';

import {getImageUrl} from '@/util/getImageUrl';
import {StyledProps} from '@/util/types';

import {useCatalogStore} from '../../hooks/useCatalogStore';
import css from './styles.module.scss';
import {Typo} from '@/uikit';


type ShadeProps = {
    id: number;
    name: string;
    image: string;
    isSelected: boolean;

    onSelect: (id: number) => void;
}

const ShadeItem = ({id, name, image, isSelected, onSelect}: ShadeProps) => {
    const handleSelect = () => onSelect(id);

    return (
        <label className={cn(css.shade, {[css.selected]: isSelected})}>
            <input
                className={css.shade__input}
                value={name}
                name="shade"
                type="radio"
                checked={isSelected}
                onChange={handleSelect}
            />

            <img
                className={css.shade__img}
                src={getImageUrl(image)}
            />

            <div className={css.shade__indent} />
        </label>
    );
};

const AllShades = ({handleSelect, isSelected}: {handleSelect: () => void; isSelected: boolean}) => (
    <label className={cn(css.shade, css.all, {[css.selected]: isSelected})}>
        <input
            className={css.shade__input}
            value="Все"
            name="catalog_shade"
            type="radio"
            checked={isSelected}
            onChange={() => handleSelect()}
        />

        <Typo size="xs" color="black">ВСЕ</Typo>

        <div className={css.shade__indent} />
    </label>
);

const ShadeSelect = observer(({className}: StyledProps) => {
    const catalogStore = useCatalogStore();

    const handleSelect = useCallback(
        (id?: number) => catalogStore.setShade(id),
        [catalogStore],
    );

    return (
        <div className={className}>
            <Typo size="xs">Оттенок</Typo>

            <div className={css.shadeSelect}>
                <AllShades
                    handleSelect={handleSelect}
                    isSelected={!catalogStore.currentShade}
                />

                {catalogStore.shades.map(shade => (
                    <ShadeItem
                        {...shade}
                        key={shade.id}
                        isSelected={catalogStore.currentShade === shade.id}
                        onSelect={handleSelect}
                    />
                ))}
            </div>
        </div>
    );
});

export default React.memo(ShadeSelect);
