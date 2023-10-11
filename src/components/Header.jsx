import classNames from "classnames";
import {
    FaShoppingCart,
    FaArrowLeft,
    FaUser,
    FaHeart,
    FaUserCog,
    FaCubes,
    FaSignOutAlt
} from "react-icons/fa";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART_DRAWER } from "@/redux/types/cart";
import { useRouter } from "next/router";
import { Badge, Dropdown } from "rsuite";
import { OPEN_MODAL } from "@/redux/types/common";
import { LOGIN_MODAL, LOGOUT_MODAL } from "./CustomModal";
import Link from "next/link";
import { useMemo, useState } from "react";
import BackButton from "./BackButton";

export default function Header() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, isLoggedIn = false } = useSelector((state) => state.auth);

    const handleLogin = () => {
        // const payload = {
        // 	user: {
        // 		name: "Sourabh",
        // 	},
        // 	token: "asdf",
        // };
        dispatch({
            type: OPEN_MODAL,
            payload: { modal: LOGIN_MODAL, modalData: { formType: "login" } },
        });
    };

    const onCartClick = () => {
        dispatch({ type: TOGGLE_CART_DRAWER });
    };

    const searchBarVisible = useMemo(() => {
        return ["/"].includes(router.pathname);
    }, [router.pathname]);

    return (
        <div
            className={classNames(
                'md:h-8vh',
                "cus-container",
                "py-3",
                "px-5",
                "flex-wrap",
                "flex",
                "justify-between",
                "items-center",
                "box-border",
                "shadow"
            )}
        >
            <div className="flex items-center">
                {router.pathname !== "/" && (
                    <BackButton />
                )}
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="hover:no-underline text-gray-500 hover:text-gray-500 text-3xl logo-text ml-2 font-bold"
                    >
                        E<span className="text-secondary">C</span>OM
                    </Link>
                </div>
            </div>
            {searchBarVisible && (
                <div className="hidden lg:block lg:w-6/12">
                    <Search />
                </div>
            )}
            <div className="flex items-center pointer">
                {isLoggedIn ? (
                    <UserButton label={user.firstName} />
                ) : (
                    <div
                        className="flex items-center rounded-xl hover:text-black transition 300"
                        onClick={handleLogin}
                    >
                        <FaUser size={20} />
                        <div className="px-2 text-md">Login</div>
                    </div>
                )}
                {router.pathname !== "/wishlist" && (
                    <button className="ml-5" onClick={() => router.push("/wishlist")}>
                        <FaHeart size={20} />
                    </button>
                )}
                {router.pathname !== "/checkout" && (
                    <CartButton className="ml-5" onClick={onCartClick} />
                )}
            </div>
            {searchBarVisible && (
                <div className="lg:hidden w-full mt-5">
                    <Search />
                </div>
            )}
        </div>
    );
}

const UserButton = ({ label }) => {
    const [isMenuOpen, toggleMenu] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch({ type: OPEN_MODAL, payload: { modal: LOGOUT_MODAL } });
    };

    const handleMenuItemClick = (isLink, path, action) => {
        toggleMenu(false);
        if (isLink) return router.push(path);
        action();
    };

    const menuOptions = [
        { label: "Logout", action: handleLogout },
        { label: "Account", isLink: true, path: "/account" },
        { label: "Orders", isLink: true, path: "/orders" },
    ];

    const getMenuIcons = (label) => {
        switch (label) {
            case "Logout":
                return <FaSignOutAlt size={20} />;

            case "Account":
                return <FaUserCog size={20} />;

            case "Orders":
                return <FaCubes size={20} />;

            default:
                return null;
        }
    };

    return (
        <Dropdown
            open={isMenuOpen}
            onToggle={(open) => toggleMenu(open)}
            title={
                <div className="flex items-center rounded-xl hover:text-black transition 300">
                    <FaUser size={20} />
                    <div className="text-md ml-2 sm:block hidden">{label}</div>
                </div>
            }
        >
            {menuOptions.map(({ label, isLink, path, action }) => (
                <Dropdown.Item key={label} className="flex items-center" >
                    <div className="flex">
                        {getMenuIcons(label)}
                        <button className="ml-2" onClick={() => handleMenuItemClick(isLink, path, action)}>
                            {label}
                        </button>
                    </div>

                </Dropdown.Item>
            ))}
        </Dropdown>
    );
};

const CartButton = ({ count = 0, onClick, className }) => {
    if (count === 0)
        return (
            <button onClick={onClick} className={className}>
                <FaShoppingCart size={20} />
            </button>
        );
    return (
        <Badge content={count}>
            <button onClick={onClick} className={className}>
                <FaShoppingCart size={20} />
            </button>
        </Badge>
    );
};
