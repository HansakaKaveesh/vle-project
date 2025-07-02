"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { 
  FaUser, 
  FaAt, 
  FaGlobeAmericas, 
  FaEnvelope, 
  FaLock, 
  FaUserGraduate, 
  FaChalkboardTeacher,
  FaSpinner
} from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    country: "",
    email: "",
    password: "",
    role: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    if (password.match(/[^A-Za-z0-9]/)) strength += 25;
    return Math.min(strength, 100);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === "password") {
      setPasswordStrength(calculatePasswordStrength(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.post(
        "http://localhost/vle-api/register.php",
        formData
      );
      
      if (response.data.success) {
        window.location.href = "/login";
      } else {
        setError(response.data.message || "Registration failed");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-300">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl mt-24 mb-10 ">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-blue-100">Join our learning community today</p>
        </div>

        <div className="p-6 space-y-5">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                <input
                  name="full_name"
                  placeholder="John Doe"
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <FaAt className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                <input
                  name="username"
                  placeholder="johndoe123"
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <div className="relative">
                <FaGlobeAmericas className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                <select
                  name="country"
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-no-repeat bg-[right_1rem_center] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiA0Mjg1OTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')]"
                >
                  <option value="">Select Country</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                  <option value="China">China</option>
                  <option value="Brazil">Brazil</option>
                  <option value="South Africa">South Africa</option>
                </select>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${
                    passwordStrength >= 75 ? 'bg-green-500' :
                    passwordStrength >= 50 ? 'bg-yellow-500' :
                    passwordStrength >= 25 ? 'bg-orange-500' : 'bg-red-500'
                  }`} 
                  style={{ width: `${passwordStrength}%` }}
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Registering As
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center justify-center p-3 border rounded-lg cursor-pointer has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-2 has-[:checked]:ring-blue-200 transition-all">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    onChange={handleChange}
                    className="hidden"
                    required
                  />
                  <div className="text-center">
                    <FaUserGraduate className="h-6 w-6 mx-auto text-blue-600 mb-1" />
                    <span className="text-sm font-medium">Student</span>
                  </div>
                </label>
                <label className="flex items-center justify-center p-3 border rounded-lg cursor-pointer has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-2 has-[:checked]:ring-blue-200 transition-all">
                  <input
                    type="radio"
                    name="role"
                    value="teacher"
                    onChange={handleChange}
                    className="hidden"
                  />
                  <div className="text-center">
                    <FaChalkboardTeacher className="h-6 w-6 mx-auto text-blue-600 mb-1" />
                    <span className="text-sm font-medium">Teacher</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y- 1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {loading ? <FaSpinner className="animate-spin" /> : "Register"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}