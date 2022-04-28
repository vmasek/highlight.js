/*
Language: Awk
Author: Matthew Daly <matthewbdaly@gmail.com>
Website: https://www.gnu.org/software/gawk/manual/gawk.html
Description: language definition for Awk scripts
*/

/** @type LanguageFn */
export default function(hljs) {
  const VARIABLE = {
    className: 'variable',
    variants: [
      { begin: /\$[\w\d#@][\w\d_]*/ },
      { begin: /\$\{(.*?)\}/ }
    ]
  };
  const KEYWORDS = 'BEGIN END if else while do for in break continue delete next nextfile function func exit';
  const STRING = {
    className: 'string',
    contains: [ hljs.BACKSLASH_ESCAPE ],
    variants: [
      {
        begin: /(u|b)?r?'''/,
        end: /'''/
      },
      {
        begin: /(u|b)?r?"""/,
        end: /"""/
      },
      {
        begin: /(u|r|ur)'/,
        end: /'/,
        relevance: "low"
      },
      {
        begin: /(u|r|ur)"/,
        end: /"/,
        relevance: "low"
      },
      {
        begin: /(b|br)'/,
        end: /'/,
        relevance: "low"
      },
      {
        begin: /(b|br)"/,
        end: /"/,
        relevance: "low"
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
  return {
    name: 'Awk',
    keywords: KEYWORDS,
    contains: [
      VARIABLE,
      STRING,
      hljs.REGEXP_MODE,
      hljs.HASH_COMMENT_MODE,
      hljs.NUMBER_MODE
    ]
  };
}
