import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

// custom hook:
export const useRegister = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const registerUser = async (data: RegisterData) => {
    setLoading(true);
    setError(null);

    // Prepare payload according to backend requirements
    const payload = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      await new Promise((res) => setTimeout(res, 2000));

      const response = await axiosInstance.post("/auth/register", payload);
      if (response.status === 201) {
        toast.success("Registered successfully!");
        navigate("/login");
      }
    } catch (error: any) {
      console.log("Registration error", error);
      const errMessage = error.response?.data?.message || error.message || "Registration failed. Please try again."
      setError(errMessage);
      toast.error(errMessage);
    } finally {
      setLoading(false);
    }
  }

  return { registerUser, loading, error };
}