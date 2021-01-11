const path = require('path');

const stripPlugin = require('../utils/stripPlugin');

/**
 * Returns final absolute file path for given bundle.
 *
 * @param {string} localePath Path to the locale.
 * @param {string} bundleName Name of the bundle.
 * @returns {string}
 */
const getBundlePath = (localePath, bundleName, isMinifyOn) => {
    const fileName = `bundle-${bundleName}${isMinifyOn ? '.min' : ''}.js`;

    return path.join(localePath, 'magepack', fileName);
};

/**
 * Returns final absolute file path for given bundle configuration.
 *
 * @param {string} localePath Path to the locale.
 * @param {string} bundleName Name of the bundle.
 * @param {bool} outputMinify should minify output path
 * @returns {string}
 */
const getBundleConfigPath = (localePath, bundleName, outputMinify) => {
    const fileName = `requirejs-config-${bundleName}${
        outputMinify ? '.min' : ''
    }.js`;

    return path.join(localePath, 'magepack', fileName);
};

/**
 * Returns final module file path by stripping the plugin and adding minification suffix if needed.
 *
 * @param {string} moduleName Module name.
 * @param {string} modulePath Module path.
 * @param {boolean} isMinifyOn If minification is enabled in Magento.
 */
const getModuleRealPath = (moduleName, modulePath, isMinifyOn) => {
    if (!moduleName.startsWith('text!')) {
        if (!modulePath.endsWith('.min') && isMinifyOn) {
            modulePath += '.min';
        }

        modulePath += '.js';
    }

    return stripPlugin(modulePath);
};

module.exports = { getBundlePath, getBundleConfigPath, getModuleRealPath };
