import React from 'react';
import {observer} from 'mobx-react-lite';

import {Typo} from '@/uikit';
import {StyledProps} from '@/util/types';

import {useCurrentSku} from '../../hooks/useCurrentSku';


const Breadcrumps = observer(({className}: StyledProps) => {
    const {name} = useCurrentSku();

    return (
        <div className={className}>
            <Typo>/&nbsp;продукты&nbsp;/&nbsp;{name}</Typo>
        </div>
    );
});

export default Breadcrumps;
