class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :banner_url
      t.string :thumbnail_url
      t.string :city
      t.string :country
      t.string :bio
      t.string :first_name
      t.string :last_name
      t.timestamps
    end
  end
end
