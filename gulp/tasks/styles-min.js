import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import plumber from 'gulp-plumber'
import autoprefixer from 'gulp-autoprefixer'
import notify from 'gulp-notify'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

const sass = gulpSass(dartSass)

export const stylesMin = () => {
  return app.gulp
    .src(app.paths.srcScss, { sourcemaps: false })
    .pipe(
      plumber(
        notify.onError({
          title: 'SCSS',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(sass())
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
        overrideBrowserslist: ['last 2 versions'],
      }),
    )
    .pipe(cleanCSS({ level: 2 }))
    .pipe(rename({ basename: 'main', suffix: '.min' }))
    .pipe(app.gulp.dest(app.paths.buildCssFolder))
}
