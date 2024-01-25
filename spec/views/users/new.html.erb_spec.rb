require 'rails_helper'

RSpec.describe "users/new", type: :view do
  before do
    assign(:user, User.new)
    render
  end

  it "displays the new user registration form" do
    expect(rendered).to have_selector('form#new_user')
    expect(rendered).to have_field('user[username]') # 'user_name'から'user[username]'に修正
    expect(rendered).to have_field('user[email]')
    expect(rendered).to have_field('user[password]')
  end
end


