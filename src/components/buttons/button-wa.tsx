import { Suspense } from "react";
import ButtonWABase, { type ButtonWABaseProps } from "./buttom-wa-base";

const ButtonWA = ({ children, ...props }: ButtonWABaseProps) => {
  return (
    <Suspense>
      <ButtonWABase {...props}>{children}</ButtonWABase>
    </Suspense>
  );
};

export default ButtonWA;
