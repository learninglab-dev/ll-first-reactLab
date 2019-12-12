export const reactLiveHome = {
  plain: {
    color: '#98E342'
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata', 'variable'],
      style: {
        color: '#E6DB74'
      }
    },
    {
      types: ['property', 'tag', 'number', 'constant', 'symbol', 'punctuation'],
      style: { color: '#F661B1' }
    },
    {
      types: ['string', 'char', 'builtin', 'inserted'],
      style: {
        color: 'white'
      }
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        // 'string',
        'variable',
        'language-css',
        'attr-name',
      ],
      style: {
        color: '#E6DB74'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['regex', 'important', 'boolean'],
      style: {
        color: '#e90'
      }
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#00A7AA'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        opacity: '1'
      }
    }
  ]
};
