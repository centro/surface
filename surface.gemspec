# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'surface/version'

Gem::Specification.new do |gem|
  gem.name          = "surface"
  gem.version       = Surface::VERSION
  gem.authors       = ["rocketspops"]
  gem.email         = ["rocketspops@gmail.com"]
  gem.description   = %q{TODO: Write a gem description}
  gem.summary       = %q{TODO: Write a gem summary}
  gem.homepage      = ""

  gem.files         = `git ls-files`.split($/)
  gem.require_paths = ["lib"]
end
