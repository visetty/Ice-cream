var flavors = ['chocolate', 'vanilla', 'strawberry']





$(document).ready(function() {
  //$("#flavor").append(flavors);
    flavors.forEach(function(flavor){
      $("#flavor").append("<span>" + "I like " + flavor + ", " + "</span>");
  });
});
