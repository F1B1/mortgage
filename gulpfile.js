import gulp from 'gulp';
import browserSync from 'browser-sync';

import { paths } from './gulp/config/paths.js';
import { clean } from './gulp/tasks/clean.js';
import { svgSprites } from './gulp/tasks/sprite.js';
import { styles } from './gulp/tasks/styles.js';
import { stylesBackend } from './gulp/tasks/styles-backend.js';
import { scripts } from './gulp/tasks/scripts.js';
import { scriptsBackend } from './gulp/tasks/scripts-backend.js';
import { resources } from './gulp/tasks/resources.js';
import { images } from './gulp/tasks/images.js';
import { webpImages } from './gulp/tasks/webp.js';
import { htmlInclude } from './gulp/tasks/html-include.js';
import { cacheTask } from './gulp/tasks/cache.js';
import { rewrite } from './gulp/tasks/rewrite.js';
import { htmlMinify } from './gulp/tasks/html-minify.js';
import { zipFiles } from './gulp/tasks/zip.js';
//import fs from 'fs';
import { copyJson } from './gulp/tasks/copy-json.js';

global.app = {
  gulp,
  isProd: process.argv.includes('--build'),
  paths,
}

// function copyJsonFile(cb) {
//   fs.copyFileSync(`${paths.base.src}/data.json`, `${paths.base.build}/data.json`);
//   cb();
// }

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: `${app.paths.base.build}`
    },
    notify: false,
    port: 3000,
  });

  gulp.watch(app.paths.srcScss, styles);
  gulp.watch(app.paths.srcFullJs, scripts);
  gulp.watch(`${app.paths.srcPartialsFolder}/*.html`, htmlInclude);
  gulp.watch(`${app.paths.base.src}/*.html`, htmlInclude);
  gulp.watch(`${app.paths.resourcesFolder}/**`, resources);
  gulp.watch(`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png,svg}`, images);
  gulp.watch(`${app.paths.srcImgFolder}/**/**.{jpg,jpeg,png}`, webpImages);
  gulp.watch(app.paths.srcSvg, svgSprites);
  gulp.watch(`${app.paths.srcJsonFolder}/**/*.json`, copyJson);
}

// export { copyJsonFile };

const dev = gulp.series(clean, htmlInclude, scripts, styles, resources, images, webpImages, svgSprites, copyJson, watcher);
const backend = gulp.series(clean, htmlInclude, scriptsBackend, stylesBackend, resources, images, webpImages, svgSprites, copyJson);
const build = gulp.series(clean, htmlInclude, scripts, styles, resources, images, webpImages, svgSprites, htmlMinify, copyJson);
const cache = gulp.series(cacheTask, rewrite);
const zip = zipFiles;

export { dev }
export { build }
export { backend }
export { cache }
export { zip }

gulp.task('default', dev);
