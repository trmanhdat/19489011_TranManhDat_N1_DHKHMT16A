$(document).ready(function () {
    var i = 1;
    $("#myBtn").click(function() {
        $("#myModal").modal("show");
    });

    function KiemTraMSSV() {
        var mauKT = /^[1-9]{1}[0-9]{9}$/;
        if($("#txtMaSV").val()==""){
            $("#tbMaSV").html("Không được để trống");
            return false;
        }

        if(!mauKT.test($("#txtMaSV").val())){
            $("#tbMaSV").html("MSSV gồm 10 số");
            return false;
        }

        $("#tbMaSV").html("*");
        return true;
    };
    $("#txtMaSV").blur(KiemTraMSSV);

    function KiemTraHoTen(){
        var i =1;
        let maukt = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#txtHT").val()==""){
            $("#tbHT").html("Không được để trống");
            return false;
        }
        if(!maukt.test($("#txtHT").val())){
            $("#tbHT").html("Mỗi ký tự đầu phải viết hoa không sử dụng số");
            return false;
        }
        $("#tbHT").html("*");
        return true;
    };
    $("#txtHT").blur(KiemTraHoTen);

    function KTNgay() {
        if($("#txtNgay").val()==""){
            $("#tbNgay").html("không được để trống");
            return false;
        }

        var today = new Date();
        var ngay = new Date($("#txtNgay").val());
        today = today.setDate(today.getDate()+7);
        if(today>ngay){
            $("#tbNgay").html("Ngày tham gia sau 7 ngày hiện tại");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    };
    $("#txtNgay").blur(KTNgay);

    function KTMail() {
        var mail = /^\w([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        if($("#txtEmail").val()==""){
            $("#tbEmail").html("Không được để trống");
            return false;
        }

        if(!mail.test($("#txtEmail").val())){
            $("#tbEmail").html("Nhập đúng định dạng xxxxxx@iuh.edu.vn");
            return true;
        }
        $("#tbEmail").html("*");
        return true;
    };
    $("#txtEmail").blur(KTMail);

    function KiemTraSDT() {
        var mauKT = /^[0-9]{1}[0-9]{9}$/;
        if($("#txtSDT").val()==""){
            $("#tbSDT").html("Không được để trống");
            return false;
        }

        if(!mauKT.test($("#txtSDT").val())){
            $("#tbSDT").html("Số điện thoại gồm 10 số");
            return false;
        }

        $("#tbSDT").html("*");
        return true;
    };
    $("#txtSDT").blur(KiemTraSDT);

    $("#btnSubDK").click(function() {
        if(
            KiemTraMSSV()==true&&
            KiemTraHoTen()==true&&
            KTNgay()==true&&
            KTMail()==true&&
            KiemTraSDT()==true
        ){
            var masv = $("#txtMaSV").val();
            var hoten = $("#txtHT").val();
            var ngay = $("#txtNgay").val();
            var email = $("#txtEmail").val();
            var sdt = $("#txtSDT").val();

            var them = "<tr><td>" + (i++)+ "</td><td>" + masv + "</td><td>"+ hoten + "</td><td>"
            + "</td><td>" + ngay + "</td><td>" + email + "</td><td>" + sdt + "</td></tr>"
            $("table table-striped").append(them);
            $("#myModal").modal("hide");
        };
    });
});