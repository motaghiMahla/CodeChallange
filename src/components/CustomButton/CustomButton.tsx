import React, {MouseEventHandler, ReactElement, ReactNode} from "react";
import {ClassNames} from "@/utils/ClassNames";
import Styles from "./CustomButton.module.scss";
import Typography from "../Typography";
import Loading from "../Loading";

interface ButtonProps {
  Icon?: ReactElement;
  iconPosition?: "left" | "right";
  submitType?: "button" | "submit" | "reset";
  onClick?: (e:any) => void | MouseEventHandler<HTMLElement> | Promise<void>;
  pureClassName?: string;
  className?: string;
  childrenClassName?: string;
  type?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "senary"
    | "septenary"
    | "quaternaryBorder"
    | "default"
    | "danger";
  title?: string;
  disabled?: boolean;
  children?: ReactNode;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "subtitle4"
    | "subtitle5"
    | "body1"
    | "body2"
    | "body3"
    | "body4"
    | "body5"
    | "body6"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4"
    | "caption5"
    | "caption6"
    | "button1"
    | "button2"
    | "button3"
    | "button4"
    | "button5";
  loading?: boolean;
  dataTestid?: string;
}

const CustomButton = ({
  submitType = "button",
  Icon,
  onClick,
  className = "",
  pureClassName,
  childrenClassName = "",
  type = "primary",
  title = "",
  disabled = false,
  children,
  variant,
  loading,
  iconPosition = "right",
  dataTestid = "",
}: ButtonProps) => {
  return (
    <button
      data-testid={dataTestid}
      onDoubleClick={e => e.preventDefault()}
      type={submitType}
      onClick={onClick}
      disabled={loading || disabled}
      className={
        disabled || loading
          ? ClassNames([
              className,
              Styles.button,
              Styles[type],
              Styles.disable,
            ])
          : pureClassName
          ? pureClassName
          : ClassNames([className, Styles.button, Styles[type]])
      }
    >
      <Loading
        containerClassNames={"max-h-[20px] overflow-hidden"}
        loaderCalassName={"w-5 h-5 max-h-5 mx-1"}
        hasNoText={true}
        isLoading={loading ? loading : false}
      />
      {!loading && iconPosition === "right" && Icon}
      {title && (
        <Typography variant={variant} customClass={childrenClassName}>
          {title}
        </Typography>
      )}
      {children && (
        <Typography variant={variant} customClass={childrenClassName}>
          {children}
        </Typography>
      )}
      {!loading && iconPosition === "left" && Icon}
    </button>
  );
};

export default CustomButton;
