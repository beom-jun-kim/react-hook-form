import { useForm } from "react-hook-form";

interface IFormData {
  toDo: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IFormData>();
  const onValid = (data: IFormData) => {
    console.log("data",data);
    setValue("toDo","");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", {
            required: true,
          })}
          placeholder="할 일을 적으시오"
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
