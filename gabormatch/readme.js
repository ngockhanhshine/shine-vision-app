/**
 * File: readme.js
 * Nội dung hướng dẫn tập luyện - Đã tối ưu khoảng cách dòng
 */

const readmeContent = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; line-height: 1.4; max-width: 100%;">
        <h2 style="color: #2196F3; border-bottom: 2px solid #2196F3; padding-bottom: 8px; margin: 0 0 12px 0; font-size: 20px;">
            HƯỚNG DẪN TẬP LUYỆN GABOR AUTO-NEXT
        </h2>
        
        <div style="background: #e3f2fd; padding: 10px 15px; border-radius: 8px; margin-bottom: 15px; font-size: 14px;">
            <strong style="color: #0d47a1;">Mục tiêu:</strong> Tìm các cặp hình Gabor cùng góc nghiêng để kích hoạt vỏ não thị giác, cải thiện độ nhạy tương phản.
        </div>

        <h3 style="font-size: 15px; color: #444; margin: 0 0 8px 0;">1. Cách thực hiện bài tập:</h3>
        <ul style="padding-left: 18px; margin: 0 0 15px 0; list-style-type: disc;">
            <li style="margin-bottom: 4px; font-size: 14px;">Quan sát các ô hình Gabor trên màn hình.</li>
            <li style="margin-bottom: 4px; font-size: 14px;">Dùng chuột hoặc chạm tay để chọn 2 ô có <b>góc nghiêng của các sọc giống hệt nhau</b>.</li>
            <li style="margin-bottom: 4px; font-size: 14px;">Nếu đúng, cặp hình sẽ mờ đi. Nếu sai, chúng sẽ tự động bỏ chọn.</li>
            <li style="margin-bottom: 4px; font-size: 14px;">Hoàn thành 6 cặp để kết thúc ván tập.</li>
        </ul>

        <h3 style="font-size: 15px; color: #444; margin: 0 0 8px 0;">2. Cơ chế Tự động tăng độ khó:</h3>
        <ul style="padding-left: 18px; margin: 0 0 15px 0; list-style-type: disc;">
            <li style="margin-bottom: 4px; font-size: 14px;">Nếu hoàn thành <b>dưới 12 giây</b>, hệ thống tự động giảm Độ rõ hoặc Cỡ sọc.</li>
            <li style="margin-bottom: 4px; font-size: 14px;">Mục tiêu: Tập ở mức mắt thấy "hơi khó" nhưng vẫn nhận diện được.</li>
        </ul>

        <h3 style="font-size: 15px; color: #444; margin: 0 0 8px 0;">3. Lưu ý quan trọng:</h3>
        <ul style="padding-left: 18px; margin: 0 0 15px 0; list-style-type: disc;">
            <li style="margin-bottom: 4px; font-size: 14px;">Khoảng cách mắt đến màn hình: 40-50cm.</li>
            <li style="margin-bottom: 4px; font-size: 14px;">Tập nơi đủ sáng, tránh lóa. Thời gian: 10-15 phút/ngày.</li>
        </ul>

        <div style="background: #fff3e0; border-left: 4px solid #ff9800; padding: 8px 12px; margin-top: 15px; font-size: 12px; color: #666;">
            <strong>CẢNH BÁO BẢO MẬT:</strong> Hệ thống phát hiện thao tác can thiệp mã nguồn (F12, Ctrl+S...). Vui lòng không sao chép trái phép.
        </div>
    </div>
`;

function getReadmeContent() {
    return readmeContent;
}