require 'sinatra/base'
require_relative './models/message'
require_relative 'data_mapper_setup'
require 'dm-validations'

class MessageBoard < Sinatra::Base

  get '/' do
    @messages = Message.all
    erb :index
  end

  post '/' do
    @message = Message.create(content: params[:content])
    redirect to '/'
  end

end
