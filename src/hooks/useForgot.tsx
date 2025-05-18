import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

export const useForgot = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<String | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const forgotUser = async (email: string) => {
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            await new Promise((res => setTimeout(res, 2000)));

            const res = await axiosInstance.post('/users/forgot-password', { email });
            setMessage(res.data.message);
        } catch (err: any) {
            setError(err?.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    }

    return { loading, error, forgotUser, message };
}
