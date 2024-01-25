require 'rails_helper'

RSpec.describe 'users/new.html.erb', type: :view do
  it 'displays the new user registration form' do
    render

    expect(rendered).to have_selector('form#new_user')
    expect(rendered).to have_field('user_name')
    expect(rendered).to have_field('user_email')
    # 他のフォームフィールドの検証
    expect(rendered).to have_button('Create User')
  end
end

