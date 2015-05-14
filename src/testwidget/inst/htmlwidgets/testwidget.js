HTMLWidgets.widget({

  name: 'testwidget',

  type: 'output',

  initialize: function(el, width, height) {
      //Create div and bind it to element
      var svg = d3.select(el)
          .append("svg")
          .attr("width", width)
          .attr("height", height);
      return svg;
  },

  renderValue: function(el, x, instance) {
      var svg = d3.select(el).select("svg");
      var vis = new SimpleVis(svg).draw();
      return vis;
  },

  resize: function(el, width, height, instance) {

  }

});
