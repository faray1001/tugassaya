function getResponse() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    // Aturan-aturan sederhana berdasarkan input pengguna
    if (input.toLowerCase().indexOf("halo") !== -1) {
      output.innerHTML = "halo! ada yang bisa saya bantu?";
    } else if (input.toLowerCase().indexOf("apa itu ai") !== -1) {
      output.innerHTML = "AI adalah teknologi yang membuat mesin bisa berpikir dan bertindak seperti manusia";
    } else if (input.toLowerCase().indexOf("apa manfaat ai") !== -1) {
      output.innerHTML =
        "Mempermudah pekerjaan, mempercepat proses, dan meningkatkan efisiensi";
    } else if ( input.toLowerCase().indexOf("siapa yang menciptakan kamu") !== -1) {
      output.innerHTML = "Doc.Prof Faray S.A";
    } else if (input.toLowerCase().indexOf("terima kasih") !== -1) {
      output.innerHTML = "sama sama! semoga harimu menyenangkan";
    } else {
      output.innerHTML = "maaf! input anda tidak sesuai dengan perintah";
    }
  }
  