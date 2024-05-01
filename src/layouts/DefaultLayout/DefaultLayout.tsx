import React from "react";
import Styles from "./DefaultLayout.module.scss";
import {ClassNames} from "../../utils/ClassNames";
import {iranSansFont} from "../../assets/fonts/fonts";

function DefaultLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <main className={ClassNames([Styles.container, iranSansFont.className])}>
        <main className={Styles.pageContainer}>{children}</main>
      </main>
    </>
  );
}

export default DefaultLayout;
