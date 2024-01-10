"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// FORM
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createPackage } from "../actions";
import { useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  name: z.string().min(2).max(100),
  location: z.string().min(2).max(100),
});

export function AddPackageModal({ page }: { page: number }) {
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (price === 0) return;

    const res = await createPackage({
      price,
      name: values.name,
      location: values.location,
    });

    if (res) {
      queryClient.invalidateQueries({
        queryKey: [`packages:${page}`],
      });
      setOpen(false);
      form.reset();
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="mr-2" /> Add Package
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Package</DialogTitle>
          <DialogDescription>
            Add a new package for your customers.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="grid items-center grid-cols-4 gap-4">
                    <FormLabel className="text-right">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Package Name"
                        className="col-span-3"
                        {...field}
                      />
                    </FormControl>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <div className="grid items-center grid-cols-4 gap-4">
                    <FormLabel className="text-right">Location</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Location of the Package"
                        className="col-span-3"
                        {...field}
                      />
                    </FormControl>
                  </div>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="price" className="text-right">
                Price/person
              </Label>
              <Input
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                type="number"
                id="price"
                defaultValue="Price per person"
                className="col-span-3"
              />
            </div>

            <DialogFooter className="mt-4 -mb-4">
              <Button type="submit">Confirm</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
