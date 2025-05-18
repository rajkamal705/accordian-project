import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

interface LoginData {
    email: string;
    password: string;
}

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const loginUser = async (data: LoginData) => {
        setLoading(true);
        setError(null);

        try {
            await new Promise((res) => setTimeout(res, 2000)); // Optional delay for UX

            const response = await axiosInstance.post("/auth/login", data);

            if (response.status === 200) {
                toast.success("Login successful");
                navigate("/"); // Always navigate to home
            }
        } catch (error: any) {
            const errMsg = error.response?.data?.message || error.message || "Login failed, please try again";
            setError(errMsg);
            toast.error(errMsg);
        } finally {
            setLoading(false);
        }
    }

    return { loading, error, loginUser };
};
