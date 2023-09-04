import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_drive_service_file_list_retrieve = createAsyncThunk(
  "fileLists/modules_drive_service_file_list_retrieve",
  async payload => {
    const response = await apiService.modules_drive_service_file_list_retrieve(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fileListsSlice = createSlice({
  name: "fileLists",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_drive_service_file_list_retrieve.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_drive_service_file_list_retrieve.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = [
              ...state.entities.filter(
                record => record.id !== action.payload.id
              ),
              action.payload
            ]
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_drive_service_file_list_retrieve.rejected,
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
  modules_drive_service_file_list_retrieve,
  slice: fileListsSlice
}
