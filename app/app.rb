
require 'sinatra/base'
require_relative './models/message'
require_relative 'data_mapper_setup'
require 'dm-validations'

class MessageBoard

  get '/' do

  end

  post '/' do
    Message.create ~~~~
  end
