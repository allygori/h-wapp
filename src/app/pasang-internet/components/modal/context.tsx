"use client";

import type { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { createContext, useCallback, useState } from "react";

type ModalContactContextType = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  // openModal?: () => void;
  // closeModal?: () => void;
  // onModalOpen?: (val: boolean) => void;
};

// const ModalContactContext = createContext<ModalContactContextType | null>({
//   showModal: false,
//   setShowModal: () => {},
//   // openModal?: () => {},
//   // closeModal?: () => {},
// });

const ModalContactContext = createContext<ModalContactContextType | null>(null);

// const ModalContactProvider: FC<{ children: ReactNode }> = ({ children }) => {
//   // const [value, setValue] = useState({
//   //   show_modal: false,
//   // });
//   const [showModal, setShowModal] = useState(false);

//   const openModal = useCallback(() => {
//     console.log("openModal called");
//     setShowModal(true);
//   }, [setShowModal]);

//   const closeModal = useCallback(() => {
//     setShowModal(false);
//   }, [setShowModal]);

//   const value = { showModal, setShowModal, openModal, closeModal };

//   // const onModalOpen = (val: boolean) => {
//   //   setValue((prev) => ({ ...prev }));
//   // };

//   // const openModal = useCallback(() => {
//   //   console.log("openModal called");
//   //   setValue((prev) => ({ ...prev, show_modal: true }));
//   // }, [setValue]);

//   // const closeModal = () => {
//   //   console.log("close modal called");
//   //   setValue((prev) => ({ ...prev, show_modal: false }));
//   // };

//   return (
//     <ModalContactContext.Provider value={value}>
//       {children}
//     </ModalContactContext.Provider>
//   );
// };

export type { ModalContactContextType };
// export { ModalContactProvider };
export default ModalContactContext;
