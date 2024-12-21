const { exec } = require("child_process");

// Versiyadan versiyaga o'tish funksiyasi
function checkoutVersion(version) {
  exec(`git checkout ${version}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Xato yuz berdi: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Git xatosi: ${stderr}`);
      return;
    }
    console.log(`Muvaffaqiyatli o'tildi: ${stdout}`);
  });
}

// Asosiy qism: 10-dan 2-ga o'tish
const currentVersion = "10";
const targetVersion = "2";

console.log(`Hozirgi versiya: ${currentVersion}`);
console.log(`Maqsad versiya: ${targetVersion}`);

checkoutVersion(targetVersion);
