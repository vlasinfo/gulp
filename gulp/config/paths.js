const srcFolder = './src'
const buildFolder = './build'

export const paths = {
  base: {
    src: srcFolder,
    build: buildFolder,
  },
  srcSvg: `${srcFolder}/assets/img/svg/**.svg`,
  srcImgFolder: `${srcFolder}/assets/img`,
  buildImgFolder: `${buildFolder}/assets/img`,
  srcScss: `${srcFolder}/assets/scss/**/*.{scss,css}`,
  buildCssFolder: `${buildFolder}/assets/css`,
  srcFullJs: `${srcFolder}/assets/js/**/*.js`,
  srcMainJs: `${srcFolder}/assets/js/main.js`,
  buildJsFolder: `${buildFolder}/assets/js`,
  srcComponentsFolder: `${srcFolder}/components`,
  assetsFolder: `${srcFolder}/assets`,
  buildFolderAssets: `${buildFolder}/assets`,
}
