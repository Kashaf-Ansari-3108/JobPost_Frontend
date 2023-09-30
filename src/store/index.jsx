import { configureStore } from "@reduxjs/toolkit";
import { otpSlice } from "./otpSlice";
import { signupSlice } from "./signupSlice";
import { loginSlice } from "./loginSlice";
import { getjobsSlice } from "./getJobsSlice";
import { CreateJobSlice } from "./CreateJobSlice";
import { getUserJobSlice } from "./getUserJobSlice";
import { deleteJobSlice } from "./deleteJobSlice";
import { editJobSlice } from "./editJobSlice";
import { getUserSlice } from "./getUserSlice";

const store = configureStore({
    reducer:{
        otpSlice:otpSlice,
        signupSlice:signupSlice,
        loginSlice:loginSlice,
        getjobsSlice:getjobsSlice,
        CreateJobSlice:CreateJobSlice,
        getUserJobSlice:getUserJobSlice,
        deleteJobSlice:deleteJobSlice,
        editJobSlice:editJobSlice,
        getUserSlice:getUserSlice,
    }
})

export default store;