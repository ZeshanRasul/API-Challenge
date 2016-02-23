require 'sinatra/base'
require_relative './models/message'
require_relative 'data_mapper_setup'
require 'dm-validations'
require 'rest-client'

class MessageBoard < Sinatra::Base
  use Rack::MethodOverride

  get '/' do
    @messages = Message.all
    erb :index
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

end
