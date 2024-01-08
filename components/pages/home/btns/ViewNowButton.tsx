"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ViewNowButton = () => {
  const router = useRouter();
  return (
    <Button
      className="py-2 w-full"
      onClick={() => router.push("/discover")}
      type="button"
    >
      View Now
    </Button>
  );
};

export default ViewNowButton;
