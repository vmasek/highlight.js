/*
Language: Leaf
Author: Hale Chan <halechan@qq.com>
Description: Based on the Leaf reference from https://vapor.github.io/documentation/guide/leaf.html.
*/

export default function(hljs) {
  return {
    name: 'Leaf',
    // not enough signal
    disableAutodetect: true,
    contains: [
      {
        begin: '#+' + '[A-Za-z_0-9]*' + '\\(',
        end: / \{/,
        returnBegin: true,
        excludeEnd: true,
        contains: [
          {
            className: 'keyword',
            begin: '#+'
          },
          {
            className: 'title.function',
            begin: '[A-Za-z_][A-Za-z_0-9]*'
          },
          {
            begin: '\\(',
            end: '\\)',
            endsParent: true,
            contains: [
              {
                className: 'string',
                begin: '"',
                end: '"'
              },
              {
                className: 'variable',
                begin: '[A-Za-z_][A-Za-z_0-9]*'
              }
            ]
          }
        ]
      }
    ]
  };
}
