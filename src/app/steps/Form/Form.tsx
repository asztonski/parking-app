import { useContext, useState, useEffect } from "react";
import { Input } from "@/app/components/UI/Form/Input";
import { initialFormFields } from "@/app/api/formData";
import { useFormik } from "formik";
import { AppContext } from "@/app/contexts/AppContext";
import { Button } from "@/app/components/UI/Button/Button";
import { formSchema } from "@/app/helpers/formSchema";

export const Form = () => {
  const { customerData, setCustomerData } = useContext(AppContext);

  const onSubmit = (values, actions) => {
    setCustomerData((prevCustomerData) => [
      ...prevCustomerData,
      {
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        model: values.model,
        plates: values.plates,
      },
    ]);
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

  useEffect(() => {
    console.log(customerData)
  }, [customerData])

  return (
    <div className="w-full">
      <form
        className="relative p-4 md:p-10 w-full flex flex-col gap-10 after:absolute after:-z-10 after:bg-secondary after:opacity-20 after:w-full after:h-full after:rounded-lg after:inset-0"
      >
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
        <span
          className={`text-red-500 ${hasError ? "opacity-100" : "opacity-0"}`}
        >
          All fields are required.
        </span>
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};
