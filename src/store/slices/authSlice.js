import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    userID: null,
    userEmail: null,
    userName: null,
    error: "",
};

export const signUp = createAsyncThunk(
    "auth/signUp",
    async ({ name, email, password }) => {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: name,
        });
        const data = {
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
        };
        return data;
    }
);

export const signIn = createAsyncThunk(
    "auth/signIn",
    async ({ email, password }) => {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const data = {
            displayName: response.user.displayName,
            email: response.user.email,
            uid: response.user.uid,
        };
        return data;
    }
);

export const signInGoogle = createAsyncThunk("auth/signInGoogle", async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider);
    const data = {
        displayName: response.user.displayName,
        email: response.user.email,
        uid: response.user.uid,
    };
    return data;
});

export const LogOut = createAsyncThunk("auth/LogOut", async () => {
    await signOut(auth);
});

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async (email) => {
        console.log(email);
        const response = await sendPasswordResetEmail(auth, email);
        const data = await response;
        return data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        // Sign Up
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(signUp.fulfilled, (state) => {
            state.isLoading = false;
            toast.success("Registered Successfully!", {
                position: "bottom-right",
                autoClose: 3000,
            });
        });
        builder.addCase(signUp.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            toast.error(state.error, {
                position: "bottom-right",
                autoClose: 3000,
            });
            throw state.error;
        });

        // Sign In With Email And Password
        builder.addCase(signIn.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.userEmail = action.payload.email;
            state.userID = action.payload.uid;
            state.userName = action.payload.displayName;
            toast.success("Logged in Successfully!", {
                position: "bottom-right",
                autoClose: 3000,
            });
        });
        builder.addCase(signIn.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            toast.error(state.error, {
                position: "bottom-right",
                autoClose: 3000,
            });
            throw state.error;
        });

        // Sign In With Google
        builder.addCase(signInGoogle.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(signInGoogle.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.userEmail = action.payload.email;
            state.userID = action.payload.uid;
            state.userName = action.payload.displayName;
            toast.success("Logged in Successfully!", {
                position: "bottom-right",
                autoClose: 3000,
            });
        });
        builder.addCase(signInGoogle.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            toast.error(state.error, {
                position: "bottom-right",
                autoClose: 3000,
            });
            throw state.error;
        });

        // Sign Out
        builder.addCase(LogOut.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(LogOut.fulfilled, (state) => {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.userEmail = null;
            state.userID = null;
            state.userName = null;
            toast.success("Logged out Successfully!", {
                position: "bottom-right",
                autoClose: 3000,
            });
        });
        builder.addCase(LogOut.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            toast.error(state.error, {
                position: "bottom-right",
                autoClose: 3000,
            });
            throw state.error;
        });

        builder.addCase(resetPassword.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            toast.info("Reset Password Email Was Sent!", {
                position: "bottom-right",
                autoClose: 3000,
            });
        });
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            toast.error(state.error, {
                position: "bottom-right",
                autoClose: 3000,
            });
        });
    },
});

export default authSlice.reducer;
