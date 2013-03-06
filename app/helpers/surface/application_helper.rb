module Surface
  module ApplicationHelper
    ## Field Decorator helper
    ## This helper will wrap it's input block in a div.  That div will have it's class
    ## set to to options[:class] or options[:class_error] depending on whether or not
    ## instance.field has any validation errors.
    def field_decorator(instance, field, options = {}, &block)
      class_with_errors = options.delete(:class_error)
      class_without_errors = options.delete(:class)
      options[:class] = instance.object.errors[field].empty? ? class_without_errors : class_with_errors
      concat render(:partial => "shared/field_decorator", :locals => {:block => block, :options => options, :error_messages => instance.object.errors[field]})
    end
  end
end
