import React from "react";
interface Props {
  icon?: any;
  iconColor?: string;
}
const SkillItem = (props: Props) => {
  return (
    <div className={`${props.iconColor}`}>
      <props.icon />
    </div>
  );
};

export default SkillItem;
