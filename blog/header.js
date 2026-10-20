document.addEventListener("DOMContentLoaded", function () {
    // 1. Chèn Header Navbar
    const headerHTML = `
    <nav class="navbar">
        <a href="../../index.html" class="logo-landing">
            👁️ ShineVision
        </a>
        <ul class="nav-links">
            <li><a href="../../index.html">Trang chủ</a></li>
            <li><a href="../index.html">Kinh nghiệm hay</a></li>
            <li><a href="https://shinevisionapp.com/#dangky">Đăng ký</a></li>
        </ul>
    </nav>
    <section class="hero-banner-full" id="trangchu">
        <a href="https://shinevisionapp.com/#dangky">
            <img src="../../mainmenu/banner.png" alt="ShineVision Banner" onerror="this.src='../../assets/piano.jpg'">
        </a>
    </section>
    `;

    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
});