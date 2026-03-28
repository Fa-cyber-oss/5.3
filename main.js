// 1. Foydalanuvchidan ism so'rash
let ism = prompt("Ismingizni kiriting:");

// 2. Yangi <h1> elementi yaratish (createElement)
let sarlavha = document.createElement("h1");

// 3. Element ichiga promptdan kelgan ismni yozish
sarlavha.textContent = "Xush kelibsiz, " + ism + "!";

// 4. JavaScript orqali CSS stillarini berish (Style)
sarlavha.style.color = "white";
sarlavha.style.backgroundColor = "royalblue";
sarlavha.style.padding = "20px";
sarlavha.style.textAlign = "center";
sarlavha.style.borderRadius = "10px";
sarlavha.style.fontFamily = "sans-serif";
sarlavha.style.marginTop = "50px";
sarlavha.style.boxShadow = "0px 4px 15px rgba(0,0,0,0.2)";

// 5. Yaratilgan elementni sahifaga (body ichiga) qo'shish (append)
document.body.append(sarlavha);