import styles from "./Typography.module.scss";
import {ClassNames} from "@/utils/ClassNames";

type Props = {
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
    | "captionXd"
    | "button1"
    | "button2"
    | "button3"
    | "button4"
    | "button5"
    | string;
  children: React.ReactNode;
  customClass?: string;
};
const Typography = ({variant, children, customClass = ""}: Props) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={ClassNames([styles.h1, customClass])}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={ClassNames([styles.h2, customClass])}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={ClassNames([styles.h3, customClass])}>{children}</h3>
      );
    case "h4":
      return (
        <h4 className={ClassNames([styles.h4, customClass])}>{children}</h4>
      );
    case "h5":
      return (
        <h4 className={ClassNames([styles.h5, customClass])}>{children}</h4>
      );
    case "subtitle1":
      return (
        <h4 className={ClassNames([styles.subtitle1, customClass])}>
          {children}
        </h4>
      );
    case "subtitle2":
      return (
        <h4 className={ClassNames([styles.subtitle2, customClass])}>
          {children}
        </h4>
      );
    case "subtitle3":
      return (
        <h4 className={ClassNames([styles.subtitle3, customClass])}>
          {children}
        </h4>
      );
    case "subtitle4":
      return (
        <h4 className={ClassNames([styles.subtitle4, customClass])}>
          {children}
        </h4>
      );
    case "subtitle5":
      return (
        <h4 className={ClassNames([styles.subtitle5, customClass])}>
          {children}
        </h4>
      );
    case "button1":
      return (
        <p className={ClassNames([styles.button1, customClass])}>{children}</p>
      );
    case "button2":
      return (
        <p className={ClassNames([styles.button2, customClass])}>{children}</p>
      );
    case "button3":
      return (
        <p className={ClassNames([styles.button3, customClass])}>{children}</p>
      );
    case "button4":
      return (
        <p className={ClassNames([styles.button4, customClass])}>{children}</p>
      );
    case "button5":
      return (
        <p className={ClassNames([styles.button5, customClass])}>{children}</p>
      );
    case "body1":
      return (
        <p className={ClassNames([styles.body1, customClass])}>{children}</p>
      );
    case "body2":
      return (
        <p className={ClassNames([styles.body2, customClass])}>{children}</p>
      );
    case "body3":
      return (
        <p className={ClassNames([styles.body3, customClass])}>{children}</p>
      );
    case "body4":
      return (
        <p className={ClassNames([styles.body4, customClass])}>{children}</p>
      );
    case "body5":
      return (
        <p className={ClassNames([styles.body5, customClass])}>{children}</p>
      );
    case "caption1":
      return (
        <span className={ClassNames([styles.caption1, customClass])}>
          {children}
        </span>
      );
    case "caption2":
      return (
        <span className={ClassNames([styles.caption2, customClass])}>
          {children}
        </span>
      );
    case "caption3":
      return (
        <span className={ClassNames([styles.caption3, customClass])}>
          {children}
        </span>
      );
    case "caption4":
      return (
        <span className={ClassNames([styles.caption4, customClass])}>
          {children}
        </span>
      );
    case "caption5":
      return (
        <span className={ClassNames([styles.caption5, customClass])}>
          {children}
        </span>
      );
    case "caption6":
      return (
        <span className={ClassNames([styles.caption6, customClass])}>
          {children}
        </span>
      );
    case "captionXd":
      return (
        <span className={ClassNames([styles.captionXd, customClass])}>
          {children}
        </span>
      );
    default:
      return (
        <p className={ClassNames([styles.body1, customClass])}>{children}</p>
      );
  }
};
export default Typography;
