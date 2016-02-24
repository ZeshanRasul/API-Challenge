require 'sinatra/base'
require_relative './models/message'
require_relative 'data_mapper_setup'
require 'dm-validations'
require 'rest-client'
require 'json'

class MessageBoard < Sinatra::Base
  use Rack::MethodOverride

  get '/' do
    @messages = Message.all
    erb :index
  end

  post '/json/create' do
    yo = request.params['content']
    body = JSON.parse(yo, :quirks_mode => true)
    message = Message.create(content: body)
    redirect to ('/')
  end

  get '/json/delete' do
    @message = Message.find(params[:id])
    if @message.destroy(params[:id])
      {:task => @task, :status => "success"}.to_json
    else
      {:task => @task, :status => "failure"}.to_json
      redirect to '/'
    end
  end

  post '/json/update' do

    redirect to '/'
  end




  # post '/' do
  #   @message = Message.create(content: params[:content])
  #   redirect to '/'
  # end
  #
  # delete '/' do
  #   p params
  #   @message = Message.get(params[:id]).destroy
  #   redirect '/'

end
