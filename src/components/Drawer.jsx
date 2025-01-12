
"use client";

import {  Drawer } from "flowbite-react";
import myImage from "../asset/images/my-img.jpg"
import myQr from "../asset/images/myqrcode.png"
import myGraphic from "../asset/images/qrBio.png"

export function ImageDrawer({isOpen, setIsOpen}) {


  const handleClose = () => setIsOpen(false);

  return (
    <>
      
      <Drawer open={isOpen} onClose={handleClose} position="right" className="md:overflow-hidden ">
        {/* <Drawer.Header /> */}
        <Drawer.Items>
         
         <div className="flex flex-col items-center justify-center h-screen">
          <img src={myImage} alt="my-image" />
         
         <a  href="https://www.linkedin.com/in/stephen-adjei-kwofie-aa4b44253" target="_blank"   rel="noopener noreferrer"   className="flex  flex-col items-center justify-center h-screen">
          <p>On Linkedin</p>
         <img src={myQr} alt="my-image" height={"100px"} width={"100px"} />
         </a>
         <a href="https://bio.site/k.geeGraphic"  rel="noopener noreferrer" className="flex flex-col items-center justify-center h-screen">
          <p>Graphic Work</p>
         <img src={myGraphic} alt="my-image" height={"100px"} width={"100px"} />
         </a>

         </div>
         
        </Drawer.Items>
      </Drawer>
    </>
  );
}
