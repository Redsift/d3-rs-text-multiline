var tape = require("tape"),
    jsdom = require("jsdom"),
    html = require("html"),
    d3 = require("d3-selection"),
    svg = require("d3-rs-svg"),
    xunit = require("tap-xunit"),
    pretty = require("tap-diff"),
    fs = require("fs"),    
    text = require("../");

if (process.env.CIRCLE_TEST_REPORTS) {
    // Pretty errors on CircleCI
    var path = process.env.CIRCLE_TEST_REPORTS + '/junit';
    fs.mkdirSync(path);
    var wstream = fs.createWriteStream(path + '/junit.xml');
    tape.createStream().pipe(xunit({})).pipe(wstream);
} else {
    // Pretty errors on Console
    tape.createStream().pipe(pretty({})).pipe(process.stdout);
}

function dumpOnError(t, document) {
    t.test("DOM state", function(s) {
        if (t._ok || process.env.CI) return s.end();
        console.log(html.prettyPrint(jsdom.serializeDocument(document), {indent_size: 2}));
        return s.end();
    });    
}
   
tape("text() generates text", function(t) {
    var document = global.document = jsdom.jsdom("<div id='test'></div>");
    dumpOnError(t, document);     
    try {   
        var host = svg.html();
        var el = d3.select('#test').call(host).select(host.self()).select(host.child());

        var elm = text.svg();
        el.datum( [ { text: 'first' }, { text: 'second'.split('') }, 'last' ] ).call(elm);
        
        t.equal(el.select(elm.self()).selectAll('text').size(), 2);
        
        t.end();
    } finally {
        delete global.document;
    }    
});   
