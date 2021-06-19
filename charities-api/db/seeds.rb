# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create!(name: 'Domestic Needs')
Category.create(name: 'International Needs')
Category.create(name: 'Animal Protection')
Category.create(name: 'Medical')
Category.create(name: 'Youth')
Category.create(name: 'Health')
Category.create(name: 'Environment')

Charity.create!(user_id: 1, image: 'https://www.unitedway.org/assets/img/new-logo.svg', category_id: 1, name: 'United Way Worldwide')
Charity.create(user_id: 2, image: 'https://www.qlik.com/blog/assets/uploads/images/direct-relief.jpg', category_id: 2, name: 'Direct Relief')
Charity.create(user_id: 3, image: 'https://www.salvationarmyusa.org/templates/usa_nhq_symphony/static_resources/images/global/shield.svg', category_id: 1, name: 'Salvation Army')
Charity.create(user_id: 1, image: 'https://www.batcon.org/wp-content/uploads/2020/07/19_BCI_LOGO_ALTERNATE_CIRCULAR_WEBSITE_RGB_FULL_COLOR.svg', category_id: 3, name: 'Bat Conservation International')
Charity.create(user_id: 2, image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fgojohnnies.com%2Fimages%2F2018%2F4%2F12%2FJude.jpg%3Fwidth%3D1416%26height%3D797%26mode%3Dcrop%26quality%3D80%26format%3Djpg&imgrefurl=https%3A%2F%2Fgojohnnies.com%2Fnews%2F2018%2F4%2F12%2Fgeneral-sju-student-athletes-raise-nearly-40-000-for-st-jude-childrens-research-hospital.aspx&tbnid=1u60nbxq30MAWM&vet=12ahUKEwiktOOMntbwAhUGGVMKHbt7CtUQMygBegUIARCvAQ..i&docid=CmpwRDFK-uewgM&w=851&h=556&q=St.%20Jude%20Childrens%20Research%20Hospital&ved=2ahUKEwiktOOMntbwAhUGGVMKHbt7CtUQMygBegUIARCvAQ', category_id: 4, name: 'St. Jude Childrens Research Hospital')
Charity.create(user_id: 3, image: 'https://s3.amazonaws.com/ymca-ynet-prod/files/seo/ymca-logo-orange.png', category_id: '5', name: 'YMCA of the USA')
Charity.create(user_id: 1, image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fc532f75abb9c1c021b8c-e46e473f8aadb72cf2a8ea564b4e6a76.ssl.cf5.rackcdn.com%2F2020%2F04%2F18%2F41l4itg1sx_WCS_identity_logo.jpg&imgrefurl=https%3A%2F%2Fwww.wcs.org%2Fstrategy&tbnid=K_-IyH6F1p0KLM&vet=12ahUKEwjZ-uGMn9bwAhUN0VMKHRW2Ce8QMygBegUIARCuAQ..i&docid=M0l7KQqRs7XwRM&w=1200&h=800&q=wildlife%20conservation%20society&hl=en&ved=2ahUKEwjZ-uGMn9bwAhUN0VMKHRW2Ce8QMygBegUIARCuAQ', category_id: 3, name: 'Wildlife Conservation Society')
Charity.create(user_id: 2, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/CompassionInternationalLogo.png/220px-CompassionInternationalLogo.png', category_id: 2, name: 'Compassion International')
Charity.create(user_id: 3, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Boys_%26_Girls_Clubs_of_America_%28logo%29.svg/200px-Boys_%26_Girls_Clubs_of_America_%28logo%29.svg.png', category_id: 5, name: 'Boys & Girls Clubs of America')
Charity.create(user_id: 1, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/American_Cancer_Society_Logo.svg/250px-American_Cancer_Society_Logo.svg.png', category_id: 6, name: 'American Cancer Society')
Charity.create(user_id: 2, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/16/PetSmart_Charities_US.jpg/220px-PetSmart_Charities_US.jpg', category_id: 3, name: 'PetSmart Charities')
Charity.create(user_id: 3, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Nature_Conservancy.svg/250px-Nature_Conservancy.svg.png', category_id: 7, name: 'Nature Conservancy')
Charity.create(user_id: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Mount_Sinai_Health_System_logo.svg/150px-Mount_Sinai_Health_System_logo.svg.png', category_id: 6, name: 'Mount Sinai Health Systems')
Charity.create(user_id: 1, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Planned_Parenthood_logo.svg/220px-Planned_Parenthood_logo.svg.png', category_id: 1, name: 'Planned Parenthood Federation of America')

Comment.create!(user_id: 1, charity_id: 1, description: 'Very proud of what this charity has done.')
Comment.create(user_id: 2, charity_id: 2, description: 'Donated to this charity last Christmas. Happy to help!')
Comment.create(user_id: 3, charity_id: 3, description: 'I send a donation in my daughters name every year.')
Comment.create(user_id: 1, charity_id: 4, description: 'Had the opportunity to volunteer with this charity a month ago. It was a pleasure working with them!')
Comment.create(user_id: 2, charity_id: 5, description: 'Currently next on my list to donate to.')
Comment.create(user_id: 3, charity_id: 6, description: 'Saw them on the news. I love what theyre doing.')
Comment.create(user_id: 1, charity_id: 7, description: 'What a wonderful organization.')
Comment.create(user_id: 2, charity_id: 8, description: 'Cant wait to donate on my next birthday!')
Comment.create(user_id: 3, charity_id: 9, description: 'I will be helping them with a fundraiser in August. What a great place!')
Comment.create(user_id: 1, charity_id: 10, description: 'Excited to see how much we can raise this year.')
Comment.create(user_id: 2, charity_id: 11, description: 'My favorite charity of all.')
Comment.create(user_id: 3, charity_id: 12, description: 'I saw a great documentary about this charity.')
Comment.create(user_id: 1, charity_id: 13, description: 'Looking forward to donating.')
Comment.create(user_id: 1, charity_id: 13, description: 'Great help to the community.')

User.create!(username: 'AAA', password_digest: '123456', name: 'Andy')
User.create(username: 'BBB', password_digest: '1234567', name: 'Bex')
User.create(username: 'CCC', password_digest: '12345678', name: 'Cade')

puts 'data loaded success'
