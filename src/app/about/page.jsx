import React from "react";
import Style from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
function About() {
  return (
    <div className={Style.container}>
      <div className={Style.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
          alt="Beautiful Landscape"
          className={Style.img}
        />
        <div className={Style.imgText}>
          <h1 className={Style.imgTitle}>
          Digital Storytellers
          </h1>
          <h2 className={Style.imgDesc}> 
             Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={Style.textContainer}>
      <div className={Style.item}>
        <h1 className={Style.title}>Who Are We?</h1>
        <p className={Style.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
        </p>
      </div>
      <div className={Style.item}>
          <h1 className={Style.title}>What We Do?</h1>
          <p className={Style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default About;
