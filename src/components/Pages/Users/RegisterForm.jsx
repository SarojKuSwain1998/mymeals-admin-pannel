import { Button } from "@mui/material";
import { useState } from "react";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="dark:text-black">
            Enter Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Enter your full name"
            className="w-full rounded-md dark:text-black border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={formData?.mobile}
            onChange={(e) => {
              setFormData({ ...formData, mobile: e.target.value });
            }}
          />
        </div>
        <div className="flex gap-4">
          <div className="space-y-2 w-full">
            <label htmlFor="email" className="dark:text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full rounded-md dark:text-black border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>
          <div className="space-y-2 w-full">
            <label htmlFor="mobile " className="dark:text-black">
              Mobile
            </label>
            <input
              type="number"
              name="mobile"
              id="mobile"
              autoComplete="mobile"
              placeholder="Enter your mobile"
              className="w-full rounded-md border dark:text-black  border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              value={formData?.mobile}
              onChange={(e) => {
                setFormData({ ...formData, mobile: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <div className="space-y-2 mt-2">
            <label htmlFor="password" className="dark:text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              className="w-full rounded-md border dark:text-black border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            />
          </div>
        </div>
        <a
          href="/login"
          alt="a to my meals Website"
          className="mt-2 mb-2 flex items-center justify-end text-sm font-medium text-brand-900"
        >
          Already have an account?
        </a>
        <Button
          fullWidth
          variant="contained"
          type="submit"
          isLoading={isLoading}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
