import axios from "axios"
const testappAPI = axios.create({
  baseURL: "https://test-app1-3.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testappAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return testappAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return testappAPI.post(`/api/v1/signup/`, payload)
}
function modules_articles_article_list(payload) {
  return testappAPI.get(`/modules/articles/article/`)
}
function modules_articles_article_create(payload) {
  return testappAPI.post(`/modules/articles/article/`, payload)
}
function modules_articles_article_retrieve(payload) {
  return testappAPI.get(`/modules/articles/article/${payload.id}/`)
}
function modules_articles_article_update(payload) {
  return testappAPI.put(`/modules/articles/article/${payload.id}/`, payload)
}
function modules_articles_article_partial_update(payload) {
  return testappAPI.patch(`/modules/articles/article/${payload.id}/`, payload)
}
function modules_articles_article_destroy(payload) {
  return testappAPI.delete(`/modules/articles/article/${payload.id}/`)
}
function modules_drive_service_create_folder_create(payload) {
  return testappAPI.post(`/modules/drive/service/create/folder/`, payload)
}
function modules_drive_service_file_list_retrieve(payload) {
  return testappAPI.get(`/modules/drive/service/file/list/`)
}
function modules_drive_service_share_file_create(payload) {
  return testappAPI.post(`/modules/drive/service/share/file/`, payload)
}
function modules_drive_service_upload_file_create(payload) {
  return testappAPI.post(`/modules/drive/service/upload/file/`, payload)
}
function modules_slack_service_archive_channel_create(payload) {
  return testappAPI.post(
    `/modules/slack/service/${payload.id}/archive_channel/`,
    payload
  )
}
function modules_slack_service_channel_history_retrieve(payload) {
  return testappAPI.get(`/modules/slack/service/${payload.id}/channel_history/`)
}
function modules_slack_service_get_channel_id_retrieve(payload) {
  return testappAPI.get(`/modules/slack/service/${payload.id}/get-channel-id/`)
}
function modules_slack_service_create_channel_create(payload) {
  return testappAPI.post(`/modules/slack/service/create-channel/`, payload)
}
function modules_slack_service_get_users_retrieve(payload) {
  return testappAPI.get(`/modules/slack/service/get_users/`)
}
function modules_slack_service_invite_user_to_channel_create(payload) {
  return testappAPI.post(
    `/modules/slack/service/invite-user-to-channel/`,
    payload
  )
}
function modules_slack_service_send_message_create(payload) {
  return testappAPI.post(`/modules/slack/service/send-message/`, payload)
}
function modules_slack_service_upload_file_create(payload) {
  return testappAPI.post(`/modules/slack/service/upload-file/`, payload)
}
function rest_auth_login_create(payload) {
  return testappAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return testappAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testappAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testappAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testappAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testappAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return testappAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return testappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testappAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testappAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_articles_article_list,
  modules_articles_article_create,
  modules_articles_article_retrieve,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_destroy,
  modules_drive_service_create_folder_create,
  modules_drive_service_file_list_retrieve,
  modules_drive_service_share_file_create,
  modules_drive_service_upload_file_create,
  modules_slack_service_archive_channel_create,
  modules_slack_service_channel_history_retrieve,
  modules_slack_service_get_channel_id_retrieve,
  modules_slack_service_create_channel_create,
  modules_slack_service_get_users_retrieve,
  modules_slack_service_invite_user_to_channel_create,
  modules_slack_service_send_message_create,
  modules_slack_service_upload_file_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
