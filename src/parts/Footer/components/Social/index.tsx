import cn from 'classnames';

import {Reference} from '@/uikit';
import {StyledProps} from '@/util/types';

import css from './styles.module.scss';


const Social = ({className}: StyledProps) => (
    <div className={cn('row', className)}>
        <div className='col-xs-3'>
            <Reference href='https://www.instagram.com' className={css.socialItem}>
                <img src="/icons/instagram.svg" className={css.icon} alt="" />
            </Reference>
        </div>
        <div className='col-xs-3'>
            <Reference href='https://www.facebook.com' className={css.socialItem}>
                <img src="/icons/facebook.svg" className={css.icon} alt="" />
            </Reference>
        </div>
        <div className='col-xs-3'>
            <Reference href='https://www.vk.com' className={css.socialItem}>
                <img src="/icons/vk.svg" className={css.icon} alt="" />
            </Reference>
        </div>
        <div className='col-xs-3'>
            <Reference href='https://www.twitter.com' className={css.socialItem}>
                <img src="/icons/twitter.svg" className={css.icon} alt="" />
            </Reference>
        </div>
    </div>
);

export default Social;
