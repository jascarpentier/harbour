class User < ApplicationRecord
  has_many :reviews
  has_secure_password

  validates :username, presence: true
  validates :email, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
