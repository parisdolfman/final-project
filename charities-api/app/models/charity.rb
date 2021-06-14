class Charity < ApplicationRecord
    belongs_to :user
    belongs_to :category

    has_many :comments
    has_many :users, through: :comments

    validates :image, :name, presence: true 
end
