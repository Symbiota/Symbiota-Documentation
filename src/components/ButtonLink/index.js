// h/t chatGTP
import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";

const ButtonLink = ({
  size = null,
  outline = false,
  variant = "primary",
  block = false,
  disabled = false,
  className,
  style,
  link,
  label,
  download = false,
}) => {
  const resolvedLink = useBaseUrl(link);
  const sizeMap = {
    sm: "sm",
    small: "sm",
    lg: "lg",
    large: "lg",
    medium: null,
  };

  const buttonSize = size ? sizeMap[size] : "";
  const sizeClass = buttonSize ? `button--${buttonSize}` : "";
  const outlineClass = outline ? "button--outline" : "";
  const variantClass = variant ? `button--${variant}` : "";
  const blockClass = block ? "button--block" : "";
  const disabledClass = disabled ? "disabled" : "";
  const allClasses = clsx(
    "button",
    sizeClass,
    outlineClass,
    variantClass,
    blockClass,
    disabledClass,
    className
  );

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (download && resolvedLink) {
      const a = document.createElement("a");
      a.href = resolvedLink;
      a.download = "";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else if (resolvedLink) {
      window.location.href = resolvedLink;
    }
  };

  return (
    <button
      className={allClasses}
      style={style}
      onClick={handleClick}
      aria-disabled={disabled}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default ButtonLink;
