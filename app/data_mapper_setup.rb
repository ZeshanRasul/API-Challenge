require 'data_mapper'
require 'dm-postgres-adapter'

require_relative 'models/message'

DataMapper.setup(:default, "postgres://localhost/message_board_development")
DataMapper.finalize
DataMapper.auto_upgrade!
