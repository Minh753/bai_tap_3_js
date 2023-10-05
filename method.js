function soDuongNhoNhat(arr) {

    // Khởi tạo biến để lưu trữ số dương nhỏ nhất.
    var minDuong = arr[0];

    // Duyệt qua mảng và tìm số dương nhỏ nhất.
    for (var i = 1; i < arr.length; i++) {
        if (arr[index] >= 0 && arr[index] < minDuong) {
            output = arr[index];
        }
    }

    // Trả về số dương nhỏ nhất.
    return output;
}

function timSoChanCuoiCung(arr) {
    var output = 0;
    //duyệt mảng ngược để tìm số chẵn nhỏ nhất
    for (var index = arr.length - 1; index >= 0; index--) {
        if (arr[index] % 2 === 0) {
            output = arr[index]
            break
        }
    }
    return output
}

function doiCho(arr, index1, index2) {
    //tạo biến tạm để gán index1
    var tam = arr[index1]
    //đổi chỗ index2 = index1
    arr[index1] = arr[index2]

    arr[index2] = tam

    return arr
}

function kiemTraNguyenTo(so) {
    var output = false;
    for (var demUoc = 0, soChia = 1; soChia <= so; soChia++) {
        if (so % soChia === 0) {
            demUoc++;
        }
    }
    if (demUoc == 2) {
        output = true
    } else {
        output = false;
    }
    return output
}

function timSoNguyenToDau(arr) {
    var soNguyenTo = 0;
    for (var index = 0; index < arr.length; index++) {
        if (kiemTraNguyenTo(arr[index])) {
            soNguyenTo = arr[index]
            break
        }
    }
    return soNguyenTo
}

function demSoNguyen(arr) {
    var output = 0;
    for (var index = 0; index < arr.length; index++) {
        if (Number.isInteger(arr[index])) {
            output++
        }
    }
    return output
}

function demAm(arr) {
    var output = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] < 0) {
            output++
        }
    }
    return output
}

function demDuong(arr) {
    var output = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] >= 0) {
            output++
        }
    }
    return output
}