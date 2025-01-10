
"use client";

import {  Drawer } from "flowbite-react";
import myImage from "../asset/images/my-img.jpg"

export function ImageDrawer({isOpen, setIsOpen}) {


  const handleClose = () => setIsOpen(false);

  return (
    <>
      
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header />
        <Drawer.Items>
         
         <div>
          <img src={myImage} alt="my-image" />
         </div>
         
        </Drawer.Items>
      </Drawer>
    </>
  );
}
