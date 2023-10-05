var arrOutput = [];
// Bài 1 :Nhập số vào mảng array
document.getElementById('btn-add').onclick = function () {
    // input:giá trị nhập
    var giaTriThem = +document.getElementById('gia-tri-them').value;
    // output :array output
    // process
    arrOutput.push(giaTriThem);
    // In ra giao diện
    document.getElementById('array-number').innerHTML = arrOutput;
}


// Bài 2: Tính tổng số dương
document.getElementById('btn-tong-duong').onclick = function () {
    // input: số dương trong mảng
    // var arrOutput = +document.getElementById('array-number').value;

    // output : tổng các số dương
    var tong = 0;
    // process
    for (var index = 0; index < arrOutput.length; index++) {
        if (arrOutput[index] >= 0) {
            tong += arrOutput[index]
        }
    }
    document.getElementById('res-tong').innerHTML = '<i class="fa fa-hand-point-right text-warning"></i> Tổng dương bằng :' + tong
}
// Bài 3: Đếm số dương
document.getElementById('btn-dem-duong').onclick = function () {
    //input: số dương trong mảng
    //output: đếm số dương
    var dem = 0;
    // process
    for (var index = 0; index < arrOutput.length; index++) {
        if (arrOutput[index] >= 0) {
            dem++
        }
    }
    document.getElementById('res-dem').innerHTML = '<i class="fa fa-hand-point-right text-warning"></i> Số dương :' + dem
}

document.getElementById('btn-tim-so-nho').onclick = function () {
    // input: số trong mảng
    // output: số nhỏ nhất trong mảng
    var min = arrOutput[0]
    //process
    for (var index = 0; index < arrOutput.length; index++) {
        if (min > arrOutput[index]) {
            min = arrOutput[index]
        }
    }
    document.getElementById('res-so-nho').innerHTML = '<i class="fa fa-hand-point-right text-warning"></i> Số nhỏ nhất :' + min

}
document.getElementById('btn-so-duong-nho').onclick = function () {
    var arrDuong = [];
    var minDuong = 0;
    for (var i = 0; i < arrOutput.length; i++) {
        if (arrOutput[i] >= 0) {
            arrDuong.push(arrOutput[i])
        }
    }
    if (arrDuong.length > 0) {
        minDuong = soDuongNhoNhat(arrDuong)

        document.getElementById('res-so-duong-nho').innerHTML = '<i class="fa fa-hand-point-right text-warning"></i> Số dương nhỏ nhất là :' + minDuong

    } else {
        alert('Không có số dương trong mảng')
    }

}
document.getElementById('btn-so-chan-cuoi').onclick = function () {
    var arrSoChanCuoiCung = [];
    arrSoChanCuoiCung = timSoChanCuoiCung(arrOutput)
    document.querySelector('#res-so-chan').innerHTML = '<i class="fa fa-hand-point-right text-warning"></i> Số chẵn cuối là :' + arrSoChanCuoiCung
}

document.querySelector('#btn-doi-vi-tri').onclick = function () {
    var soDoi1 = +document.querySelector('#so-doi-1').value;
    var soDoi2 = +document.querySelector('#so-doi-2').value;
    var arrSauKhiDoi = [];
    //process
    arrSauKhiDoi = doiCho(arrOutput, soDoi1, soDoi2);
    //in ra giao diện
    document.querySelector('#res-doi-cho').innerHTML = '<i class="fa fa-hand-point-right text-warning"></i> Mảng sau khi đổi là :' + arrSauKhiDoi
}

document.querySelector('#btn-sap-xep').onclick = function () {
    var arrSapXep = _.sortBy(arrOutput)
    document.querySelector('#res-sap-xep').innerHTML = `<i class="fa fa-hand-point-right text-warning"></i> Mảng sau khi sắp xếp là: ${arrSapXep}`
}

document.querySelector('#btn-tim-so-nguyen-to').onclick = function () {
    var soNguyenToDauTien = 0;
    soNguyenToDauTien = timSoNguyenToDau(arrOutput)
    document.querySelector('#res-so-nguyen-to').innerHTML = `<i class="fa fa-hand-point-right text-warning"></i> Số Nguyên Tố đầu tiên là: ${soNguyenToDauTien}`
}

var arrB9 = [];
document.querySelector('#btn-them-so').onclick = function () {
    var soCanThem = document.querySelector('#so-them-b9').value;
    arrB9.push(soCanThem)
    document.querySelector('#arr-b9').innerHTML = arrB9
}

document.querySelector('#dem-so-nguyen').onclick = function () {
    var soNguyen = 0;
    soNguyen = demSoNguyen(arrB9)
    document.querySelector('#res-b9').innerHTML = `<i class="fa fa-hand-point-right text-warning"></i> Số Nguyên là : ${soNguyen}`
}

document.querySelector('#so-sanh').onclick = function () {
    var soAm = 0;
    var soDuong = 0;
    soAm = demAm(arrOutput)
    soDuong = demDuong(arrOutput)
    if (soAm < soDuong) {
        document.querySelector('#res-b10').innerHTML = `Số Âm < Số dương`
    } else if (soAm > soDuong) {
        document.querySelector('#res-b10').innerHTML = `Số Âm > Số dương`
    } else {
        document.querySelector('#res-b10').innerHTML = `Số Âm = Số dương`
    }
}