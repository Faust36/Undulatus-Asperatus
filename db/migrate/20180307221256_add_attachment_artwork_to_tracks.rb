class AddAttachmentArtworkToTracks < ActiveRecord::Migration[5.1]
  def self.up
    change_table :tracks do |t|
      t.attachment :artwork
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :tracks, :artwork
    remove_attachment :tracks, :audio
  end
end
