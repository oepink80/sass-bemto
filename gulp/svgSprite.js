'use strict';

import path from 'path';
import svgSprite  from 'gulp-svg-sprite';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.images.replace(/^_/, ''));

  // svg-sprite compilation
  gulp.task('svgSprite', function () {
    return gulp.src(dirs.source+'/_images/svg/*.svg')
      .pipe(
        svgSprite({
          mode: {
            view: {
              bust: false,
              render: {
                scss: true
              },
              example: true
            },
            symbol: {
              render: {
                scss: true
              },
              example: true
            }
          }
        })
      )
      .pipe(gulp.dest(dirs.source+'/_images/'));
  });
}
 