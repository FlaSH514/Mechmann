"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import MechmannLogo from "./MechmannLogo";
import { ChevronDownIcon } from "@heroicons/react/outline";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from "@nextui-org/react";
export default function Header() {
  return (
    <div className="p-6 absolute top-0 w-full z-50 bg-transparent">
      <Navbar className="flex items-center relative sm:inline">
        <NavbarBrand className="justify-start ml-4">
          <MechmannLogo />
        </NavbarBrand>
        <NavbarContent className="flex items-center justify-center pr-4 lg:pr-20 sm:flex-grow gap-4 lg:gap-20 ">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              About Us
            </Link>
          </NavbarItem>

          <NavbarItem className="flex items-center">
            <Dropdown>
              <DropdownTrigger>
                <div className="flex items-center focus-visible:border-none">
                  <button className="mr-1 text-foreground">Products</button>
                  <ChevronDownIcon className="h-5 w-5 flex text-gray-700 font-thin" />
                </div>
              </DropdownTrigger>
              <DropdownMenu className="flex flex-col">
                <DropdownItem>Product 1</DropdownItem>
                <DropdownItem>Product 2</DropdownItem>
                <DropdownItem>Product 3</DropdownItem>
                <DropdownItem className="">Product 4</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem className="">
            <Link color="foreground" href="#">
              Career
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent>
          <NavbarItem className="mr-2 mlg:mr-10">
            <button
              className="rounded-xl bg-[#FF0204] text-white px-4 py-1.5 font-md"
              color="danger"
              hidden
            >
              SIGN IN
            </button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
