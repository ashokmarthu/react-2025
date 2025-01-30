import React, { useRef } from "react";
import InputField from "./InputField";
const fields = [
  {
    name: "title",
    label: "Title",
    type: "text",
  },
  {
    name: "createdAt",
    label: "Created At",
    type: "date",
  },
  {
    name: "subTitle1",
    label: "SubTitle1",
    type: "text",
  },
  {
    name: "subTitle2",
    label: "SubTitle2",
    type: "text",
  },
  {
    name: "tasks",
    label: "Tasks",
    type: "text",
  },
];
const Form = ({ setTasks, setOpenForm }) => {
  const formData = useRef({
    title: "",
    createdAt: "",
    tasks: [],
    subTitle1: "",
    subTitle2: "",
  });
  const onUserChange = (e) => {
    formData.current[e.target.id] = e.target.value;
  };
  const handleFormData = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, formData.current]);
    setOpenForm(false);
  };
  return (
    <form
      onSubmit={handleFormData}
      className="items-center rounded justify-center flex flex-col gap-4 p-4"
    >
      {fields.map((field) => (
        <InputField
          type={field.type}
          title={field.label}
          name={field.name}
          formData={formData}
          onUserChange={onUserChange}
        />
      ))}
      <button className="px-2 py-2 bg-slate-900 text-white rounded">
        Add Task
      </button>
    </form>
  );
};

export default Form;
