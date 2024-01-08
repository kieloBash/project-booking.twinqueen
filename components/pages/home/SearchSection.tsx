"use client";
import React from "react";

// FORM
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const SearchValidation = z.object({
  location: z.string(),
  date: z.string(),
  guests: z.string(),
});

const SearchSection = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(SearchValidation),
    defaultValues: {
      location: "",
      date: "",
      guests: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SearchValidation>) {
    console.log({ ...values, guests: Number(values.guests) });
    alert("Search");
    reset();
  }

  return (
    <form
      className="w-full p-4 rounded-md bg-white shadow-lg flex mt-4 gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex-1 flex-col flex">
        <label htmlFor="location" className="font-semibold text-accent-900">
          Location
        </label>
        <input
          type="text"
          {...register("location")}
          className="w-full text-sm outline-none px-2 py-1"
          placeholder="Enter your destination"
        />
      </div>
      <div className="flex-1 flex-col flex">
        <label htmlFor="date" className="font-semibold text-accent-900">
          Date
        </label>
        <input
          type="text"
          {...register("date")}
          className="w-full text-sm outline-none px-2 py-1"
          placeholder="When are you going?"
        />
      </div>
      <div className="flex-1 flex-col flex">
        <label htmlFor="guests" className="font-semibold text-accent-900">
          Guests
        </label>
        <input
          type="text"
          {...register("guests")}
          className="w-full text-sm outline-none px-2 py-1"
          placeholder="How many guests?"
        />
      </div>
      <Button type="submit">Explore Now</Button>
    </form>
  );
};

export default SearchSection;
