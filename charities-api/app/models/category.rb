class Category < ApplicationRecord
    has_many :charities

    validates :name, presence: true
end
