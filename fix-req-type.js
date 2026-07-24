const fs = require('fs');
const path = require('path');

function walk(dir) {
  fs.readdirSync(dir).forEach(f => {
    const file = path.join(dir, f);
    if (fs.statSync(file).isDirectory()) {
      walk(file);
    } else if (file.endsWith('.ts')) {
      let c = fs.readFileSync(file, 'utf8');
      let changed = false;
      
      if (c.includes('(req: Request)')) {
        c = c.replace(/\(req: Request\)/g, '(req: NextRequest)');
        changed = true;
      }
      
      if (changed) {
        if (c.includes('import { NextResponse } from "next/server";')) {
          c = c.replace('import { NextResponse } from "next/server";', 'import { NextRequest, NextResponse } from "next/server";');
        } else if (c.includes('from "next/server"') && !c.includes('NextRequest')) {
          c = c.replace(/import\s+\{([^}]+)\}\s+from\s+["']next\/server["']/, (m, p1) => 'import { NextRequest, ' + p1 + ' } from "next/server"');
        } else if (!c.includes('from "next/server"')) {
          c = 'import { NextRequest } from "next/server";\n' + c;
        }
        
        fs.writeFileSync(file, c);
        console.log('Fixed NextRequest in', file);
      }
    }
  });
}

walk('src/app/api');
