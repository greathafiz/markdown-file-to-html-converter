# markdown-file-to-html-converter
A simple Markdown to HTML converter npm package.
## Installation
```
npm install markdown-file-to-html-converter
```
## Usage
### Example
```
const { convertMarkdownToHTML, convertFileToHTML } = require('markdown-to-html-converter');

// Convert Markdown file to HTML file
convertFileToHTML('test.md', 'output.html');
console.log('Conversion from markdown to html successful. Check output.hmtl file.');

// Convert Markdown text to HTML
const markdown = '# Heading 1\nThis is a **test** paragraph.'
const htmlcontent = convertMarkdownToHTML(markdown)
console.log('Converted Markdown to HTML:\n', htmlcontent);
```
## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/greathafiz/markdown-file-to-html-converter/blob/main/LICENSE) file for details.
## Author

Abdul-Hafiz Aderemi

## Dependencies

- [markdown-it](https://www.npmjs.com/package/markdown-it)