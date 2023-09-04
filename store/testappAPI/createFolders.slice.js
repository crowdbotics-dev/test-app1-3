import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_drive_service_create_folder_create = createAsyncThunk(
  "createFolders/modules_drive_service_create_folder_create",
  async payload => {
    const response = await apiService.modules_drive_service_create_folder_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const createFoldersSlice = createSlice({
  name: "createFolders",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_drive_service_create_folder_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_drive_service_create_folder_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_drive_service_create_folder_create.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
  }
})
export default {
  modules_drive_service_create_folder_create,
  slice: createFoldersSlice
}
