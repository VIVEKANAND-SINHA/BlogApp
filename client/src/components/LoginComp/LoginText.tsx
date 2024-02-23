export default function LoginText() {
  return (
    <>
      <div className="flex justify-center items-center text-container border  py-5  md:h-dvh">
        <div className="w-4/5">
          <div className="text-3xl font-bold text-center">Welcome Back!</div>

          <div>
            <div className="m-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="test@gmail.com"
                required
              />
            </div>
            <div className="m-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-center mt-5">
              <button className="bg-blue-500 text-white p-2  px-5  w-4/5 rounded-lg">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
