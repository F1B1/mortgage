import gulp from 'gulp';
import { paths } from '../config/paths.js';

// Задача для копирования JSON файлов
export function copyJson() {
  return gulp.src(`${paths.srcJsonFolder}/**/*.json`)
    .pipe(gulp.dest(paths.buildJsonFolder));
}