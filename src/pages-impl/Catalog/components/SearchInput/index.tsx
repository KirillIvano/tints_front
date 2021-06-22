import {TextInput} from '@/uikit/TextInput';
import {StyledProps} from '@/util/types';
import {observer} from 'mobx-react-lite';
import React from 'react';

import {useCatalogStore} from '../../hooks/useCatalogStore';

// import css from './styles.module.scss';

const SearchInput = observer(({className}: StyledProps) => {
    const catalogStore = useCatalogStore();
    const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        catalogStore.setSearchString(e.currentTarget.value);
    };

    return (
        <TextInput
            type="text"
            labelText="Поиск"
            placeholder="Введите текст..."
            value={catalogStore.currentSearch}
            onChange={handleChange}
            className={className}
        />
    );
});

export default SearchInput;
