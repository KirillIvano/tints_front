import cn from 'classnames';

import {Reference} from '@/uikit';
import {StyledProps} from '@/util/types';

import css from './styles.module.scss';


const Social = ({className}: StyledProps) => (
    <div className={cn('row', className)}>
        <div className='col-xs-4'>
            <Reference href='https://www.instagram.com/organiccoloursystems_rus' className={css.socialItem}>
                <img src="/icons/instagram.svg" className={css.icon} alt="" />
            </Reference>
        </div>
        <div className='col-xs-4'>
            <Reference href='https://www.facebook.com/organic.systems' className={css.socialItem}>
                <img src="/icons/facebook.svg" className={css.icon} alt="" />
            </Reference>
        </div>
        <div className='col-xs-4'>
            <Reference href='https://www.youtube.com/channel/UCI2iOeWB-GmzlyXgyfdoM1w' className={css.socialItem}>
                <img src="/icons/youtube.svg" className={css.icon} alt="" />
            </Reference>
        </div>
    </div>
);

export default Social;
