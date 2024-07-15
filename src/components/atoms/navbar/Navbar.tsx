"use client";

import React from 'react'
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd';
import MenuItem from "antd/es/menu/MenuItem";
const { Header, Content, Footer } = Layout;
import { HomeOutlined, ProductOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useTheme } from "next-themes";
import Link from 'next/link';
import ToggleTheme from '../toggleTheme/ToggleTheme';

type MenuItem = Required<MenuProps>["items"][number];

const items: any[] = [
    {
        key: "home",
        label: "Home",
        path: "/",
        icon: <HomeOutlined />
    },
    {
        key: "products",
        label: "Products",
        path: "/products",
        icon: <ProductOutlined />
    },
    {
        key: "cart",
        label: "Cart",
        path: "/carts",
        icon: <ShoppingCartOutlined />
    },
]

const Navbar = () => {
    const { theme } = useTheme();

    return (
        <Header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: theme === "dark" ? "#001529" : "#fff",
            }}
        >
            <div className="">
                <a href='' className={`font-medium ${theme === "light" ? "text-neutral-800" : "text-white"}`}>Logo</a>
            </div>
            <Menu
                theme={theme === "dark" ? "dark" : "light"}
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={{ width: "500px", minWidth: 0 }}
            >
                {items.map((item) => (
                    <MenuItem key={item.key} icon={item.icon}>
                        {item.key === "cart" && (
                            <div className="absolute left-8 top-5 rounded-full bg-red-500 h-5 w-5 flex items-center justify-center">
                                <span
                                    className="text-white text-xs font-medium"
                                    style={{ fontSize: "8px" }}
                                >
                                    2
                                </span>
                            </div>
                        )}
                        <Link href={item.path}>
                            {item.key === "cart" ? "" : item.label}
                        </Link>
                    </MenuItem>
                ))}
                <MenuItem key="togle" className="bg-transparent hover:bg-transparent">
                    <ToggleTheme />
                </MenuItem>
            </Menu>

        </Header>
    )
}

export default Navbar