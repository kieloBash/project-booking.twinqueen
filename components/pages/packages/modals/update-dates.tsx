"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { usePackageContext } from "../context/usePackageContext";
import { FormEvent, useState } from "react";
import { CollapsibleSelect } from "../collapsible";
import { updateDates } from "../actions";
import { useQueryClient } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import dayjs from "dayjs";

export function UpdateDatesModal({ page }: { page: number }) {
  const { selected, setSelected, toggleEditDates, setToggleEditDates } =
    usePackageContext();
  const [details, setDetails] = useState<Date | undefined>();
  const queryClient = useQueryClient();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!selected) return null;
    console.log([...selected.dates, details]);
    const newData = [...selected.dates, details];

    const res = await updateDates({
      selectedID: selected.id,
      dates: newData as Date[],
    });
    if (res) {
      queryClient.invalidateQueries({
        queryKey: [`packages:${page}`],
      });
      setDetails(undefined);
      setToggleEditDates(false);
      setSelected(undefined);
    }
  }

  async function removeDetail(index: number) {
    if (!selected) return null;

    let array = [...selected.dates];
    if (index > -1) {
      array.splice(index, 1);
    }

    const res = await updateDates({
      selectedID: selected.id,
      dates: array as Date[],
    });
    if (res) {
      queryClient.invalidateQueries({
        queryKey: [`packages:${page}`],
      });
      setToggleEditDates(false);
      setSelected(undefined);
    }
  }

  if (!selected) return null;
  return (
    <Dialog
      open={toggleEditDates}
      onOpenChange={(e) => {
        setToggleEditDates(false);
        setSelected(undefined);
      }}
    >
      <DialogContent className="w-full max-w-2xl">
        <DialogHeader>
          <DialogTitle>Update Dates</DialogTitle>
          <DialogDescription>
            Make changes to the dates for the package{" "}
            <span className="font-bold">{selected.name}</span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid w-full grid-cols-5 gap-4">
          <CollapsibleSelect
            data={
              selected.dates.map((d) => dayjs(d).format("MMM DD YYYY")) || []
            }
            removeDetail={removeDetail}
          />
          <form
            className="flex flex-col col-span-3 gap-2"
            onSubmit={handleSubmit}
          >
            <Label htmlFor="details" className="text-left">
              Date
            </Label>
            <Input
              type="date"
              value={details ? details.toISOString().split("T")[0] : ""}
              onChange={(e) => setDetails(new Date(e.target.value))}
            />
            <DialogFooter>
              <Button type="submit">Confirm</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
