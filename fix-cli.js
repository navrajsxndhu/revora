const fs = require('fs');
const path = require('path');

const cliCommandsDir = path.join(__dirname, 'packages', 'revora-cli', 'src', 'commands');

if (fs.existsSync(cliCommandsDir)) {
  const files = fs.readdirSync(cliCommandsDir).filter(f => f.endsWith('.ts'));
  files.forEach(file => {
    const filePath = path.join(cliCommandsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern 1: .action(async (options) => {
    content = content.replace(/\.action\(async\s*\(([^)]+)\)\s*=>\s*\{/g, '.action(async (...args: any[]) => {\n    const $1 = args[0];');
    
    // Pattern 2: .action((options) => {
    content = content.replace(/\.action\(([^)]+)\)\s*=>\s*\{/g, (match, p1) => {
      if (p1.includes('...args') || p1.trim() === '') return match;
      return `.action((...args: any[]) => {\n    const ${p1} = args[0];`;
    });
    
    // Pattern 3: .action(() => {
    content = content.replace(/\.action\(\s*\(\s*\)\s*=>\s*\{/g, '.action((...args: any[]) => {');
    
    // Pattern 4: .action(async () => {
    content = content.replace(/\.action\(async\s*\(\s*\)\s*=>\s*\{/g, '.action(async (...args: any[]) => {');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed CLI action in', file);
  });
}
