document.addEventListener("DOMContentLoaded", function () {
    // 2. Chèn Footer
    const footerHTML = `
    <footer class="landing-footer">
        <div class="footer-brand-socials">
            <span>Khôi phục thị lực Shine</span>
            <div class="footer-social-icons">
                <a href="https://www.tiktok.com/@khoiphucthilucshine" target="_blank" title="TikTok">
                    <img src="../../tiktok.png" alt="TikTok" onerror="this.style.display='none'">
                </a>
                <a href="https://www.youtube.com/@khoiphucthilucshine" target="_blank" title="YouTube">
                    <img src="../../ytb.png" alt="YouTube" onerror="this.style.display='none'">
                </a>
                <a href="https://www.facebook.com/makeyoureyesShine" target="_blank" title="Facebook">
                    <img src="../../facebook.png" alt="Facebook" onerror="this.style.display='none'">
                </a>
            </div>
        </div>
        <div>Đơn vị Tiên phong trong lĩnh vực Đào Tạo Thị Giác 2 mắt</div>
    </footer>
    `;

    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
});