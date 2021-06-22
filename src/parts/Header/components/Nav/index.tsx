import {useRouter} from 'next/router';
import {observer} from 'mobx-react-lite';
import cn from 'classnames';

import {useCartStore} from '@/domain/cart/hooks';
import {Reference} from '@/uikit';
import {StyledProps} from '@/util/types';

import css from './styles.module.scss';


type NavItemProps = {
    href: string;
    children: React.ReactNode;
}
const NavItem = ({
    href,
    children,
}: NavItemProps) => {
    const {pathname} = useRouter();

    return (
        <li className={css.nav__item}>
            <Reference
                className={cn(
                    css.nav__itemText,
                    {[css.selected]: pathname === href},
                )}
                href={href}
            >
                {children}
            </Reference>
        </li>
    );
};

const CartItem = observer(() => {
    const cartStore = useCartStore();
    const itemsCnt = cartStore.itemsCount;

    return (
        <NavItem href="/cart">Корзина ({itemsCnt})</NavItem>
    );
});

const Nav = ({className}: StyledProps) => {

    return (
        <nav className={cn(css.nav, className)}>
            <ul className={css.nav__list}>
                <NavItem href="/catalog">Магазин</NavItem>
                <NavItem href="/about-us">О нас</NavItem>
                <NavItem href="/faqs">Полезные советы</NavItem>
                <NavItem href="/contacts">Контакты</NavItem>
                <CartItem />
            </ul>
        </nav>
    );
};

export default Nav;
