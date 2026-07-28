const fs = require('fs');
const path = require('path');

const srcDir = path.join('e:', 'QB', 'wedding templates', 'monasha ekwin', 'src');

function fixColors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  if (filePath.endsWith('HeroContent.tsx')) {
    content = content.replace(/color: "#111111"/g, 'color: "#B8942A"'); 
    content = content.replace(/color: "#C0C0C0"/g, 'color: "#B8942A"');
    content = content.replace(/rgba\(0,0,0,0\.82\)/g, 'rgba(184,148,42,0.95)'); 
    content = content.replace(/rgba\(0,0,0,0\.38\)/g, 'rgba(184,148,42,0.6)'); 
    content = content.replace(/rgba\(192,192,192,0\.72\)/g, 'rgba(184,148,42,0.95)'); 
  }

  if (filePath.endsWith('NoteFromUs.tsx')) {
    content = content.replace(/text-gray-900/g, 'text-[#9E7B22]');
    content = content.replace(/color: "#808080"/g, 'color: "#B8942A"');
    content = content.replace(/rgba\(17,17,17,\s*0\.88\)/g, 'rgba(158,123,34, 0.9)');
    content = content.replace(/text-\[#808080\]/g, 'text-[#B8942A]');
    content = content.replace(/text-\[#C0C0C0\]/g, 'text-[#B8942A]');
  }

  if (filePath.endsWith('Celebration.tsx')) {
    content = content.replace(/color: "#C0C0C0"/g, 'color: "#B8942A"'); 
    content = content.replace(/color: "#808080"/g, 'color: "#9E7B22"');
    content = content.replace(/rgba\(255,255,255,0\.7\)/g, 'rgba(158,123,34,0.9)'); 
    content = content.replace(/rgba\(17,17,17,0\.7\)/g, 'rgba(158,123,34,0.9)'); 
    content = content.replace(/rgba\(0,0,0,0\.7\)/g, 'rgba(158,123,34,0.9)'); 
    content = content.replace(/color: "#E8C547"/g, 'color: "#B8942A"');
  }

  if (filePath.endsWith('Countdown.tsx')) {
    content = content.replace(/rgb\(192,192,192\)/g, '#B8942A');
    content = content.replace(/rgba\(192,192,192,\s*0\.3\)/g, 'rgba(184,148,42, 0.3)');
    content = content.replace(/rgba\(192,192,192,\s*0\.28\)/g, 'rgba(184,148,42, 0.28)');
    content = content.replace(/rgba\(160,160,160,\s*0\.6\)/g, 'rgba(184,148,42, 0.8)');
  }

  if (filePath.endsWith('RSVPForm.tsx')) {
    content = content.replace(/text-gray-900/g, 'text-[#9E7B22]');
    content = content.replace(/text-\[#111111\]/g, 'text-[#B8942A]');
    content = content.replace(/text-\[#C0C0C0\]/g, 'text-[#B8942A]');
    content = content.replace(/text-white\/70/g, 'text-[#9E7B22]');
    content = content.replace(/text-white\/50/g, 'text-[#9E7B22]');
    content = content.replace(/text-white/g, 'text-[#9E7B22]');
    // Wait, RSVPForm had bg-[#FFFFFF] and some text elements from before. Let's make sure #E8C547 becomes gold.
    content = content.replace(/#A0A0A0/g, '#B8942A'); // any remaining silver lines
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated texts to gold in:', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixColors(filePath);
    }
  }
}

walkDir(srcDir);
