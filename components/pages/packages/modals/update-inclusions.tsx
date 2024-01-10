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
import { updateInclusions } from "../actions";
import { useQueryClient } from "@tanstack/react-query";

export function UpdateInclusionsModal({ page }: { page: number }) {
  const { selected, setSelected, toggleEditInc, setToggleEditInc } =
    usePackageContext();
  const [details, setDetails] = useState("");
  const queryClient = useQueryClient();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!selected) return null;

    const res = await updateInclusions({
      selectedID: selected.id,
      inclusions: [...selected.inclusions, details],
    });
    if (res) {
      queryClient.invalidateQueries({
        queryKey: [`packages:${page}`],
      });
      setDetails("");
      setToggleEditInc(false);
      setSelected(undefined);
    }
  }

  async function removeDetail(index: number) {
    if (!selected) return null;

    let array = [...selected.inclusions];
    if (index > -1) {
      array.splice(index, 1);
    }

    const res = await updateInclusions({
      selectedID: selected.id,
      inclusions: array,
    });
    if (res) {
      queryClient.invalidateQueries({
        queryKey: [`packages:${page}`],
      });
      setToggleEditInc(false);
      setSelected(undefined);
    }
  }

  if (!selected) return null;
  return (
    <Dialog
      open={toggleEditInc}
      onOpenChange={(e) => {
        setToggleEditInc(false);
        setSelected(undefined);
      }}
    >
      <DialogContent className="w-full max-w-2xl">
        <DialogHeader>
          <DialogTitle>Update Inclusions</DialogTitle>
          <DialogDescription>
            Make changes to inclusions for package{" "}
            <span className="font-bold">{selected.name}</span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid w-full grid-cols-5 gap-4">
          <CollapsibleSelect data={selected.inclusions || []} removeDetail={removeDetail} />
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
