import React, { FC, PropsWithChildren } from "react";

type PrimaryButtonProps = {
  onClick: () => void;
};

const PrimaryButton: FC<PropsWithChildren<PrimaryButtonProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-stone-700 shadow-sm text-white p-1 text-sm 
rounded-md px-2.5 hover:bg-stone-800"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
