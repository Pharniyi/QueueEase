import React from "react"
import { useNavigate } from "react-router-dom"

const Signin = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/UserDashboard")

  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <svg
              className="text-blue-600 h-8 w-8"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                fill="currentColor"
              ></path>
            </svg>
            <h1 className="text-xl font-bold text-gray-900">QueueEase</h1>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
              Access your account
            </h2>
            <p className="mt-2 text-center text-sm text-slate-600">
              Or{" "}
              <a
                className="font-medium text-blue-400 hover:text-blue-600"
                href="/signup"
              >
                create an account
              </a>{" "}
              to start managing your queues.
            </p>
          </div>

          <div className="bg-white p-8 shadow-xl rounded-xl border border-slate-200">
            {/* ✅ Handle form submit */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-sm font-medium text-slate-900"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  autoComplete="email"
                  placeholder="Enter your Email"
                  className="form-input w-full border-2 border-slate-300 rounded-md py-2 px-3"
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-slate-900"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="form-input w-full border-2 border-slate-300 rounded-md py-2 pr-10 px-3"
                    id="password"
                    name="password"
                    required
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Signin
