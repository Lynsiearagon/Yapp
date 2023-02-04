class User < ApplicationRecord

  validates :first_name, 
    presence: true,
    format: { without: URI::MailTo::EMAIL_REGEXP, message: "Sorry, you entered an invalid first name"}
  validates :last_name, 
    presence: true,
    format: { without: URI::MailTo::EMAIL_REGEXP, message: "Sorry, you entered an invalid last name"} 
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP} 
  validates :password, length: { minimum: 6 }, allow_nil: true 
  validates :session_token, presence: true, uniqueness: true 
  has_secure_password

  before_validation :ensure_session_token

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
