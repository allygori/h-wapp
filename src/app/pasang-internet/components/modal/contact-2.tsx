import clsx from "clsx";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useEffect, useState } from "react";
import { type OptionItem } from "@/components/inputs/input-select";
import IconCloseInCircle from "@/components/svgs/close-in-circle";
import { ModalContactContext, type ModalContactContextType } from "./";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { PEKANBARU_DISTRICTS } from "@/constants/pekanbaru";
import FormContact from "@/components/forms/contact";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

type Inputs = {
  phone_number: string;
  city: string;
  district: string;
  village: string;
  address: string;
  notes?: string;
};

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
  const [villages, setVillages] = useState<OptionItem[] | undefined>([]);
  const context = useContext(ModalContactContext) as ModalContactContextType;
  const {
    control,
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      phone_number: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  useEffect(() => {
    const district = watch("district");
    console.log("district", district);
    if (district) {
      const vills = PEKANBARU_DISTRICTS.find(
        (item) => item.name.toLowerCase() === district,
      )?.villages.map((village) => {
        // console.log("village", village);
        return {
          text: village.name,
          value: village.name,
          disabled: false,
        };
      });
      console.log("vills", vills);
      setVillages(vills);
    }
  }, [watch]);

  console.log("form::watch::phone_number", watch("phone_number")); // watch input value by passing the name of it

  useEffect(() => {
    console.log("errors: ", errors);
  }, [errors]);

  useEffect(() => {
    console.log("getValues::all:", getValues());
  }, [getValues]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
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
        <DialogHeader>
          <DialogTitle className="text-base font-bold text-gray-900">
            Formulir
          </DialogTitle>
          <DialogDescription className="my-2 text-sm text-gray-600">
            Kami akan menghubungi untuk menginformasikan ketersediaan layanan
            Indihome di wilayah Anda secepatnya
          </DialogDescription>
        </DialogHeader>

        {/* <ScrollArea.Root type="auto" className="h-[85%] w-full">
            <ScrollArea.Viewport className="flex h-full w-full flex-col"> */}
        <FormContact />
        {/* </ScrollArea.Viewport>
            <ScrollArea.ScrollAreaScrollbar
              orientation="vertical"
              className="flex w-1.5 touch-none select-none rounded-md bg-slate-200 p-0.5"
            >
              <ScrollArea.ScrollAreaThumb className="relative flex-1 rounded-md bg-slate-500 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-2 before:w-full before:min-w-4 before:-translate-x-1/2 before:-translate-y-1/2 hover:bg-slate-600" />
            </ScrollArea.ScrollAreaScrollbar>
          </ScrollArea.Root> */}

        <DialogClose
          className={clsx(
            "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
          )}
          onClick={() => {
            console.log("Dialog.Close onClick called");
            context?.setShowModal(false);
          }}
        >
          <IconCloseInCircle className="h-4 w-4 text-primary" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ModalContact;
