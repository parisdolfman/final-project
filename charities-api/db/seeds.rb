# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create(name: 'Domestic Needs')
Category.create(name: 'International Needs')
Category.create(name: 'Animal Protection')
Category.create(name: 'Medical')
Category.create(name: 'Youth')
Category.create(name: 'Animal Protection')
Category.create(name: 'Health')
Category.create(name: 'Environment')
Category.create(name: 'Domestic Needs')

Charity.create(user_id: , image: '', category_id: '')

puts 'data loaded success'
