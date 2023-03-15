class User < ApplicationRecord

  validates :first_name, presence: true 
  validates :last_name, presence: true
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP} 
  # validates :zipcode, zipcode: { country_code: :us }
  # validates :birthday, date: { before_or_equal_to: Date.today, message: "Cannot select future date" }, allow_nil: true
  validates :password, length: { minimum: 6 }, allow_nil: true 
  validates :session_token, presence: true, uniqueness: true 
  before_validation :ensure_session_token
  
  has_secure_password

  has_many :yapps, 
    primary_key: :id, 
    foreign_key: :yapper_id,
    class_name: :Yapp

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

  # def name_checker

  #   if (:first_name.length < 0) || (:last_name.length < 0)
  #     render 'Invalid name cannot be blank'
  #   elsif 
  #     :first_name.include?('@') || :last_name.include?('@')
  #     render 'Invalid name format'
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
