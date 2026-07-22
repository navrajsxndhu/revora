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

// 1. Fix JSX Entities in Experience, Engineering, Intelligence, Adoption, Search, Collaboration, Performance, Trust, Personalization, Continuity, Workspace, Design-Language, Intelligence-Fabric, Digital-Workspace, Orchestration, Data-Fabric, Observability, AND Business-Intelligence pages
const dirs = [
  path.join(__dirname, 'src', 'app', 'experience'),
  path.join(__dirname, 'src', 'app', 'engineering'),
  path.join(__dirname, 'src', 'app', 'intelligence'),
  path.join(__dirname, 'src', 'app', 'adoption'),
  path.join(__dirname, 'src', 'app', 'search'),
  path.join(__dirname, 'src', 'app', 'collaboration'),
  path.join(__dirname, 'src', 'app', 'performance'),
  path.join(__dirname, 'src', 'app', 'trust'),
  path.join(__dirname, 'src', 'app', 'personalization'),
  path.join(__dirname, 'src', 'app', 'continuity'),
  path.join(__dirname, 'src', 'app', 'workspace'),
  path.join(__dirname, 'src', 'app', 'design-language'),
  path.join(__dirname, 'src', 'app', 'intelligence-fabric'),
  path.join(__dirname, 'src', 'app', 'digital-workspace'),
  path.join(__dirname, 'src', 'app', 'orchestration'),
  path.join(__dirname, 'src', 'app', 'data-fabric'),
  path.join(__dirname, 'src', 'app', 'observability'),
  path.join(__dirname, 'src', 'app', 'business-intelligence')
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
