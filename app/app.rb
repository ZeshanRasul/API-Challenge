require 'sinatra/base'
require_relative './models/message'
require_relative 'data_mapper_setup'
require 'dm-validations'
require 'rest-client'
require 'json'

class MessageBoard < Sinatra::Base
  use Rack::MethodOverride

  get '/' do
    erb :index
  end

  get '/json/read' do
    messages = Message.all
    json = JSON.generate(messages)
  end

  post '/json/create' do
    # message = Message.create
    new_message_content = request.body.read
    message = Message.create(content: new_message_content)
  end

  get '/json/delete' do
    # message from js, request body etc
    message = Message.(create)
  end

  post '/json/update' do
    p request
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
