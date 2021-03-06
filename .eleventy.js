module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('fonts');
    eleventyConfig.setTemplateFormats(['njk', 'md', 'css']);

    eleventyConfig.addLiquidShortcode('website', function () {
        return 'https://github.com/corylus-git/corylus';
    });
    eleventyConfig.addNunjucksShortcode('website', function () {
        return 'https://github.com/corylus-git/corylus';
    });
};
