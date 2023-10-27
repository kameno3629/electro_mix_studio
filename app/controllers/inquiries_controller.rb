# app/controllers/inquiries_controller.rb

class InquiriesController < ApplicationController
    def new
      # @inquiry = Inquiry.new
    end
  
    #def create
      #@inquiry = Inquiry.new(inquiry_params)
      #if @inquiry.valid?
        # ここに問い合わせ内容の確認ページにリダイレクトするか、
        # もしくは問い合わせ内容をメールなどで送信する処理を追加。
       #redirect_to inquiry_confirm_path(@inquiry)
      #else
        #render :new
      #end
    #end

    #def confirm
       # @inquiry = Inquiry.new(inquiry_params)
        #unless @inquiry.valid?
          #render :new
        #end
    #end
      
    #def complete
        #@inquiry = Inquiry.new(inquiry_params)
        #if @inquiry.save
          # 問い合わせ内容をメールなどで送信する処理を追加。
          #redirect_to inquiries_thanks_path
        #else
          #render :new
        #end
    #end

    def thanks
        # 必要な処理をこちらに書きます（もし何も処理が必要なければ、空のメソッドとしてもOKです）
    end
  
    #private
  
    #def inquiry_params
      #params.require(:inquiry).permit(:name, :email, :message)
    #end
  end
  