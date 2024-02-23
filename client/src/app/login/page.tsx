import LoginComp from "@/components/LoginComp";

async function login() {
  // var auth = await fetch("http:/localhost:3000/auth/login");
  // console.log(auth);
}

export default function Login() {
  login();
  return (
    <main>
      <LoginComp />
    </main>
  );
}
