# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  photo_url       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  zipcode         :string           not null
#  birthday        :date
#  month           :string
#  day             :string
#  year            :string
#
class User < ApplicationRecord

  validates :first_name, presence: true 
  validates :last_name, presence: true
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP} 
  # validates :zipcode, zipcode: { country_code: :us }
  # validates :month, 
  #   inclusion: {in: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}, 
  #   allow_nil: true
  # validate :validate_day
  # validate :validate_year
  validates :password, length: { minimum: 6 }, allow_nil: true 
  validates :session_token, presence: true, uniqueness: true 
  before_validation :ensure_session_token
  
  has_secure_password

  has_many :reviews, 
    primary_key: :id, 
    foreign_key: :reviewer_id,
    class_name: :Review,
    dependent: :destroy 


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    if user&.authenticate(password)
      return user 
    else 
      return nil 
    end 
  end

  def reset_session_token! 
    self.session_token = generate_unique_session_token
    self.save! 
    self.session_token
  end 

  # def validate_day
  #   day_integer = day.to_i 

  #   if month && !(1..31).include?(day_integer)
  #     raise 'Select a day'
  #   elsif month === "Feb" && day_integer > 29
  #     raise 'Invalid date'
  #   end 
  # end

  # def validate_year 
  #   year_integer = year.to_i 

  #   if (month && day) && !(1901..2023).include?(year_integer)
  #     raise 'Select a year'
  #   end 
  # end
  
  private 
  
  def generate_unique_session_token 
    
    while true 
      token = SecureRandom.urlsafe_base64
      return token unless User.exists?(session_token: token)
    end 
    
  end
  
  def ensure_session_token 
    self.session_token ||= generate_unique_session_token
  end

end
