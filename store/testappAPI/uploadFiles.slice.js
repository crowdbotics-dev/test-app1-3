import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_drive_service_upload_file_create = createAsyncThunk(
  "uploadFiles/modules_drive_service_upload_file_create",
  async payload => {
    const response = await apiService.modules_drive_service_upload_file_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const uploadFilesSlice = createSlice({
  name: "uploadFiles",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_drive_service_upload_file_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_drive_service_upload_file_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_drive_service_upload_file_create.rejected,
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
  modules_drive_service_upload_file_create,
  slice: uploadFilesSlice
}
