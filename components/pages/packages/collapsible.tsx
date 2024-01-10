"use client";

import * as React from "react";
import { ChevronsUpDown, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";

export function CollapsibleSelect({
  data,
  removeDetail,
}: {
  data: any[];
  removeDetail: (idx: number) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (data.length === 0)
    return (
      <div className="flex items-center justify-center w-full h-full col-span-2 text-center border rounded-md">
        <Label className="w-full font-normal">No items found</Label>
      </div>
    );

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="col-span-2 p-2 space-y-2 border rounded-md"
    >
      <div className="flex items-center justify-between px-4 space-x-4">
        <h4 className="text-sm font-semibold">Items {data.length}</h4>
        <CollapsibleTrigger asChild>
          <Button
            disabled={data.length <= 1}
            variant="ghost"
            size="sm"
            className="p-0 w-9"
          >
            <ChevronsUpDown className="w-4 h-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      {data.length === 1 ? (
        <>
          <div className="flex items-center justify-between px-4 py-3 font-mono text-sm border rounded-md line-clamp-1">
            <span className="line-clamp-1 w-[200px]">{data[0]}</span>{" "}
            <Button
              type="button"
              onClick={() => {
                removeDetail(0);
              }}
              variant={"ghost"}
              className="w-4 h-4 p-0"
            >
              <Trash className="w-full h-full" />
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between px-4 py-3 font-mono text-sm border rounded-md line-clamp-1">
            <span className="line-clamp-1 w-[200px]">{data[0]}</span>{" "}
            <Button
              type="button"
              onClick={() => {
                removeDetail(0);
              }}
              variant={"ghost"}
              className="w-4 h-4 p-0"
            >
              <Trash className="w-full h-full" />
            </Button>
          </div>
          <CollapsibleContent className="space-y-2">
            {data.map((d, index) => {
              if (index > 0)
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between px-4 py-3 font-mono text-sm border rounded-md "
                  >
                    <span className="line-clamp-1 w-[200px]">{d}</span>{" "}
                    <Button
                      type="button"
                      onClick={() => {
                        removeDetail(index);
                      }}
                      variant={"ghost"}
                      className="w-4 h-4 p-0"
                    >
                      <Trash className="w-full h-full" />
                    </Button>
                  </div>
                );
            })}
          </CollapsibleContent>
        </>
      )}
    </Collapsible>
  );
}
