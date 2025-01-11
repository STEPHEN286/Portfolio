
"use client";

import {  Drawer } from "flowbite-react";
import myImage from "../asset/images/my-img.jpg"
import myQr from "../asset/images/myqrcode.png"
import myGraphic from "../asset/images/qrBio.png"

export function ImageDrawer({isOpen, setIsOpen}) {


  const handleClose = () => setIsOpen(false);

  return (
    <>
      
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header />
        <Drawer.Items>
         
         <div className="flex flex-col items-center justify-center h-screen">
          <img src={myImage} alt="my-image" />
         
         <div className="flex flex-col items-center justify-center h-screen">
          <p>On Linkedin</p>
         <img src={myQr} alt="my-image" />
         </div>
         <div className="flex flex-col items-center justify-center h-screen">
          <p>Graphic Work</p>
         <img src={myGraphic} alt="my-image" />
         </div>

         </div>
         
        </Drawer.Items>
      </Drawer>
    </>
  );
}
