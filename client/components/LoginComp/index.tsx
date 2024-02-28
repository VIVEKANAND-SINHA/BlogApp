import LoginImage from "./LoginImage";
import LoginText from "./LoginText";

export default function Login() {
  return (
    <div className="p-4 flex justify-center flex-col items-center md:flex-row ">
      <div className="md:w-1/2  m-1">
        <LoginImage />
      </div>
      <div className="w-full md:w-1/2 m-1">
        <LoginText />
      </div>
    </div>
  );
}
