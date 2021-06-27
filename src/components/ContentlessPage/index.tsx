import {ReactNode} from 'react';
import cn from 'classnames';

import {ButtonLink, Typo} from '@/uikit';
import {StyledProps} from '@/util/types';

import css from './styles.module.scss';


export type ContentlessPageProps = StyledProps<{
    description: ReactNode;
    link: string;
    buttonText: string;
}>;

const ContentlessPage = ({
    description,
    link,
    buttonText,
    className,
}: ContentlessPageProps) => {
    return (
        <div className={cn(className, css.page)}>
            <Typo as="h1" size="xl" color="black">
                {description}
            </Typo>

            <ButtonLink
                href={link}
                className={css.button}
            >
                {buttonText}
            </ButtonLink>
        </div>
    );
};

export default ContentlessPage;
