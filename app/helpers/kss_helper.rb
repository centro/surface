module KssHelper

# For displaying a block documented with KSS.
#
# section - The name of the section to render.
#
# Returns nothing. Renders a string of HTML to the template.
def kss_block(section, &block)
  @section = @styleguide.section(section)
  modifiers = @section.modifiers

  @example_html = capture(&block)
  concat render(:partial => "styleguide_block", :locals => {
    :html => @example_html,
    :modifiers => modifiers})
end

end

