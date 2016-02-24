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
    yo = request.params['content'].to_json
    body = JSON.parse(yo, :quirks_mode => true)
    message = Message.create(content: body)
    redirect to ('/')
  end

  get '/json/delete' do
    yo = request.params['content']
    body = JSON.parse(yo, :quirks_mode => true)
    message = Message.create(content: body)
    redirect to ('/')

  end

  post '/json/update' do
    p request
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
