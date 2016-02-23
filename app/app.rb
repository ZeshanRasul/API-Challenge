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
    content_type :json
    @message = Message.create(content: params[:content])
    @message.to_json
    p JSON.generate(request.body)
    redirect to '/'
  end

  get '/json/delete' do
    content_type :json
    @message = Message.destroy(content: params[:content])
    @message.to_json
    redirect to '/'
  end

  post 'json/update' do
    content_type :json
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
