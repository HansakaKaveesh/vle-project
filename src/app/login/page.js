"use client";
import { FaUser, FaLock, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://vle-project-172202922309.us-central1.run.app/php-backend/login.php", credentials);
            alert(response.data.message);
            if (response.data.success) {
                localStorage.setItem("user", JSON.stringify(response.data.user));
                window.location.href = "/dashboard";
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="w-full max-w-md bg-white shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-500 px-6 py-4">
            <h2 className="text-3xl font-bold text-center text-white">Welcome Back! 👋</h2>
            <p className="text-center text-indigo-100 mt-1">Please sign in to continue</p>
          </div>
      
          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaUser className="h-5 w-5" />
                  </span>
                  <input
                    name="username"
                    placeholder="Enter your username"
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
      
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <FaLock className="h-5 w-5" />
                  </span>
                  <input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
      
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="/forgot-password" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
      
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </form>
      
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
      
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center space-x-2 w-full py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FcGoogle className="h-5 w-5" />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center space-x-2 w-full py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FaGithub className="h-5 w-5" />
                <span>GitHub</span>
              </button>
            </div>
      
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="font-semibold text-blue-600 hover:underline">
                Create account
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}
