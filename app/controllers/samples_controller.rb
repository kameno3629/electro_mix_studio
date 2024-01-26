class SamplesController < ApplicationController
  def index
    @samples = Sample.all
  end

  def new
    @sample = Sample.new
  end

  def show
    @sample = Sample.find(params[:id])
  end

  def audio
    @sample = Sample.find(params[:id])
    # ここでサンプルの音声データを取得するロジックを実装
  end

  def create
    @sample = Sample.new(sample_params)
    if @sample.save
      redirect_to @sample
    else
      render :new
    end
  end

  def destroy
    @sample = Sample.find(params[:id])
    @sample.destroy
    redirect_to samples_path
  end

  private

  def sample_params
    params.require(:sample).permit(:name)
  end

end
