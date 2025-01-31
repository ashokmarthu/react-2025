import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
    } else {
      onAdd({
        title: enteredTitle,
        dueDate: enteredDueDate,
        description: enteredDescription,
      });
    }
  };
  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2>Invalid Input</h2>
        <p>Oops.. looks like you forigot to enter a value.</p>
        <p>
          Please make sure you enter valid value for every field you entered
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} labelName="Title" />
          <Input ref={dueDate} labelName="Due Date" type="date" />
          <Input ref={description} labelName="Description" isTextarea />
        </div>
      </div>
    </>
  );
};

export default NewProject;
