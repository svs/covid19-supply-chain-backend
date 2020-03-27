# == Schema Information
#
# Table name: identities
#
#  id         :bigint           not null, primary key
#  uid        :string
#  provider   :string
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Identity < ApplicationRecord
  belongs_to :user


  def self.from_omniauth(auth)
    where(
      provider: auth.provider,
      uid: auth.uid
    ).first_or_initialize do |identity|
      identity.provider = auth.provider
      identity.uid = auth.uid
    end
  end
end
