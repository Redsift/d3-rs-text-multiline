var tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = require("d3-selection"),
    svg = require("d3-rs-svg"),
    text = require("../");
    
tape("text() generates text", function(t) {
    var document = global.document = jsdom.jsdom("<div id='test'></div>");
    try {   
        var host = svg.html();
        var el = d3.select('#test').call(host).select(host.child());
        
        var elm = text.svg();
        el.datum( [ { text: 'first' }, 'last' ] ).call(elm);
        
        t.equal(el.selectAll('text').size(), 2);
        
        t.end();
    } finally {
        delete global.document;
    }    
});   
