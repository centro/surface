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
Guide is (or should be) always up to date. Information about the 
program used to generate the guide can be found here: [Kalei Style Guide](http://kaleistyleguide.com/).

#### How to view the Living Style Guide

Navigate to the `styleguide` directory: 

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

####  Contributing to the Living Style Guide

If you don’t already have it installed, you’ll need to install Compass:

    $ gem install compass

Once Compass is installed, navigate to the `assets` directory: 

    $ cd app/assets

Then, execute:

    $ compass watch

If you were successful, you should see the following message in your 
terminal prompt:

    >>> Compass is watching for changes. Press Ctrl-C to Stop.

The program we use to generate the Living Style Guide relies on the 
CSS stylesheet that Compass automatically compiles when it runs. By running `compass 
watch` we can ensure that Compass will compile every time we make a 
change to our SCSS files. For example, if you were to navigate to the 
`stylesheets` directory: 

    $ cd app/assets/stylesheets

And then make a change to `_module.scss`, you should see the following 
message appear in your terminal prompt: 

    overwrite styleguide/css/surface.css 
    >>> Change detected at 11:28:17 to: _module.scss

Compass compiles the changes you make in each of the individual SCSS partials into 
a large CSS file named `surface.css` that lives in `app/assets/styleguide/css`.
The style guide generator then uses this file to build the Living Style 
Guide. 

So, to actually contribute to the Living Style Guide you’ll need to add 
your styles to the appropriate SCSS partial inside the 
`app/assets/stylesheets` directory, along with a Markdown structured CSS 
comment. For example, this bit of markup inside `_module.scss`:

    /*
    ## Buttons
    Interact with buttons to view their various states (:hover, :focus, :active):
    ```
    <a class="m-button l-mg-right(1/4)">Default</a>
    <a class="m-button m-button--primary l-mg-right(1/4)">Default + Primary</a>
    <a class="m-button" disabled="disabled">Disabled</a>
    */
    
    .m-button {
      background: $grayscale-0; // Fallback for older browsers.
      @include background-image(linear-gradient(hsl(0, 0, 97%), $grayscale-0));
      @include border-radius(3px);
      border: 1px solid $grayscale-1;
      color: $grayscale-5 !important;
      cursor: pointer;
      display: inline-block;
      font-size: modular-scale(-1);
      height: $base-line-height + 6;
      line-height: $base-line-height + 4;
      padding: 0 8px;
      text-decoration: none;
    }
    
    .m-button:hover {
      @include background-image(linear-gradient(white, $grayscale-0));
      color: $grayscale-4;
    }
    
    .m-button:focus {
      @include box-shadow(0 0 4px white inset);
      outline: none;
    }
    
    .m-button:active {
      @include background-image(none);
      background-color: $grayscale-0;
    }

Will appear like this when you view the Living Style Guide in your 
browser:

![Example of CSS buttons rendered by the Kalei Style Guide engine](/readme-images/kalei-example.png)

You should feel free to contribute to Surface, but please understand the 
we are trying to maintain a high degree of consistency in the way we 
write our CSS. If you’re unsure of if you have questions, please talk to 
Billy Whited ([billy.whited@centro.net](mailto:billy.whited@centro.net)


## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
