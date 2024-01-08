"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

const SignInButton = () => {
  return (
    <Button type="button" onClick={() => signIn("google")}>
      Get Started
    </Button>
  );
};

export default SignInButton;
