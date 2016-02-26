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
    message = request.body.read
    parsed_message = JSON.parse(message)
    the_message = Message.get(parsed_message['message'][0].to_i)
    the_message.update(content: parsed_message['message'][1])
    redirect ('/')

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
