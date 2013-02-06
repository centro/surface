# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'surface/version'

Gem::Specification.new do |gem|
  gem.name          = "surface"
  gem.version       = Surface::VERSION
  gem.authors       = ["Billy Whited"]
  gem.summary       = %q{A centralized repository for (S)CSS used on the Centro Insight and Auth projects.}
  gem.homepage      = "https://github.com/centro/surface"

  gem.files         = `git ls-files`.split($/)
  gem.require_paths = ["lib"]
  
  gem.add_dependency(%q<compass-rails>)
  gem.add_dependency(%q<susy>)
  gem.add_dependency(%q<modular-scale>)
end
