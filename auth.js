// 1. Hàm kiểm tra đăng nhập (Dùng cho trang chủ và tất cả app con)
function checkAuth() {
    const loginData = JSON.parse(localStorage.getItem('user_login'));
    const currentTime = new Date().getTime();
    const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

    // Nếu không có dữ liệu hoặc quá 24h thì xóa và đẩy về trang chủ
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

// 2. Hàm xử lý đăng nhập (Chỉ dùng tại trang chủ)
async function handleLogin(userInp, passInp) {
    try {
        const response = await fetch('users.txt');
        const textData = await response.text();
        const lines = textData.split('\n');
        
        let found = false;
        for (let line of lines) {
            const [u, p] = line.trim().split('|');
            if (u === userInp && p === passInp) {
                found = true;
                break;
            }
        }

        if (found) {
            const loginData = { loginTime: new Date().getTime() };
            localStorage.setItem('user_login', JSON.stringify(loginData));
            alert("Đăng nhập thành công!");
            location.reload(); 
        } else {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
    } catch (e) {
        alert("Lỗi kết nối dữ liệu!");
    }
}

// Tự động chạy kiểm tra khi load trang
checkAuth();