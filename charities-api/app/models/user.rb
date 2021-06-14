class User < ApplicationRecord
    has_many :charities
    has_many :comments
end
