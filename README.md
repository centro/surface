# Surface

A centralized repository for (S)CSS used on the Centro Insight and Auth projects.

## Installation

Add this line to your application's Gemfile:

    gem 'surface'
    
**For Rails, be sure surface is NOT included in the assets section.  It needs to be along side the other "general" gems
because surface includes helper methods and other non-asset code.**

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install surface

## Usage

TODO: Write usage instructions here

## Asset Compilation When Deploying Your Application

When you update surface, you need to recompile your assets
when deploying your application. Typically, deployment scripts will check
for changes in `app/assets` and `vendor/assets` when determining if assets
should be recompiled.  **This will not catch changes to surface assets.**

The `surface_updated?` method in `lib/surface/capistrano.rb` helps
determine if you should recompile your assets when deploying your
appliation.

### Using surface_updated?
Require the helper file in your `deploy.rb` file.

    require 'surface/capistrano'

In your `assets:precomile` task, make sure to check if surface has been
updated when determining whether or not to recompile assets:

    namespace :assets do
      task :precompile, :roles => :web, :except => { :no_release => true } do
        from = source.next_revision(current_revision) rescue nil
        if ENV['FORCE_PRECOMPILE'] ||
            from.nil? ||
            capture("cd #{latest_release} && #{source.local.log(from)} vendor/assets/ app/assets/ | wc -l").to_i > 0 ||
            surface_updated?
          run %Q{cd #{latest_release} && #{rake} RAILS_ENV=#{rails_env} #{asset_env} tmp:cache:clear assets:precompile --trace}
        else
          logger.info "Skipping asset pre-compilation because there were no asset changes"
        end
      end
    end

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
