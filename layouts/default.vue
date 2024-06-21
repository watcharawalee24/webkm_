<template>
    <div>
        <nav>
            <div class="nav">
                <h2 class="LOGO"><a href="http://localhost/web/#"><i class="fa fa-lightbulb-o"></i> E-Learning KM </a>
                </h2>
                <button class="btn-hamburger">
                    <i class="fa fa-bars" style="font-size:36px"></i>
                </button>

                <ul>
                    <li><a href="http://localhost:3000">หน้าแรก</a></li>
                    <li><a href="/Card/CL">คลังความรู้</a></li>
                    <li><a href="#" id="aboutUsLink">เกี่ยวกับเรา</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">กลุ่มงาน</a>
                        <ul class="dropdown-content">
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มภารกิจอำนวยการ</a></li>
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มอัตรากำลัง</a></li>
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มงานสรรหาบุคคล</a></li>
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มงานทางเลือก</a></li>
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มงานยุทศาสตร์</a></li>
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มงานบรรจุแต่งตั้ง</a></li>
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มงานราชอิสริยาภรณ์</a></li>
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มงานประเมินบุคคล</a></li>
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มงานเงินเดือน</a></li>
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มงานต่อเนื่อง</a></li>
                            <li><a href="#"><i class="fas fa-tasks"></i> กลุ่มงานเทคโนโลยีสารสนเทศ</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <slot />
        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="footer-top-con">
                        <div class="footer-top-item">
                            <h4>ติดต่อเรา</h4>
                            <div class="footer-top-item-con">
                                <div class="info">
                                    <p class="info-title">กองบริหารทรัพยากรบุคคล สำนักงานปลัดกระทรวงสาธารณสุข
                                        88/20 หมู่ 4 ถนนติวานนท์ ตำบลตลาดขวัญ
                                        อำเภอเมือง จังหวัดนนทบุรี
                                        11000 โทรศัพท์ 0 2590 1421 โทรสาร 0 2590 1424 ></p>

                                </div>
                            </div>
                        </div>
                        <div class="footer-top-item">
                            <h4>About</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem
                                nam,
                                unde
                                rem a accusamus iure recusandae tempore reprehenderit hic culpa incidunt,
                                sapiente
                                cum
                                sunt blanditiis iusto aperiam placeat reiciendis.</p>
                        </div>
                        <div class="footer-top-item">
                            <h4>Stay connected</h4>
                            <p><i class="fa fa-facebook-square" aria-hidden="true"></i>Facebook</p>
                            <p><i class="fa fa-instagram" aria-hidden="true"></i>Instragram</p>
                            <p><i class="fa fa-twitter-square" aria-hidden="true"></i>twitter</p>
                            <p><i class="fa fa-youtube-play" aria-hidden="true"></i>Youtube</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <P>Copyright © 2024 กองบริหารทรัพยากรบุคคล สำนักงานปลัดกระทรวงสาธารณสุข. All rights reserved.
                    <img src="" alt="กองบริหารทรัยยากรสาธารณสุข" width="30px" height="30px">
                </P>
            </div>
        </footer>

    </div>
</template>

<script>
export default {

    name: 'App',
    mounted() {

        $(document).ready(function () {
            $(".btn-hamburger").on("click", function () {
                $("nav ul").toggleClass("nav-active");
            });
        });
        // 🌟ส่วนเกี่ยวกับเรา🌟
        const aboutUsLink = document.getElementById('aboutUsLink');
        if (aboutUsLink) {
            aboutUsLink.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default link behavior
                const footer = document.getElementById('footer');
                if (footer) {
                    footer.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // 🌟ส่วนกลุ่มงาน🌟
        const dropdown = document.querySelector('.dropdown');
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        if (dropdown && dropdownToggle) {
            dropdownToggle.addEventListener('click', function (event) {
                event.preventDefault();
                dropdown.classList.toggle('active');
            });

            // Optional: Close dropdown if clicking outside of it
            document.addEventListener('click', function (event) {
                if (!dropdown.contains(event.target) && !dropdownToggle.contains(event.target)) {
                    dropdown.classList.remove('active');
                }
            });
        }
        // 🌟ส่วนเลื่อนการ์ด🌟
        const preSlButton = document.getElementById('pre-sl');
        const nextSlButton = document.getElementById('next-sl');
        if (preSlButton && nextSlButton) {
            preSlButton.addEventListener('click', function () {
                document.querySelector('.card-g').scrollBy({
                    left: -300, // Adjust scroll distance as needed
                    behavior: 'smooth'
                });
            });
            nextSlButton.addEventListener('click', function () {
                document.querySelector('.card-g').scrollBy({
                    left: 300, // Adjust scroll distance as needed
                    behavior: 'smooth'
                });
            });
        }
        const pretestButton = document.querySelector('.pretest-button');
            pretestButton.addEventListener('click', function () {
                if (confirm('เริ่มทำแบบทดสอบ?')) {
                    const url = 'https://docs.google.com/forms/d/e/1FAIpQLScoJNUnV_MbHECLVqiEKJIESK6C0vFrhqoWEJXa6lf2IX_N8Q/viewform?usp=sf_link';
                    const newTab = window.open(url, '_blank');
                    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
                        alert('โปรดอนุญาตให้เบราว์เซอร์เปิดหน้าต่างใหม่');
                    }
                }
            });
    }
    // document.getElementById("shareButton").addEventListener("click", function () {
    //     var shareOptions = document.getElementById("shareOptions");
    //     if (shareOptions.style.display === "block") {
    //       shareOptions.style.display = "none";
    //     } else {
    //       shareOptions.style.display = "block";

    //       // ปิดรายการแชร์เมื่อคลิกอื่นนอกจากปุ่มแชร์หรือรายการแชร์
    //       document.addEventListener("click", function (event) {
    //         if (event.target !== document.getElementById("shareButton") && !shareOptions.contains(event.target)) {
    //           shareOptions.style.display = "none";
    //         }
    //       });
    //     }
    //   });
    //   document.getElementById("copyLink").addEventListener("click", function () {
    //     alert("คัดลอกลิงค์แล้ว");
    //   });
    //   document.getElementById("shareFacebook").addEventListener("click", function () { alert("คัดลอกลิงค์แล้ว") });
    //   document.getElementById("shareTwitter").addEventListener("click", function () { alert("คัดลอกลิงค์แล้ว") });

    };
</script>
