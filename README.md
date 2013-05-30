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

#### Using surface_updated?
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

## Living Style Guide

Surface includes a ‟Living Style Guide” that you can reference when 
implementing styles within your application. Inside the Living Style Guide you 
will find HTML examples of how to build the various components that 
Surface is responsible for styling. As new styles are authored or 
changed, these examples are automatically updated such that the Living Style 
Guide is (or should be, anyway) always up to date. Information about the 
program used to generate the guide can be found here: [Kalei Style Guide](http://kaleistyleguide.com/).

#### How to view the Living Style Guide

Viewing the guide is actually quite simple. Navigate to the `styleguide` 
directory: 

    $ cd app/assets/styleguide

Once you are inside the directory, execute:

    $ python -m SimpleHTTPServer

By default, the server will start on port 8000, but you can specify any 
port of your choosing. For example: 

    $ python -m SimpleHTTPServer 8080

If you were successful, you’ll see this message appear in your 
terminal prompt:  

    Serving HTTP on 0.0.0.0 port 8080 ...

Once you see this message, open a browser and type in the following 
address:

    http://localhost:8080

You should now be able view the Living Style Guide.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
