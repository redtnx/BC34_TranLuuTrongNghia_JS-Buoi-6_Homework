// Bài tập 1
document.getElementById("xemKQ").onclick = function () {
  var sum = 0;
  for (i = 1; sum <= 10000; i++) {
    sum += i;
  }
  document.getElementById("kq1").innerHTML =
    "Số n nhỏ nhất để 1 + 2 + … + n > 10000 là: " + (i + 1);
};

// Bài tập 2
document.getElementById("timSo1").onclick = function () {
  var soX = document.getElementById("numX").value * 1;
  var soN = document.getElementById("numN").value * 1;
  var tong = 0;
  for (var i = 1; i <= soN; i++) {
    tong += Math.pow(soX, i);
  }
  document.getElementById("kq2").innerHTML = "Tổng: " + tong;
};

// Bài tập 3
document.getElementById("timSo2").onclick = function () {
  var soN2 = document.getElementById("numN2").value * 1;
  var giaiThua = 1;
  for (var i = 1; i <= soN2; i++) {
    giaiThua *= i;
  }
  document.getElementById("kq3").innerHTML = "Giai thừa bằng: " + giaiThua;
};

// Bài tập 4
document.getElementById("taoDiv").onclick = function () {
  var content = "";
  var theChan = "<div class='bg-danger'>số Chẵn</div>";
  var theLe = "<div class='bg-primary'>số Lẻ</div>";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      content += theChan;
    } else {
      content += theLe;
    }
  }
  document.getElementById("theDiv").innerHTML = content;
};
