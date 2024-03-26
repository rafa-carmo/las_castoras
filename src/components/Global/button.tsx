import type { ReactNode } from "react";
const variants = {
  default: "text-white  bg-secondary-600 hover:bg-secondary-600 ",
  ghost:
    "bg-transparent hover:bg-zinc-100/75 border border-transparent hover:border-black",
};

const sizes = {
    default: "text-xl",
    sm: "text-default"
}
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes
}

export function Button({
  onClick,
  children,
  variant = "default",
  size="default"
}: ButtonProps) {
  return (
    <button
      className={`font-hero  hover:scale-110 uppercase transition-all duration-500 py-2 px-4 rounded ${variants[variant]} ${sizes[size]}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
