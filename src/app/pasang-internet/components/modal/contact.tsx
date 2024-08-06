import clsx from "clsx";
import { useForm } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useEffect, useState } from "react";
import { InputText2 } from "@/components/inputs/input-text";
import { InputTextarea } from "@/components/inputs/input-textarea";
import { InputSelect, InputSelect2 } from "@/components/inputs/input-select";
// import Select from "@/components/select/select";
import IconCloseInCircle from "@/components/svgs/close-in-circle";
import {
  // ModalContactProvider,
  ModalContactContext,
  type ModalContactContextType,
} from "./";

type Props = {
  open?: boolean;
  openModal?: () => void;
  closeModal?: () => void;
  onOpenChange?: (open: boolean) => void;
};

const ModalContact = ({
  open = false,
  closeModal = () => {},
  onOpenChange = () => {},
}: Props) => {
  // const [isOpen, setIsOpen] = useState(false);
  const context = useContext(ModalContactContext) as ModalContactContextType;

  useEffect(() => {
    console.log("open:", open);
    console.log("context.showModal:", context.showModal);
  }, [open, context.showModal]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {/* <Dialog.Trigger></Dialog.Trigger> */}
      <Dialog.Portal>
        {/* <Dialog.Overlay className="data-[state=open]:animate-overlay-show fixed inset-0 bg-black/30" /> */}
        {/* <Dialog.Overlay
          className={clsx(open ? "inset fixed bg-black opacity-30" : "")}
        /> */}
        {/* {open ? (
          <Dialog.Overlay className={clsx("inset fixed bg-black opacity-30")} />
        ) : null} */}

        <Dialog.Overlay className="radix-state-closed:px radix-state-closed:-mx fixed inset-0 z-50 bg-black opacity-0 transition-opacity delay-0 duration-700 ease-in-out radix-state-closed:h-1 radix-state-closed:w-1 radix-state-closed:border-0 radix-state-open:h-full radix-state-open:w-full radix-state-open:opacity-30" />

        <Dialog.Content
          className={clsx(
            "fixed z-50",
            "w-[95vw] max-w-md rounded-lg p-4",
            "md:w-full",
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            "lg:w-[40vw] lg:max-w-full",
            // "left-0 top-0",
            "bg-white",
            "radix-state-open:animate-content-show",
            "radix-state-closed::animate-content-hide",
            // "transition-all delay-150 duration-500 ease-in-out",
            // "-top-full left-0",
            // open ? "left-0 top-0" : "-left-full -ml-24",

            // open
            //   ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            //   : "-top-full left-0",
          )}
        >
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>
            <p>Kami akan menghubungi anda secepatnya</p>
          </Dialog.Description>
          <form action="" className="relative h-full w-full">
            <InputText2 label="No WhatsApp" />
            {/* <InputSelect
              label="Kota"
              options={[
                {
                  text: "Pekanbaru",
                  value: "pekanbaru",
                  disabled: true,
                },
                {
                  text: "Pekanbaru 1",
                  value: "pekanbaru",
                  disabled: false,
                },
                {
                  text: "Pekanbaru 2",
                  value: "pekanbaru",
                  disabled: false,
                },
                {
                  text: "Pekanbaru 3",
                  value: "pekanbaru",
                  disabled: false,
                },
              ]}
            /> */}
            <InputSelect2
              label="Kota"
              options={[
                {
                  text: "Pekanbaru",
                  value: "pekanbaru-1",
                  disabled: true,
                },
                {
                  text: "Pekanbaru 1",
                  value: "pekanbaru-2",
                  disabled: false,
                },
                {
                  text: "Pekanbaru 2",
                  value: "pekanbaru-3",
                  disabled: false,
                },
                {
                  text: "Pekanbaru 3",
                  value: "pekanbaru",
                  disabled: false,
                },
              ]}
            />

            <div className="flex w-full flex-row space-x-2">
              <InputSelect2
                label="Kecamatan"
                className="flex-1"
                options={[
                  {
                    text: "Pekanbaru",
                    value: "pekanbaru-1",
                    disabled: true,
                  },
                  {
                    text: "Pekanbaru 1",
                    value: "pekanbaru-2",
                    disabled: false,
                  },
                  {
                    text: "Pekanbaru 2",
                    value: "pekanbaru-3",
                    disabled: false,
                  },
                  {
                    text: "Pekanbaru 3",
                    value: "pekanbaru",
                    disabled: false,
                  },
                ]}
              />
              <InputSelect2
                label="Kelurahan"
                className="flex-1"
                options={[
                  {
                    text: "Pekanbaru",
                    value: "pekanbaru-1",
                    disabled: true,
                  },
                  {
                    text: "Pekanbaru 1",
                    value: "pekanbaru-2",
                    disabled: false,
                  },
                  {
                    text: "Pekanbaru 2",
                    value: "pekanbaru-3",
                    disabled: false,
                  },
                  {
                    text: "Pekanbaru 3",
                    value: "pekanbaru",
                    disabled: false,
                  },
                ]}
              />
            </div>

            <InputTextarea label="Alamat" />

            <InputTextarea label="Catatan" />
          </form>
          <div className="mt-4 flex justify-end">
            <Dialog.Close
              className={clsx(
                "inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium",
                "bg-green-500 text-white hover:bg-green-600",
                "border border-transparent",
                "focus:outline-none",
              )}
            >
              Kirim
            </Dialog.Close>
          </div>

          <Dialog.Close
            className={clsx(
              "absolute right-3.5 top-3.5 inline-flex items-center justify-center rounded-full p-1",
              "focus:outline-none focus-visible:ring focus-visible:ring-brand-pi-300 focus-visible:ring-opacity-75",
            )}
            onClick={() => {
              console.log("Dialog.Close onClick called");
              // context?.closeModal();
              context?.setShowModal(false);
            }}
          >
            {/* <Cross1Icon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" /> */}
            <IconCloseInCircle className="h-4 w-4 text-brand-pi-300" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalContact;
