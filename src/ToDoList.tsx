import { useForm } from "react-hook-form";

interface IFormData {
  email: string;
  username: string;
  password: string;
  password2: string;
  address: string;
}

function ToDoList() {
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    }
  });
  const onValid = (data: any) => {
    console.log("data", data);
  };
  console.log("errors", errors);

  return (
    <div>

      {/* email */}
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "이메일은 필수입니다",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
              message: "네이버 이메일 주소만 가능합니다",
            },
          })}
        />
        <span>{errors?.email?.message}</span>


        {/* 이름 */}
        <input
          {...register("username", {
            required: "이름이 입력되지 않았어요",
            maxLength: {
              value: 6,
              message: "6자 이내로 해주세요",
            },
          })}
        />
        <span>{errors?.username?.message}</span>

        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
