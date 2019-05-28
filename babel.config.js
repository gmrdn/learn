// babel.config.js
module.exports = api => {
    const isTest = api.env('test');

    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ]
}