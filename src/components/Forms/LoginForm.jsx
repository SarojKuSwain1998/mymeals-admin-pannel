import { Button } from "@mui/material";
import { useState } from "react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
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
      <form action="" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <div className="space-y-2 mt-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </div>
        <a
          href="/"
          alt="a to my meals Website"
          className="mt-2 mb-2 flex items-center justify-end text-sm font-medium text-brand-900"
        >
          Forgot Password?
        </a>
        <Button
          fullWidth
          variant="contained"
          type="submit"
          isLoading={isLoading}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
