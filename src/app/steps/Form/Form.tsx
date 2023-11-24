'use client'
import { useContext, useState, useEffect } from "react";
import { Input } from "@/app/components/UI/Form/Input";
import { initialFormFields } from "@/app/api/formData";
import { useFormik } from "formik";
import { AppContext } from "@/app/contexts/AppContext";
import { Button } from "@/app/components/UI/Button/Button";
import { formSchema } from "@/app/helpers/formSchema";

export const Form = () => {
  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const { setStep, setCustomerData } = appContext;

  const onSubmit = (values, actions) => {
    if (hasError) {
      return;
    }

    const newCustomer = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      email: values.email,
      model: values.model,
      plates: values.plates,
    };

    setCustomerData(newCustomer);
    setStep("date");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        model: "",
        plates: "",
      },
      validationSchema: formSchema,
      onSubmit,
    });

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(Object.keys(errors).length > 0);
  }, [errors]);

  return (
    <form>
      {initialFormFields.map((input, index) => (
        <Input
          value={values[input.name]}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={input.label}
          key={index}
          id={input.name}
          name={input.name}
          error={errors[input.name]}
          touched={touched[input.name]}
        />
      ))}
      <div className="flex flex-col">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </form>
  );
};
