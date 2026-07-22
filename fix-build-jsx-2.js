const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  if (!fs.existsSync(dir)) return filelist || [];
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    } else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

// 1. Fix JSX Entities in Experience AND Engineering pages
const dirs = [
  path.join(__dirname, 'src', 'app', 'experience'),
  path.join(__dirname, 'src', 'app', 'engineering')
];

dirs.forEach(dir => {
  const files = walkSync(dir);
  files.forEach(file => {
    if (file.endsWith('.tsx')) {
      let content = fs.readFileSync(file, 'utf8');
      const original = content;

      content = content.replace(/< 8s/g, '&lt; 8s');
      content = content.replace(/<= 3/g, '&lt;= 3');
      content = content.replace(/> 2/g, '&gt; 2');
      content = content.replace(/< 2/g, '&lt; 2');
      // Replace any other raw '<' or '>' in text nodes if we find them. But those regex cover the known ones.
      
      if (content !== original) {
        fs.writeFileSync(file, content);
        console.log('Fixed JSX in:', file);
      }
    }
  });
});
