"use client";

import AppInput from "@/components/AppInput";
import PrimaryButton from "@/components/PrimaryButton";
import { ITodo, todoSchema } from "@/lib/schemas/todo";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const AddTodo = () => {
  const methods = useForm<ITodo>({
    resolver: zodResolver(todoSchema),
    mode: "onChange",
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: ITodo) => {
    console.log({ data });
  };

  return (
    <div className="bg-white shadow-md p-3 w-[60%] m-auto rounded-lg">
      <p className="text-2xl/7 font-semibold mb-5">Add Todo</p>
      <FormProvider {...methods}>
        <AppInput label="Enter title" name="title" />
        <AppInput label="Enter Description" name="description" />
        <PrimaryButton onClick={handleSubmit(onSubmit)}>Submit</PrimaryButton>
      </FormProvider>
    </div>
  );
};

export default AddTodo;
