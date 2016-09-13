require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:users)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post :create, user: { admin: @user.admin, billing_address: @user.billing_address, billing_city: @user.billing_city, billing_country: @user.billing_country, billing_postal_code: @user.billing_postal_code, billing_province: @user.billing_province, email: @user.email, first_name: @user.first_name, last_name: @user.last_name, password_digest: @user.password_digest, phone: @user.phone, shipping_address: @user.shipping_address, shipping_city: @user.shipping_city, shipping_country: @user.shipping_country, shipping_postal_code: @user.shipping_postal_code, shipping_province: @user.shipping_province, username: @user.username }
    end

    assert_redirected_to user_path(assigns(:user))
  end

  test "should show user" do
    get :show, id: @user
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @user
    assert_response :success
  end

  test "should update user" do
    patch :update, id: @user, user: { admin: @user.admin, billing_address: @user.billing_address, billing_city: @user.billing_city, billing_country: @user.billing_country, billing_postal_code: @user.billing_postal_code, billing_province: @user.billing_province, email: @user.email, first_name: @user.first_name, last_name: @user.last_name, password_digest: @user.password_digest, phone: @user.phone, shipping_address: @user.shipping_address, shipping_city: @user.shipping_city, shipping_country: @user.shipping_country, shipping_postal_code: @user.shipping_postal_code, shipping_province: @user.shipping_province, username: @user.username }
    assert_redirected_to user_path(assigns(:user))
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete :destroy, id: @user
    end

    assert_redirected_to users_path
  end
end
