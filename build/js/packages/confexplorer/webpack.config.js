let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/miloszmoscicki/Desktop/web-app-react-kotlin-js-gradle-master/build/js/packages/confexplorer/kotlin-dce-dev/confexplorer.js"]
};

config.output = {
    path: "/Users/miloszmoscicki/Desktop/web-app-react-kotlin-js-gradle-master/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "confexplorer.js"
            : "confexplorer-[name].js";
    },
    library: "confexplorer",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("/Users/miloszmoscicki/Desktop/web-app-react-kotlin-js-gradle-master/build/js/packages/confexplorer/kotlin-dce-dev")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// dev server
config.devServer = {
  "open": true,
  "static": [
    "/Users/miloszmoscicki/Desktop/web-app-react-kotlin-js-gradle-master/build/processedResources/js/main"
  ]
};

// Report progress to console
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');
    const handler = (percentage, message, ...args) => {
        const p = percentage * 100;
        let msg = `${Math.trunc(p / 10)}${Math.trunc(p % 10)}% ${message} ${args.join(' ')}`;
        msg = msg.replace("/Users/miloszmoscicki/Desktop/web-app-react-kotlin-js-gradle-master/build/js", '');;
        console.log(msg);
    };

    config.plugins.push(new webpack.ProgressPlugin(handler))
})(config);

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("/Users/miloszmoscicki/Desktop/web-app-react-kotlin-js-gradle-master/build/reports/webpack/confexplorer/webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
