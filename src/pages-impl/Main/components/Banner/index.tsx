import cn from 'classnames';

import {useDeviceType} from '@/contexts/DeviceContext';
import {StyledProps} from '@/util/types';

import {useMainPageContext} from '../../hooks/useMainPageContext';
import css from './styles.module.scss';
import {Box, Button, Typo} from '@/uikit';
import {getImageUrl} from '@/util/getImageUrl';
import {useRouter} from 'next/router';


const Banner = ({className}: StyledProps) => {
    const device = useDeviceType();
    const router = useRouter();

    const {banner} = useMainPageContext();
    const {
        backgroundLg,
        backgroundSm,
        title,
        text,
        buttonText,
        buttonUrl,
    } = banner;

    const handleClick = () =>
        router.push(buttonUrl);

    const imageSrc = getImageUrl(device === 'mobile' ? backgroundSm : backgroundLg);

    return (
        <div
            className={cn(css.banner, className)}
            style={{backgroundImage: `url(${imageSrc})`}}
        >
            <Box className={css.bannerOverlay}>
                <div className={css.bannerContent}>
                    <Typo
                        as="h2"
                        size="xxl"
                        color="black"
                        className={css.bannerHeading}
                    >
                        {title}
                    </Typo>
                    <Typo
                        className={css.bannerText}
                        as="h3"
                        size="sm"
                    >
                        {text}
                    </Typo>

                    <Button
                        className={css.bannerButton}
                        onClick={handleClick}
                    >
                        {buttonText}
                    </Button>
                </div>
            </Box>
        </div>
    );
};

export default Banner;
