import React from "react";
import Style from "./Loading.module.scss";
import {Typography} from "@/components/index";
import { ClassNames } from "@/utils/ClassNames";


export type Props = {
  isLoading: boolean;
  containerClassNames?: string | undefined;
  hasNoText?: boolean;
  loaderCalassName?: string;
};
const Loading = ({
  isLoading,
  containerClassNames,
  hasNoText,
  loaderCalassName = "",
}: Props) => {
  return (
    <>
      {isLoading && (
        <div
          className={
            containerClassNames
              ? ClassNames([Style.container, containerClassNames])
              : Style.container
          }
        >
          <div className={ClassNames([Style.loader, loaderCalassName])}></div>
          {!hasNoText && (
            <Typography variant={"button1"} customClass={"text-Gunmetal"}>
              در حال بارگذاری اطلاعات
            </Typography>
          )}
        </div>
      )}
    </>
  );
};

export default Loading;
