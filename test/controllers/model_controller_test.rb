require 'test_helper'

class ModelControllerTest < ActionDispatch::IntegrationTest
  test "should get User" do
    get model_User_url
    assert_response :success
  end

  test "should get username:string" do
    get model_username:string_url
    assert_response :success
  end

  test "should get password_digest:string" do
    get model_password_digest:string_url
    assert_response :success
  end

  test "should get session_token:string" do
    get model_session_token:string_url
    assert_response :success
  end

end
