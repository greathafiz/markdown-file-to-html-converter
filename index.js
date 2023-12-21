const markdownIt = require("markdown-it")
const fs = require('fs')

const convertMarkdownToHTML = (mdText) => {
    const md = markdownIt()
    return md.render(mdText)
}

const convertFileToHTML = (inputFilePath, outputFilePath) => {
    const mdText = fs.readFileSync(inputFilePath, 'utf-8')
    const htmlcontent = convertMarkdownToHTML(mdText)
    fs.writeFileSync(outputFilePath, htmlcontent)
}

module.exports = {
    convertMarkdownToHTML,
    convertFileToHTML
}