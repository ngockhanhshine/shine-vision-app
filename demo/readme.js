/* FILE: readme.js
   Mô tả: Hướng dẫn sử dụng và Quản lý giao diện thông báo trợ giúp
*/

const README_DATA = {
    title: "HƯỚNG DẪN SỬ DỤNG - FINGER DANCE PRO",
    version: "2.0.4",
    author: "Shine Vision Vietnam",
    content: `
        1. MỤC TIÊU: 
           - Luyện tập khả năng phối hợp tay mắt và thị giác hai mắt thông qua nhịp điệu.
           - Hỗ trợ cải thiện các vấn đề về Lác Lé, Nhược thị bằng phương pháp huấn luyện không xâm lấn.

        2. CÁCH CHƠI:
           - Nhìn các mũi tên hiện trên màn hình.
           - Dùng 4 phím mũi tên (Lên, Xuống, Trái, Phải) để nhập lệnh tương ứng.
           - Khi thanh quay nhịp điệu chạm vào vùng sáng (vùng 90-135 độ), nhấn PHÍM CÁCH (Space) để hoàn tất chuỗi lệnh.

        3. CÀI ĐẶT ANAGLYPH:
           - Sử dụng kính 2 màu (Đỏ - Xanh).
           - Điều chỉnh thanh gạt R-G-B để triệt tiêu hình ảnh ở mỗi mắt cho đến khi đạt trạng thái tập luyện tốt nhất.

        4. LƯU Ý BẢO MẬT:
           - Ứng dụng sẽ tự động TẠM DỪNG nếu bạn di chuyển chuột ra khỏi cửa sổ trình duyệt.
           - Mọi hành vi cố gắng mở mã nguồn (F12, Inspect) sẽ dẫn đến việc TỰ ĐỘNG ĐĂNG XUẤT để bảo vệ dữ liệu bài tập.
    `
};

/**
 * Hàm hiển thị giao diện hướng dẫn khi người dùng bấm phím tắt
 */
function showInstructions() {
    // Kiểm tra xem đã có popup chưa, tránh tạo nhiều cái
    if (document.getElementById('instruction-popup')) return;

    const popup = document.createElement('div');
    popup.id = 'instruction-popup';
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        max-width: 500px;
        background: white;
        border: 4px solid #d32f2f;
        border-radius: 15px;
        padding: 25px;
        z-index: 10000;
        box-shadow: 0 0 50px rgba(0,0,0,0.8);
        font-family: Arial, sans-serif;
        color: #333;
    `;

    popup.innerHTML = `
        <h2 style="color:#d32f2f; margin-top:0; text-align:center;">${README_DATA.title}</h2>
        <div style="white-space: pre-line; line-height: 1.6; font-size: 14px; max-height: 300px; overflow-y: auto; padding-right: 10px;">
            ${README_DATA.content}
        </div>
        <hr style="border:1px solid #eee; margin: 15px 0;">
        <div style="text-align:center; font-weight:bold; color:#666; font-size:12px; margin-bottom:15px;">
            Phiên bản: ${README_DATA.version} | Bản quyền thuộc về ${README_DATA.author}
        </div>
        <button onclick="document.getElementById('instruction-popup').remove()" 
                style="width:100%; background:#333; color:white; border:none; padding:12px; border-radius:8px; cursor:pointer; font-weight:bold;">
            ĐÃ HIỂU VÀ QUAY LẠI TẬP LUYỆN
        </button>
    `;

    document.body.appendChild(popup);
}

// Xuất dữ liệu nếu cần dùng cho các mục đích khác
console.log("Shine Vision Readme Loaded.");