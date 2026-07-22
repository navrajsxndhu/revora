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

// 1. Fix JSX Entities in Experience pages
const expDir = path.join(__dirname, 'src', 'app', 'experience');
const expFiles = walkSync(expDir);
expFiles.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    content = content.replace(/< 8s/g, '&lt; 8s');
    content = content.replace(/<= 3 layers/g, '&lt;= 3 layers');
    content = content.replace(/> 2/g, '&gt; 2');

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Fixed JSX in:', file);
    }
  }
});

// 2. Fix API route syntaxes
const apiDir = path.join(__dirname, 'src', 'app', 'api');
const apiFiles = walkSync(apiDir);
apiFiles.forEach(file => {
  if (file.endsWith('.ts') || file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;

    // Fix `POST(, { params })` -> `POST(request, { params })`
    // Actually, in NextJS 13 Route Handlers, the first argument is `request: Request`. If it's missing, it's safer to just put `_req: Request` or just remove the comma if they don't need it.
    // Wait, the original probably had `req: NextRequest` but it got stripped?
    // The error says: `export async function POST(, { params }`
    content = content.replace(/export\s+async\s+function\s+(GET|POST|PUT|DELETE|PATCH)\s*\(\s*,\s*\{\s*params\s*\}/g, 'export async function $1(request, { params }');

    // Let's also handle `GET( , ` just in case
    content = content.replace(/export\s+async\s+function\s+(GET|POST|PUT|DELETE|PATCH)\s*\(\s*,\s*/g, 'export async function $1(request, ');

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Fixed API route:', file);
    }
  }
});
