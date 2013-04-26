def surface_updated?
  old_surface_version = capture("cd #{previous_release} && grep -A 3 centro/surface.git Gemfile.lock | grep revision | cut -f 2 -d ':'")
  new_surface_version = capture("cd #{latest_release} && grep -A 3 centro/surface.git Gemfile.lock | grep revision | cut -f 2 -d ':'")
  old_surface_version != new_surface_version
rescue
  true
end

