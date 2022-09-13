import { Tag } from "antd";
import React from "react";

const TagRender = (props) => {
  const { label, value, closable, onClose } = props;

  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color="black"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      //   style={{
      //     marginRight: 3,
      //   }}
    >
      {label}
    </Tag>
  );
};
export default TagRender;
