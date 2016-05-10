import { select } from 'd3-selection';

export default function text(id) {
  
  var classed = 'text-multi-line';

  /* E.g.
  function(d) {
    var i = d3.interpolateString(this.textContent, d);

    return function(t) {
        this.textContent = i(t);
    };
  };
  */
  var text = (d) => d.text ? d.text.join ? d.text.join('') : d.text : d;
  var tweenText = function (dt) {
    var d = text(dt);
    var a = this.textContent ? this.textContent.length : 0;
    var b = d.length;

    var i = d3.interpolateRound(a, b);

    return function(t) {
        this.textContent = d.substring(0, i(t));
    };  
  }; 
  function _impl(context) {
    var selection = context.selection ? context.selection() : context,
        transition = (selection.delay !== undefined);
    
    selection.each(function(data) {
      var parent = d3.select(this);
      var el = parent.select(_impl.self());
      if (el.empty()) {
        el = parent.append('g').attr('id', _impl.id());
      }
      el.attr('class', classed);
      
      var bind = el.selectAll('text')
                    .data(data);
      
      bind.exit().remove();
            
      bind = bind.enter()
              .append('text')
                .attr('dominant-baseline', 'text-before-edge')
                .attr('class', (d) => d.class)
              .merge(bind);

      // need to compute the expensive bbox()
      // and text may not be rendered on 1st use
      var cachedHeight = 0;
      function _setDY() {
        var done = true;
        bind.attr('dy', function(_, i) { 
          if (cachedHeight === 0) {
            var r = this.getBBox();
            if (r.width === 0 && r.height === 0)  {
              done = false;
              return 0;
            }
            cachedHeight = r.height;
          }
          return i * cachedHeight; 
        });  
        return done;
      }
      if (!_setDY()) {
        d3.timer(_setDY, 10);
      }
      
      if (transition && tweenText) {
        bind.transition(context).tween('text', tweenText);
      } else {
        bind.text(text);  
      }
    });
  }
  
  _impl.self = function() { return 'g' + (id ?  '#' + id : '.' + classed); }

  _impl.id = function() {
    return id;
  };
    
  _impl.classed = function(value) {
    return arguments.length ? (classed = value, _impl) : classed;
  };

  _impl.tweenText = function(value) {
    return arguments.length ? (tweenText = value, _impl) : tweenText;
  };
  
  _impl.text = function(value) {
    return arguments.length ? (text = value, _impl) : text;
  };

  return _impl;
}
