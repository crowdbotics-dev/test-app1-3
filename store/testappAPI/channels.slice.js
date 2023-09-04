import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_slack_service_create_channel_create = createAsyncThunk(
  "channels/modules_slack_service_create_channel_create",
  async payload => {
    const response = await apiService.modules_slack_service_create_channel_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        modules_slack_service_create_channel_create.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_slack_service_create_channel_create.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities.push(action.payload)
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_slack_service_create_channel_create.rejected,
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
  modules_slack_service_create_channel_create,
  slice: channelsSlice
}
