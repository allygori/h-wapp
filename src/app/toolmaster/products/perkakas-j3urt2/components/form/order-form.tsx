"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import supabase from "@/app/toolmaster/_lib/supabase";
import IconSpinner from "@/svgs/spinner";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  className?: string;
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Masukan nama Anda",
  }),
  phone: z
    .string()
    .min(9, {
      message: "Minimal 9 karakter",
    })
    .max(14, {
      message: "Maksimal 14 karakter",
    }),
  // .refine(isValidPhoneNumber, {
  //   message: "Harap masukan no whatsapp yang sesuai",
  // }),
  // .transform((value) => parsePhoneNumber(value).number.toString()),
});

const OrderForm = ({ className = "" }: Props) => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  useEffect(() => {
    console.log("form.formState", form.formState);
  }, [form.formState]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("onSubmit values", values);
    setIsError(false);
    setIsLoading(true);
    const { name, phone } = values;
    const notes = "Kunci Pas 40 Pcs Multipurpose Combination Socket Wrench Set";
    const price = 89300;

    try {
      const { error } = await supabase
        .from("order-1")
        .insert({ name, phone, notes, price });
      if (error) {
        throw error;
      }

      toast({
        title: "Berhasil!",
        description:
          "Order berhasil dikirim. Kami akan menghubungi Anda secepatnya.",
      });

      setIsSubmitted(true);
      form.reset();
      // setFeedback("Form submitted successfully");
      // resetForm();
    } catch (error) {
      console.log("Error occurred", { error });
      // setFeedback("An error occurred");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={cn(className, "w-full md:w-10/12")}>
      <Card className="border border-slate-600">
        <CardHeader>
          <CardTitle>Order</CardTitle>
          <CardDescription>
            {!isSubmitted && (
              <span>
                Masukan nama & no whatsapp. Kami akan menghubungi Anda
                secepatnya.
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="h-auto min-h-48 w-full py-8 text-center">
              <p className="text-base font-semibold text-green-400">
                Terimakasih, order berhasil terkirim.
              </p>
              <p className="text-sm font-normal text-slate-500">
                Kami akan menginformasikan mengenai ketersediaan stok & ongkos
                kirim secepatnya.
              </p>
            </div>
          ) : (
            <>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Wahyu Setiono"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>No WhatsApp</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="081200001111"
                            {...field}
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-red-400" />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className={cn(
                      "bg-green-500 hover:bg-green-400 enabled:cursor-pointer",
                      "disabled:cursor-not-allowed disabled:bg-slate-400 disabled:hover:bg-slate-400",
                    )}
                    disabled={!form?.formState?.isValid || isLoading}
                  >
                    {isLoading ? (
                      <>
                        <IconSpinner className="mr-2 h-4 w-4 animate-[spin_1.5s_linear_infinite]" />
                        <span>Mengirim</span>
                      </>
                    ) : (
                      <span>Pesan</span>
                    )}
                  </Button>
                </form>
              </Form>
              {isError ? (
                <div className="mt-4 overflow-hidden rounded-md border border-red-400 p-4 text-sm">
                  <p className="text-center text-red-400">
                    Terjadi kesalah pada server. Harap coba lagi beberapa saat..
                  </p>
                </div>
              ) : null}
            </>
          )}
        </CardContent>
        {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
      </Card>
    </section>
  );
};

export default OrderForm;
