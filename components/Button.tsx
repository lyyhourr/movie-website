import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  color: "green" | "transparent" | "gray";
  icon?: any;
  classname?: string;
  hover?: boolean;
  onClick?: () => void;
};
export default function Button(props: ButtonProps) {
  return (
    <div
      className={`flex items-center justify-center gap-x-2  text-white text-center p-2  rounded-lg cursor-pointer ${
        props.color === "green" && "bg-green-700 border-2 border-green-700"
      } ${
        props.color === "transparent" && "bg-transparent border-white border-2 "
      } ${props.classname}
      ${props.hover && " hover:scale-105 transition-all "}`}
      onClick={props.onClick}
    >
      {props.icon}
      <p>{props.children} </p>
    </div>
  );
}
