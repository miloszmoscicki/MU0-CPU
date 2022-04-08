{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/miloszmoscicki/Desktop/mu0-simple-cpu/build/js/packages/mu0/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/miloszmoscicki/Desktop/mu0-simple-cpu/build/js/packages/mu0/kotlin-dce-dev/mu0.js'
    ]
  },
  output: {
    path: '/Users/miloszmoscicki/Desktop/mu0-simple-cpu/build/distributions',
    filename: [Function: filename],
    library: 'mu0',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'eval-source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    open: true,
    static: [
      '/Users/miloszmoscicki/Desktop/mu0-simple-cpu/build/processedResources/js/main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}