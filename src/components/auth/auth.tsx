"use client";

import React from "react";
import { Button } from "../ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

const formSchema = z.object({
  email: z.string().min(2).max(12),
  password: z.string().min(6).max(20),
});

const AuthForm = ({ formType }: { formType: "Login" | "Signup" }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (formType === "Login") {
      console.log(values, "loggin in user");
    } else {
      console.log(values, "signing up user");
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="user@gmail.com" {...field} />
                </FormControl>
                <FormDescription>
                  enter your registered email id
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="xxxxx" {...field} />
                </FormControl>
                <FormDescription>enter your password here</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {" "}
            {formType === "Signup" ? "Sign up" : "Login"}
          </Button>
        </form>
      </Form>
    </>
  );
};

const Auth = () => {
  return (
    <div className="flex items-center space-x-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Sign up</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>sigup to continue shopping</DialogTitle>
          </DialogHeader>
          <div>
            <AuthForm formType={"Signup"} />
          </div>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Login</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login to continue shopping</DialogTitle>
          </DialogHeader>
          <div>
            <AuthForm formType={"Login"} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Auth;
