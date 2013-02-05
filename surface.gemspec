# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'surface/version'

Gem::Specification.new do |gem|
  gem.name          = "surface"
  gem.version       = Surface::VERSION
  gem.authors       = ["rocketspops"]
  gem.email         = ["rocketspops@gmail.com"]
  gem.description   = %q{A centralized repository for (S)CSS used on the Centro Insight and Auth projects.}
  gem.summary       = %q{Write a gem summary}
  gem.homepage      = "https://github.com/centro/surface"

  gem.files         = `git ls-files`.split($/)
  gem.require_paths = ["lib"]
  
  gem.add_dependency(%q<compass-rails>, ["~> 1.0.3"])
  gem.add_dependency(%q<compass-normalize-plugin>, ["~> 0.4.0"])
  gem.add_dependency(%q<susy>, ["~> 1.0.4"])
  gem.add_dependency(%q<modular-scale>, ["~> 1.0.2"])
end
