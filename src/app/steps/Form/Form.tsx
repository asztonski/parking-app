"use client";
import { useState } from "react";
import { Input } from "@/app/components/UI/Form/Input";
import { initialFormFields } from "@/app/api/formData"

export const Form = () => {
  return (
    <div className="w-full">
      <form
        className="relative p-10 w-full flex flex-col gap-10 after:absolute after:-z-10 after:bg-secondary after:opacity-20 after:w-full after:h-full after:rounded-lg after:inset-0"
        action=""
      >
        {initialFormFields.map((input, id) => (
            <Input placeholder={input.label} key={id} label={input.label} name={input.name} required  />
        ))}
      </form>
    </div>
  );
};
