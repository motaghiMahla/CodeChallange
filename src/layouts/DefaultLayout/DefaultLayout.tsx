import React from "react";
import Styles from "./DefaultLayout.module.scss";
import {ClassNames} from "../../utils/ClassNames";
import {iranSansFont} from "../../assets/fonts/fonts";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("../components/Menu"));
const Footer = dynamic(() => import("../components/Footer"));
const SignUp = dynamic(() => import("../components/SignUp"));
const MainLogo = dynamic(() => import("../components/MainLogo"));

function DefaultLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <main className={ClassNames([Styles.container, iranSansFont.className])}>
        <div className="w-full">
          <SignUp />
          <Menu />
        </div>

        <main className={Styles.pageContainer}>{children}</main>

        <Footer />
      </main>
    </>
  );
}

export default DefaultLayout;
