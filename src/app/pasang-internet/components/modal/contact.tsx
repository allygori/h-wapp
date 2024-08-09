import clsx from "clsx";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import { useContext, useEffect, useState } from "react";
import { InputText2 } from "@/components/inputs/input-text";
import { InputPhoneNumber2 } from "@/components/inputs/input-phone-number";
import { InputTextarea } from "@/components/inputs/input-textarea";
import {
  InputSelect2,
  type OptionItem,
} from "@/components/inputs/input-select";
// import Select from "@/components/select/select";
import IconCloseInCircle from "@/components/svgs/close-in-circle";
import IconWhatsApp from "@/components/svgs/whatsapp";
import {
  // ModalContactProvider,
  ModalContactContext,
  type ModalContactContextType,
} from "./";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { PEKANBARU_DISTRICTS } from "@/constants/pekanbaru";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  // useEffect(() => {
  //   console.log("open:", open);
  //   console.log("context.showModal:", context.showModal);
  // }, [open, context.showModal]);

  console.log("form::watch::phone_number", watch("phone_number")); // watch input value by passing the name of it

  useEffect(() => {
    console.log("errors: ", errors);
  }, [errors]);

  useEffect(() => {
    console.log("getValues::all:", getValues());
  }, [getValues]);

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
          <Dialog.Title className="text-base font-bold text-gray-900">
            Formulir
          </Dialog.Title>
          <Dialog.Description className="my-2 text-sm text-gray-600">
            Kami akan menghubungi untuk menginformasikan ketersediaan layanan
            Indihome di wilayah Anda secepatnya
          </Dialog.Description>
          <ScrollArea.Root type="auto" className="h-[85%] w-full">
            <ScrollArea.Viewport className="flex h-full w-full flex-col">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative mt-4 h-full w-full"
              >
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>

                {/* <Controller
                  name="phone_number"
                  control={control}
                  render={({ field }) => {
                    return (
                      <InputText2
                        label="No WhatsApp"
                        icon={
                          <IconWhatsApp className="h-5 w-5 text-green-400" />
                        }
                        placeholder="+62 812 8888 5555"
                        required={true}
                        {...field}
                      />
                    );
                  }}
                /> */}

                <Controller
                  name="phone_number"
                  control={control}
                  render={({ field }) => {
                    return (
                      <InputPhoneNumber2
                        label="No WhatsApp"
                        icon={
                          <IconWhatsApp className="h-5 w-5 text-green-400" />
                        }
                        placeholder="+62 812 8888 5555"
                        required={true}
                        showMandatoryFlag={true}
                        {...field}
                      />
                    );
                  }}
                />

                {/* {errors["phone_number"]?.type === "required" && (
                  <p role="alert">Wajib diisi</p>
                )} */}
                {/* <div>
                  <InputPhoneNumber2
                    label="No WhatsApp"
                    icon={<IconWhatsApp className="h-5 w-5 text-green-400" />}
                    placeholder="+62 812 8888 5555"
                    required={true}
                    showMandatoryFlag={true}
                    {...register("phone_number", { required: true })}
                  />
                  {errors["phone_number"]?.type === "required" && (
                    <p role="alert">Wajib diisi</p>
                  )}
                </div> */}

                <Controller
                  name="city"
                  control={control}
                  render={({ field }) => {
                    return (
                      <InputSelect2
                        label="Kota"
                        required={true}
                        showMandatoryFlag={true}
                        disabled={true}
                        defaultValue={"pekanbaru"}
                        options={[
                          {
                            text: "Pekanbaru",
                            value: "pekanbaru",
                            disabled: true,
                          },
                        ]}
                        {...field}
                      />
                    );
                  }}
                />

                {/* <InputSelect2
                  label="Kota"
                  required={true}
                  showMandatoryFlag={true}
                  disabled={true}
                  defaultValue={"pekanbaru"}
                  options={[
                    {
                      text: "Pekanbaru",
                      value: "pekanbaru",
                      disabled: true,
                    },
                  ]}
                  {...register("city")}
                /> */}

                <div className="flex w-full flex-row space-x-2">
                  <Controller
                    name="district"
                    control={control}
                    defaultValue=""
                    render={({ field }) => {
                      return (
                        <InputSelect2
                          label="Kecamatan"
                          placeholder="Sukajadi"
                          className="flex-1"
                          required={true}
                          showMandatoryFlag={true}
                          onValueChange={(val) => field.onChange(val)}
                          options={PEKANBARU_DISTRICTS.map((district) => {
                            return {
                              text: district.name,
                              value: district.name,
                              disabled: false,
                            };
                          })}
                          {...field}
                        />
                      );
                    }}
                  />
                  {/* <InputSelect2
                    label="Kecamatan"
                    placeholder="Sukajadi"
                    className="flex-1"
                    required={true}
                    showMandatoryFlag={true}
                    options={PEKANBARU_DISTRICTS.map((district, idx) => {
                      return {
                        text: district.name,
                        value: district.name,
                        disabled: false,
                      };
                    })}
                    {...register("district")}
                  /> */}

                  <Controller
                    name="village"
                    control={control}
                    defaultValue=""
                    render={({ field }) => {
                      return (
                        <InputSelect2
                          label="Kelurahan"
                          placeholder="Jadirejo"
                          className="flex-1"
                          required={true}
                          showMandatoryFlag={true}
                          options={villages}
                          // options={PEKANBARU_DISTRICTS.filter((district) => {
                          //   console.log("getValues", getValues("district"));
                          //   return (
                          //     district.name.toLowerCase() ===
                          //     getValues("district")
                          //   );
                          // }).map((district) => {
                          //   return {
                          //     text: district.name,
                          //     value: district.name,
                          //     disabled: false,
                          //   };
                          // })}
                          {...field}
                        />
                      );
                    }}
                  />

                  {/* <InputSelect2
                    label="Kelurahan"
                    placeholder="Jadirejo"
                    className="flex-1"
                    required={true}
                    showMandatoryFlag={true}
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
                    {...register("village")}
                  /> */}
                </div>

                <InputTextarea
                  label="Alamat"
                  placeholder="Jalan Durian No.39"
                  required={true}
                  showMandatoryFlag={true}
                  {...register("address")}
                />

                <InputTextarea
                  label="Catatan"
                  placeholder="Apakah teknisi bisa datang secepatnya?"
                  required={false}
                  showMandatoryFlag={true}
                  {...register("notes")}
                />
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
