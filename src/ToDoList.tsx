import { useForm } from "react-hook-form";

interface IFormData {
  email: string;
  username: string;
  password: string;
  password2: string;
  address: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IFormData) => {
    if (data.password !== data.password2) {
      setError(
        "password2",
        { message: "패스워드가 일치하지 않습니다" },

        // 오류시 focus
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "서버가 열리지 않습니다" });
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
          placeholder="이메일"
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
            validate: {
              noUsername: (value) => value.includes("김범준") ? "김범준이라는 이름은 가입불가" : true,
            }
          })}
          placeholder="이름"
        />
        <span>{errors?.username?.message}</span>

        {/* 비밀번호 */}
        <input
          {...register("password", {
            required: "비밀번호가 입력되지 않았어요",
            maxLength: {
              value: 6,
              message: "6자 이내로 해주세요",
            },
          })}
          placeholder="비밀번호"
        />
        <span>{errors?.password?.message}</span>

        {/* 비밀번호 확인 */}
        <input
          {...register("password2", {
            required: "비밀번호 확인이 입력되지 않았어요",
            maxLength: {
              value: 6,
              message: "6자 이내로 해주세요",
            },
          })}
          placeholder="비밀번호 확인"
        />
        <span>{errors?.password2?.message}</span>

        <button>add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
