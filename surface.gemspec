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
end
