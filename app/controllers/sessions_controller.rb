class SessionsController < ApplicationController
    def new
      # 新しいセッション（ログイン）のビューを表示
    end
    
    def create
      # ログイン処理
      user = User.find_by(email: params[:session][:email].downcase)
      if user && user.authenticate(params[:session][:password])
        # ユーザーをログインさせるなどの処理
        redirect_to main_path
      else
        flash.now[:danger] = 'メールアドレスまたはパスワードが正しくありません'
        render 'new'
      end
    end
  
    def destroy
      # ログアウト処理
      logout
      redirect_to root_url
    end
end

  
  
  
  
  