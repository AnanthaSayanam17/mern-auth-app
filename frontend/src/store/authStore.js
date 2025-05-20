import { create } from "zustand";

const API_URL = "http://localhost:3000/api/auth";

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password, name }),
      });
      const data = await response.json();
      set({ isLoading: false, user: data.user, isAuthenticated: true });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      console.log(error);
      throw error;
    }
  },

  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(`${API_URL}/verify-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      set({ isLoading: false, user: data.user, isAuthenticated: true });
    } catch (error) {
      set({ isLoading: false, error: error.message });
      console.log(error);
      throw error;
    }
  },
}));
