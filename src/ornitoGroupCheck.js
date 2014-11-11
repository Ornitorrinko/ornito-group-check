(function ($, undefined) {
  'use strict';

  $.fn.extend({
    ornitoGroupCheck: function (options) {
      var self = this;
      var defaults = {
        button: {
          css: "btn-default"
          , template: '<label class="btn ornito-btn {{custom-css}}" data-ornito-ref="{{ref}}" data-ornito-id="{{id}}">{{label}}</label>'
        }
        , input: {
          template: '<input type="hidden" name="{{name}}" class="ornito-hidden">'
        }
        , fn:{
          onButtonClicked: function(e){
            var curr = $(e.target);
            var ref = curr.data("ornito-ref");
            var pair = findPair(ref);
            var checked = false;

            if(pair.val()){
              pair.removeAttr("value");
              curr.removeClass("ornito-checked");
            }else{
              pair.val(curr.data("ornito-id"));
              curr.addClass("ornito-checked");
              checked = true;
            }

            if(settings.onClick){
              settings.onClick.apply(curr, [e, checked]);
            }
          }
        }
      };
      var settings = $.extend(defaults, options);

      var buttons = settings.buttons;

      if(!buttons || !Array.isArray(buttons)){
        throw "Buttons must be an Array! Could not initialize ornito-group-checkbox";
      }

      var groupButtons = buttons.map(function(button){
        var css = button.css;
        var label = button.label;
        var name = button.name;
        var id = button.id;
        var buttonHTML, inputHTML;
        buttonHTML = settings.button.template
          .replace("{{custom-css}}", css || settings.button.css)
          .replace("{{label}}", label)
          .replace("{{ref}}", name)
          .replace("{{id}}", id);
        inputHTML = settings.input.template.replace("{{name}}", name);
        return [buttonHTML, inputHTML].join(" ");
      });

      self
        .append(groupButtons)
        .find(".ornito-btn").each(function(){
          $(this).on("click", $.proxy(this), settings.fn.onButtonClicked);
        });

      var findPair = function(key){
        var pair = self.find('.ornito-hidden[name="'+ key + '"]');
        if(pair.length > 0){
          return $(pair[0]);
        }else{
          return {};
        }
      }
    }
  });
}(jQuery));