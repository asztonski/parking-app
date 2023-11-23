"use client";
import { useContext } from "react";
import { Input } from "@/app/components/UI/Form/Input";
import { initialFormFields } from "@/app/api/formData"
import { useFormik } from "formik";
import { AppContext } from "@/app/contexts/AppContext";
import { Button } from "@/app/components/UI/Button/Button";
import { formSchema } from "@/app/helpers/formSchema";

export const Form = () => {
    const { setCustomerData } = useContext(AppContext)

    const onSubmit = () => {
        console.log('dupa')
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            model: '',
            plates: ''
        },
        validationSchema: formSchema,
        onSubmit,
    })


  return (
    <div className="w-full">
      <form
        className="relative p-10 w-full flex flex-col gap-10 after:absolute after:-z-10 after:bg-secondary after:opacity-20 after:w-full after:h-full after:rounded-lg after:inset-0"
        onSubmit={handleSubmit}
      >
        {initialFormFields.map((input, index) => (
            <Input value={values[input.name]} onChange={handleChange} onBlur={handleBlur} placeholder={input.label} key={index} id={input.name} name={input.name} error={errors[input.name]} touched={touched[input.name]} />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
