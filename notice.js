const noticeData = {
    date: "23/09/2026",
    content: [
        "Điều chỉnh giao diện trang Đăng nhập",
        "Video hướng dẫn cho app Trò Chơi Xếp Hình"
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const noticeContentDiv = document.getElementById("notice-content");
    if (noticeContentDiv && typeof noticeData !== "undefined") {
        let listHtml = noticeData.content.map(item => `<li>${item}</li>`).join("");
        noticeContentDiv.innerHTML = `
            <div class="notice-date">Update ngày ${noticeData.date}</div>
            <ul class="notice-list">
                ${listHtml}
            </ul>
        `;
    }
});
