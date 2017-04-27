/*
    Less and CSS color highligher for highlight.js
    Recent highlight.js versions favour minimalistic
    and quite loose stylesheets coloring, so for
    the docs we use this (more advanced) parser.
*/

module.exports = function(hljs) {
    var IDENT_RE        = '[\\w-]+'; // yes, Less identifiers may begin with a digit
    var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})+'; // identifier including @{interpolation}
    
    /* Generic Modes */
    
    var RULES = [], VALUE = []; // forward def. for recursive modes
    
    var STRING_MODE = function(c) { return {
        // Less strings (incl. escaped) are not multiline
        className: 'string', begin: '~?' + c + '.*?' + c
    };};
    
    var IDENT_MODE = function(name, begin) { return {
        className: name, begin: begin
    };};
    
    var FUNCT_MODE = function(name, begin) { return {
        className: name, begin: begin + '\\(', end: '\\(',
        returnBegin: true, excludeEnd: true
    };};

    var URL_FUNCT_MODE = {
        // fixme: can't color w/o the begining paren due to some 
        // 9.x changes (`excludeEnd` does not work with `starts` anymore?)
        begin: '(url|data-uri)\\(',
        starts: {className: 'string', end: '[\\)\\n]', excludeEnd: true}
    };

    var PARENS_MODE = {
        // used only to properly balance nested parens inside mixin call/def. arg list
        begin: '\\(', end: '\\)', contains: VALUE
    };
    
    // generic Less highlighter (used almost everywhere except selectors)
    VALUE.push( 
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        STRING_MODE("'"),
        STRING_MODE('"'),
        hljs.CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(
        IDENT_MODE('hexcolor', '#[0-9A-Fa-f]+\\b'),
        URL_FUNCT_MODE,
        FUNCT_MODE('function', IDENT_RE),
        PARENS_MODE,
        IDENT_MODE('variable', '@@?' + IDENT_RE),
        IDENT_MODE('variable', '@{'  + IDENT_RE + '}'), // it's only to color @{var} in stuff like :nth-child(@{var})
        IDENT_MODE('built_in', '~?`[^`]*?`') // inline javascript (or whatever host language) *multiline* string
    );
    
    var VALUE_WITH_RULESETS = VALUE.concat({
        begin: '{', end: '}', contains: RULES
    });

    var MIXIN_GUARD_MODE = {
        beginKeywords: 'when', endsWithParent: true, // must for and( and not(
        contains: [{beginKeywords: 'and not'}].concat(VALUE) // using this form to override VALUE's 'function' match
    };
    
    /* Rule-Level Modes */
    
    var RULE_MODE = {
        className: 'attribute', begin: INTERP_IDENT_RE,
        starts: {end: '[;}]', returnEnd: true, contains: VALUE}
    };
    
    var AT_RULE_MODE = {
        className: 'at_rule', // highlight only at-rule keyword
        begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
        starts: {
            end: '[;{}]',
            returnEnd: true,
            contains: VALUE.concat({
                // (scantily) color @media features:
                className: 'attribute', begin: IDENT_RE + '\\s*:', end: ':',
                returnBegin: true, excludeEnd: true,
            })
        }
    };

    // variable definitions and calls
    var VAR_RULE_MODE = {
        className: 'variable',
        variants: [
            // using more strict pattern for higher relevance to increase chances of Less detection.
            // this is *the only* Less specific statement used in most of the sources, so...
            // (we'll still loose to the css-parser unless there's '//', 1 var can't beat 99 properties :)
            {begin: '@' + IDENT_RE + '\\s*:', relevance: 15},
            {begin: '@' + IDENT_RE}
        ],
        starts: {end: '[;}]', returnEnd: true, contains: VALUE_WITH_RULESETS}
    };
    
    var SELECTOR_MODE = {
        // first parse unambiguous selectors (i.e. those not starting with tag)
        // then fall into the scary lookahead-discriminator variant.
        // this mode also handles mixin definitions and calls
        variants: [{
            begin: '[\\.#:&\\[]', end: '[;{}]' // mixin calls end with ';'
        }, {
            begin: '(?=' + INTERP_IDENT_RE + ')('+ [
                '\\[[^\\]]*\\]', // attribute selector (it may contain strings we need to skip too)
                '@{.*?}',        // variable interpolation
                '[^;}\'"`]',     // non-selector terminals
            ].join('|') +
                ')*?[^@\'"`]{',  // at last
            end: '{'
        }],

        returnBegin: true,
        returnEnd:   true,
        illegal: '[<=\'$"]',
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            MIXIN_GUARD_MODE,
            IDENT_MODE('keyword',  'all\\b'),
            IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),  // otherwise it's identified as tag
            IDENT_MODE('tag',       INTERP_IDENT_RE + '%?'), // '%' for more consistent coloring of @keyframes "tags"
            IDENT_MODE('id',       '#'   + INTERP_IDENT_RE),
            IDENT_MODE('class',    '\\.' + INTERP_IDENT_RE),
            IDENT_MODE('keyword',  '&'),
            FUNCT_MODE('pseudo',   ':not'),
            FUNCT_MODE('keyword',  ':extend'),
            IDENT_MODE('pseudo',   '::?' + INTERP_IDENT_RE),
            {className: 'attr_selector', begin: '\\[', end: '\\]'},
            {begin: '\\(', end: '\\)', contains: VALUE_WITH_RULESETS}, // argument list of parametric mixins
            {begin: '!important'} // eat !important after mixin call or it will be colored as tag
        ]
    };
    
    RULES.push(
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        AT_RULE_MODE,
        VAR_RULE_MODE,
        SELECTOR_MODE,
        RULE_MODE
    );
    
    return {
        case_insensitive: true,
        illegal: '[=>\'/<($"]',
        contains: RULES
    };
};
