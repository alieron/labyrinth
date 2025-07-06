// adds file name to frontmatter as the title tag
export function remarkTitle() {
  return function (_, file) {
    const filePath: string = file.history[0];
    file.data.astro.frontmatter.title = filePath.substring(filePath.lastIndexOf('/')+1, filePath.lastIndexOf('.'));
  }
}