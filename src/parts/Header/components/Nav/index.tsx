import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';
import {useCartStore} from '@/domain/cart/hooks';


type NavItemProps = {
    href: string;
    children: React.ReactNode;
}
const NavItem = ({
    href,
    children,
}: NavItemProps) => (
    <li>
        <Link href={href}>
            {children}
        </Link>
    </li>
);

const CartItem = () => {
    const cartStore = useCartStore();
    const itemsCnt = cartStore.itemsCount;

    return (
        <NavItem href="/cart">Корзина ({itemsCnt})</NavItem>
    );
};

const Nav = () => (
    <nav>
        <ul>
            <NavItem href="/shop">Магазин</NavItem>
            <NavItem href="/shop">О нас</NavItem>
            <NavItem href="/shop">Полезные советы</NavItem>
            <NavItem href="/shop">Контакты</NavItem>
            <CartItem />
        </ul>
    </nav>
);

export default Nav;
