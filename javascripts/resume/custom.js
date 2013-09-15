$.fn.toggleText = function(t1, t2){
  if (this.text() == t1) this.text(t2);
  else                   this.text(t1);
  return this;
};

$(document).on('click', 'DIV.expandable', function(e) {
    var $expanderbar = $(e.target).closest('DIV.expandable');
    
    $expanderbar.parent().find('.defaulthidden').toggle('fast');
    $expanderbar.parent().find('FOOTER').addClass('expanded');
    $expanderbar.remove();

});
