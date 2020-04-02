FactoryBot.define do
  factory :photo do
    availability_report { nil }
    image_data { "" }
  end

  sequence :email do |n|
    "test#{n}@foo.com"
  end
  factory :user do
    name { "svs" }
    email { generate(:email) }
    password { "abcdefgh" }
    password_confirmation { "abcdefgh" }
  end
end
