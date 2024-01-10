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
import { Textarea } from "@/components/ui/textarea";
import { CollapsibleSelect } from "../collapsible";
import { updateExclusions } from "../actions";
import { useQueryClient } from "@tanstack/react-query";

export function UpdateExclusionsModal({ page }: { page: number }) {
  const { selected, setSelected, toggleEditExc, setToggleEditExc } =
    usePackageContext();
  const [details, setDetails] = useState("");
  const queryClient = useQueryClient();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!selected) return null;

    const res = await updateExclusions({
      selectedID: selected.id,
      exclusions: [...selected.exclusions, details],
    });
    if (res) {
      queryClient.invalidateQueries({
        queryKey: [`packages:${page}`],
      });
      setDetails("");
      setToggleEditExc(false);
      setSelected(undefined);
    }
  }

  async function removeDetail(index: number) {
    if (!selected) return null;

    let array = [...selected.exclusions];
    if (index > -1) {
      array.splice(index, 1);
    }

    const res = await updateExclusions({
      selectedID: selected.id,
      exclusions: array,
    });
    if (res) {
      queryClient.invalidateQueries({
        queryKey: [`packages:${page}`],
      });
      setToggleEditExc(false);
      setSelected(undefined);
    }
  }

  if (!selected) return null;
  return (
    <Dialog
      open={toggleEditExc}
      onOpenChange={(e) => {
        setToggleEditExc(false);
        setSelected(undefined);
      }}
    >
      <DialogContent className="w-full max-w-2xl">
        <DialogHeader>
          <DialogTitle>Update Exclusions</DialogTitle>
          <DialogDescription>
            Make changes to exclusions for package{" "}
            <span className="font-bold">{selected.name}</span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid w-full grid-cols-5 gap-4">
          <CollapsibleSelect
            data={selected.exclusions || []}
            removeDetail={removeDetail}
          />
          <form
            className="flex flex-col col-span-3 gap-2"
            onSubmit={handleSubmit}
          >
            <Label htmlFor="details" className="text-left">
              Details
            </Label>
            <Textarea
              placeholder="Enter details to be included..."
              id="details"
              className="col-span-3"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
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
