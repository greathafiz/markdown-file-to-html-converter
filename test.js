const converter = require('./index')

const markdown = '# Heading 1\nThis is a **test** paragraph.'
const htmlcontent = converter.convertMarkdownToHTML(markdown)
console.log('Converted Markdown to HTML:\n', htmlcontent);

// MD file -> HTML file
converter.convertFileToHTML('test.md', 'output.html')
console.log('Conversion from markdown to html successful. Check output.hmtl file');