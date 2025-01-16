const lampuLaluLintas = (warna) => {
    if (warna === "hijau") {
      console.log("selamat jalan");
    } else if (warna === "kuning") {
      console.log("siap-siap");
    } else if (warna === "merah") {
      console.log("berhenti juki");
    } else {
      console.log("lampu error");
    }
  };
  
  lampuLaluLintas("merah");
  lampuLaluLintas("kuning");
  lampuLaluLintas("hijau");