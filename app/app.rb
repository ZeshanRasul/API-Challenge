require 'sinatra/base'
require_relative './models/message'
require_relative 'data_mapper_setup'
require 'dm-validations'

class MessageBoard < Sinatra::Base

  get '/' do
    erb :index
  end

  post '/' do
    Message.create #~~~~
    redirect to '/'
  end

end
