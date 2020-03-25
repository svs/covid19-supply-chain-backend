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
