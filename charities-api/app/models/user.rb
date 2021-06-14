class User < ApplicationRecord
    has_many :charities
    has_many :comments

    validates :username, :name, presence: true
    validates :username, uniqueness: true 
end
