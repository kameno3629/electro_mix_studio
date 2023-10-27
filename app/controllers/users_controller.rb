# app/controllers/users_controller.rb

class UsersController < ApplicationController
    def new
      # @user = User.new
      # 新しいユーザーの登録のビューを表示
    end
    
    # def create
      # @user = User.new(user_params)
      # if @user.save
        # 登録成功時の処理
        # log_in @user
        # redirect_to main_path
      # else
        # flash.now[:danger] = '登録に失敗しました'
        # render 'new'
      # end
    # end

    # def edit
    # end
  
    # def update
      # if @user.update(user_params)
        # redirect_to user_path(@user), notice: 'プロフィールが更新されました。'
      # else
      #   render :edit
      # end
    # end
  
    # private
  
    # def set_user
      # @user = User.find(params[:id])
    # end
  
    # def user_params
     #  params.require(:user).permit(:name, :email, :password, :password_confirmation)
    # end
end
 
  