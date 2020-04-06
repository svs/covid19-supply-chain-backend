require 'shrine'

Shrine.plugin :activerecord

if Rails.env.production?
  require 'shrine/storage/s3'

  s3_options = {
    access_key_id: ENV.fetch('AWS_ACCESS_KEY_ID'),
    secret_access_key: ENV.fetch('AWS_SECRET_ACCESS_KEY'),
    region: ENV.fetch('AWS_REGION'),
    bucket: ENV.fetch('AWS_S3_BUCKET')
  }

  Shrine.storages = {
    cache: Shrine::Storage::S3.new(prefix: "uploads/cache", **s3_options),
    store: Shrine::Storage::S3.new(prefix: "uploads/store", **s3_options)
  }
else
  require 'shrine/storage/file_system'

  Shrine.storages = {
    cache: Shrine::Storage::FileSystem.new("public", prefix: "uploads/cache"),
    store: Shrine::Storage::FileSystem.new("public", prefix: "uploads/store")
  }
end

