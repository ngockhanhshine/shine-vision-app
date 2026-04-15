/**
 * File: readme.js
 * Chức năng: Hiển thị hướng dẫn sử dụng khi nhấn Ctrl+S hoặc F12
 */

function showInstructions() {
    // Kiểm tra xem đã có popup nào đang hiển thị chưa để tránh hiện chồng chéo
    if (document.getElementById('instruction-modal')) return;

    // Tạo overlay (lớp nền mờ)
    const overlay = document.createElement('div');
    overlay.id = 'instruction-modal';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        backdrop-filter: blur(5px);
    `;

    // Tạo nội dung thông báo
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: #1c1c1e;
        color: white;
        padding: 30px;
        border-radius: 20px;
        border: 2px solid #007aff;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        text-align: left;
        position: relative;
    `;

    modal.innerHTML = `
        <h2 style="color: #007aff; margin-top: 0; border-bottom: 1px solid #333; padding-bottom: 10px;">
            Hướng dẫn sử dụng
        </h2>
        
        <div style="line-height: 1.6; font-size: 15px;">
            <p><strong>1. Cách tập luyện:</strong> Chọn một trong 12 bài tập hiển thị trên màn hình chính phù hợp với phác đồ của huấn luyện viên.</p>
            <p><strong>2. Thiết bị:</strong> Đảm bảo đeo kính Anaglyph (Đỏ - Xanh) khi tham gia các bài tập có ký hiệu <span style="color: #ff3b30;">Ana</span><span style="color: #007aff;">glyph</span>.</p>
            <p><strong>3. Thao tác:</strong> 
                <ul>
                    <li>Sử dụng chuột và bàn phím theo hướng dẫn cụ thể trong từng ứng dụng.</li>
                    <li>Không tự ý nhấn Ctrl+S hoặc các phím chức năng hệ thống.</li>
                </ul>
            </p>
            <p><strong>4. Hỗ trợ:</strong> Nếu có vấn đề về đăng nhập hoặc kỹ thuật, vui lòng liên hệ trực tiếp huấn luyện viên.</p>
        </div>

        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #333; font-size: 13px; color: #bbb;">
            <p><strong>Trung tâm Khôi phục Thị lực Shine</strong></p>
            <p>Hotline: 0973370148</p>
            <p>Website: shinevisioncenter.com</p>
        </div>

        <button id="close-modal" style="
            margin-top: 20px;
            width: 100%;
            padding: 12px;
            background: #007aff;
            color: white;
            border: none;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
        ">ĐÃ HIỂU</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Sự kiện đóng popup khi nhấn nút
    document.getElementById('close-modal').addEventListener('click', function() {
        document.body.removeChild(overlay);
    });

    // Đóng popup khi nhấn ESC
    const escHandler = function(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}