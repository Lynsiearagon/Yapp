json.user do 
    json.extract! @user, :id, :email, :first_name, :last_name, :photo_url, :created_at, :updated_at
end