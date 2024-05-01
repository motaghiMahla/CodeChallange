import Styles from "./Badge.module.scss";
interface BadgeProps {
  value?: string | number;
}
const Badge = ({value}: BadgeProps) => {
  return <span className={Styles.container}>{value}</span>;
};

export default Badge;
