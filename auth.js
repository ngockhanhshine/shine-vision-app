// 1. Hàm kiểm tra đăng nhập (Dùng cho trang chủ và tất cả app con)
function checkAuth() {
    const loginData = JSON.parse(localStorage.getItem('user_login'));
    const currentTime = new Date().getTime();
    const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

    if (!loginData || (currentTime - loginData.loginTime > TWENTY_FOUR_HOURS)) {
        localStorage.removeItem('user_login');
        if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
            alert("Vui lòng đăng nhập để tiếp tục!");
            window.location.href = 'index.html'; 
        }
        return false;
    }
    return true;
}

// 2. Hàm xử lý đăng nhập - KẾT NỐI GOOGLE SHEET
async function handleLogin(userInp, passInp) {
    // ANH THAY LINK WEB APP URL CỦA ANH VÀO ĐÂY
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwMuqLBgaHeYQnViFVz9p2K_fQ6DW8VGIRjB021-uDZpBpOKvB0gQhKF7WRoYxT5Rdf/exec';

    if (!userInp || !passInp) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    try {
        // Gửi yêu cầu kiểm tra tới Google Apps Script
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify({ username: userInp, password: passInp })
        });
        
        const data = await response.json();

        if (data.result === "success") {
            const loginData = { loginTime: new Date().getTime() };
            localStorage.setItem('user_login', JSON.stringify(loginData));
            alert("Đăng nhập thành công!");
            location.reload(); 
        } else {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
    } catch (e) {
        console.error(e);
        alert("Lỗi kết nối dữ liệu hệ thống!");
    }
}

// Tự động chạy kiểm tra khi load trang
checkAuth();