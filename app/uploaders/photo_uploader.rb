class PhotoUploader < Shrine
  plugin :instrumentation
  plugin :determine_mime_type, analyzer: :marcel,
                                                analyzer_options: { filename_fallback: true }
  plugin :validation_helpers

  Attacher.validate do
    validate_mime_type %w[image/jpeg image/png image/webp image/tiff]
    validate_extension %w[jpg jpeg png webp tiff tif]
    validate_size 1..10*1024*1024
  end
end