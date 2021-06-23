import React from 'react';
import cn from 'classnames';

import css from './styles.module.scss';

export type ProductImageProps = {
    src: string;

    alt?: string;
    containerClass?: string;
    className?: string;
}

const ProductImage = ({
    containerClass,
    className,
    src,

    alt,
}: ProductImageProps) =>  (
    <div
        className={cn(css.container, containerClass)}
        aria-hidden="true"
    >
        <img
            className={cn(css.image, className)}
            src={src}
            alt={alt}
        />
    </div>
);


export default ProductImage;
