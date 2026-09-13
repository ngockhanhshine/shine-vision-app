const noticeData = {
    date: "13/09/2026",
    content: [
        "Tính năng ẩn cột tuỳ chỉnh cho App Circle Cross Training",
        "App Trò chơi xếp hình cho mắt Nhược thị"
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