class PhotoUploader < Shrine
  plugin :instrumentation
  plugin :determine_mime_type, analyzer: :marcel, analyzer_options: { filename_fallback: true }
end