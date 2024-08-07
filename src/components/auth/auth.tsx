"use client";

import React, { useState, useContext } from "react";
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
import { createClient } from "@/utils/index";
import { AuthContext } from "@/context/auth-context";

const formSchema = z.object({
  email: z.string().min(2).max(30),
  password: z.string().min(6).max(30),
  name: z.string().optional(),
});

const AuthForm = ({
  formType,
  onSuccess,
}: {
  formType: "Login" | "Signup";
  onSuccess: () => void;
}) => {
  const supabase = createClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  async function onSubmit({
    email,
    password,
    name,
  }: z.infer<typeof formSchema>) {
    if (formType === "Signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });
      if (!name) {
        return alert("Name is required");
      }
      if (error) {
        console.error(error);
        return alert(error.message);
      }
      onSuccess();
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        console.error(error);
        return alert(error.message);
      }
      onSuccess();
    }
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {formType === "Signup" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="enter your name here"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    enter your name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="user@gmail.com" {...field} />
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
                  <Input type="password" {...field} />
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
  const { user } = useContext(AuthContext);
  const supabase = createClient();

  const [isAuthDialogueOpen, setIsAuthDialogueOpen] = useState(false);
  const [isLoginDialogueOpen, setLoginDialogueOpen] = useState(false);
  return (
    <div className="flex items-center space-x-3">
      {user && (
        <Button
          onClick={async () => {
            // console.log("logging out after this");
            await supabase.auth.signOut();
            window.location.reload();
          }}
        >
          Logout
        </Button>
      )}

      {!user && (
        <>
          <Dialog
            open={isAuthDialogueOpen}
            onOpenChange={setIsAuthDialogueOpen}
          >
            <DialogTrigger asChild>
              <Button variant="outline">Sign up</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>signup to continue shopping</DialogTitle>
              </DialogHeader>
              <div>
                <AuthForm
                  formType={"Signup"}
                  onSuccess={() => {
                    setIsAuthDialogueOpen(false);
                    alert("Check email for confirmation");
                  }}
                />
              </div>
            </DialogContent>
          </Dialog>
          <Dialog
            open={isLoginDialogueOpen}
            onOpenChange={setLoginDialogueOpen}
          >
            <DialogTrigger asChild>
              <Button variant="outline">Login</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Login to continue shopping</DialogTitle>
              </DialogHeader>
              <div>
                <AuthForm
                  formType={"Login"}
                  onSuccess={() => {
                    setIsAuthDialogueOpen(false);
                    window.location.reload();
                  }}
                />
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default Auth;
