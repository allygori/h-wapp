import clsx from "clsx";
import { useContext, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { ModalContactContext, type ModalContactContextType } from "./";
import IconCloseInCircle from "@/components/svgs/close-in-circle";

type Props = {
  children?: ReactNode;
  open?: boolean;
  openModal?: () => void;
  closeModal?: () => void;
  onOpenChange?: (open: boolean) => void;
};

const Modal = ({
  open = false,
  children,
  closeModal = () => {},
  onOpenChange = () => {},
}: Props) => {
  const context = useContext(ModalContactContext) as ModalContactContextType;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="radix-state-closed:px radix-state-closed:-mx radix-state-closed:h-1 radix-state-closed:w-1 radix-state-closed:border-0 radix-state-open:h-full radix-state-open:w-full radix-state-open:opacity-30 fixed inset-0 z-50 bg-black opacity-0 transition-opacity delay-0 duration-700 ease-in-out" />

        <Dialog.Content
          className={clsx(
            "fixed z-50",
            "w-[95vw] max-w-md rounded-lg p-4",
            "md:w-full",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "lg:w-[40vw] lg:max-w-full",
            "bg-white",
            "radix-state-open:animate-content-show",
            "radix-state-closed::animate-content-hide",
          )}
        >
          <Dialog.Title className="text-base font-bold text-gray-900">
            Formulir
          </Dialog.Title>
          <Dialog.Description className="my-2 text-sm text-gray-600">
            Kami akan menghubungi untuk menginformasikan ketersediaan layanan
            Indihome di wilayah Anda secepatnya
          </Dialog.Description>
          <ScrollArea.Root type="auto" className="h-[85%] w-full">
            <ScrollArea.Viewport className="flex h-full w-full flex-col">
              {children}
            </ScrollArea.Viewport>
            <ScrollArea.ScrollAreaScrollbar
              orientation="vertical"
              className="flex w-1.5 touch-none select-none rounded-md bg-slate-200 p-0.5"
            >
              <ScrollArea.ScrollAreaThumb className="relative flex-1 rounded-md bg-slate-500 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-2 before:w-full before:min-w-4 before:-translate-x-1/2 before:-translate-y-1/2 hover:bg-slate-600" />
            </ScrollArea.ScrollAreaScrollbar>
          </ScrollArea.Root>

          <Dialog.Close
            className={clsx(
              "absolute right-3.5 top-3.5 inline-flex items-center justify-center rounded-full p-1",
              "focus:outline-none focus-visible:ring focus-visible:ring-brand-pi-300 focus-visible:ring-opacity-75",
            )}
            onClick={() => {
              console.log("Dialog.Close onClick called");
              context?.setShowModal(false);
            }}
          >
            <IconCloseInCircle className="h-4 w-4 text-brand-pi-300" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
