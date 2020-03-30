const fs = require('fs-extra');

fs.copy('./img', './public/img');

fs.copy('./fonts', './public/fonts');

fs.copy('./tiles', './public/tiles');

fs.copy('./sprites', './public/sprites');