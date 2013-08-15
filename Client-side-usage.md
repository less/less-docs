Client-side is the easiest way to get started and good for developing your LESS skills. For production and especially if performance is important, we recommend pre-compiling using node or one of the many third party tools.

Link your .less stylesheets using &lt;link&gt; with the _rel_ attribute set to **stylesheet/less**:

    <link rel="stylesheet/less" type="text/css" href="styles.less" />

Then download less.js from the top of the page, and include it in the &lt;head&gt; element of your page, like so:

    <script src="less.js" type="text/javascript"></script>

Make sure you include your stylesheets **before** the script.

Remember, that if you link more than one .less stylesheet, each of them is compiled independently, so any variables, mixins or namespaces you define in a stylesheet are not accessible in any other.
