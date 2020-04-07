# == Schema Information
#
# Table name: identities
#
#  id         :bigint           not null, primary key
#  provider   :string
#  uid        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_identities_on_user_id  (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
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
