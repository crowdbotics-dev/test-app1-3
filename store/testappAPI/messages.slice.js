import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const modules_slack_service_archive_channel_create = createAsyncThunk("messages/modules_slack_service_archive_channel_create", async payload => {
  const response = await apiService.modules_slack_service_archive_channel_create(payload);
  return response.data;
});
export const modules_slack_service_channel_history_retrieve = createAsyncThunk("messages/modules_slack_service_channel_history_retrieve", async payload => {
  const response = await apiService.modules_slack_service_channel_history_retrieve(payload);
  return response.data;
});
export const modules_slack_service_get_channel_id_retrieve = createAsyncThunk("messages/modules_slack_service_get_channel_id_retrieve", async payload => {
  const response = await apiService.modules_slack_service_get_channel_id_retrieve(payload);
  return response.data;
});
export const modules_slack_service_get_users_retrieve = createAsyncThunk("messages/modules_slack_service_get_users_retrieve", async payload => {
  const response = await apiService.modules_slack_service_get_users_retrieve(payload);
  return response.data;
});
export const modules_slack_service_send_message_create = createAsyncThunk("messages/modules_slack_service_send_message_create", async payload => {
  const response = await apiService.modules_slack_service_send_message_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(modules_slack_service_archive_channel_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(modules_slack_service_archive_channel_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(modules_slack_service_archive_channel_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(modules_slack_service_channel_history_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(modules_slack_service_channel_history_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(modules_slack_service_channel_history_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(modules_slack_service_get_channel_id_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(modules_slack_service_get_channel_id_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(modules_slack_service_get_channel_id_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(modules_slack_service_get_users_retrieve.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(modules_slack_service_get_users_retrieve.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(modules_slack_service_get_users_retrieve.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(modules_slack_service_send_message_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(modules_slack_service_send_message_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(modules_slack_service_send_message_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  modules_slack_service_archive_channel_create,
  modules_slack_service_channel_history_retrieve,
  modules_slack_service_get_channel_id_retrieve,
  modules_slack_service_get_users_retrieve,
  modules_slack_service_send_message_create,
  slice: messagesSlice
};