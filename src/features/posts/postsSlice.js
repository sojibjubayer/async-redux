import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPOSTs } from "./getAPI";

const initialState={
    posts:[],
    isLoading:false,
    isError:false,
    error:''
}

export const fetchData = createAsyncThunk('posts/fetchPosts',async()=>{
    const posts = await getPOSTs();
 
    return posts;
})


const postsSlice = createSlice({
    name:'posts',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.isLoading=true;
            state.isError=false;
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.posts=action.payload;
            state.isLoading=false;
            state.isError=false;
        })
        .addCase(fetchData.rejected,(state,action)=>{
            
            state.isLoading=false;
            state.isError=true;
            state.error=action.error?.message;
        })

    }

});
export default postsSlice.reducer;