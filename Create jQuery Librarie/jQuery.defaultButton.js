(function($) {
  $.fn.extend({
    defaultButton: function(options) {
      let defaults = {
        defaultClass: 'defaultButton'
      };

      options = $.extend(defaults, options);

      let $el = $(this);
      $el.each(function(index, el) {
        let chosenClass = options.defaultClass ?
        options.defaultClass : defaults.defaultClass;
        $el.addClass(chosenClass);
      });

    }
  });

})(jQuery);
