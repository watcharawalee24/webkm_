
<template>
    <div class="navbar navbar-light bg-light ">
      <h4><a class="navbar-brand">คลังความรู้</a></h4>
  
      <div class="search_two">
        <div class="input-searchh">
          <div class="icon">
            <span class="fa fa-search"></span>
          </div>
          <input type="search" name="search" id="" placeholder="ค้นหาเรื่องที่ต้องการ">
        </div>
      </div>
    </div>
  
  
    <!-- 🏳️‍🌈ส่วนแสดง video🏳️‍🌈 -->
    <div class="headerv">
          <h3>การพัฒนาบุคลากรข้าราชการไทย</h3>
          <p><i class='fas fa-book-open' style="color: goldenrod;"></i> หลักการจัดโครงสร้างการบริหารราชการไทย</p>
         </div>
        <div class="video" id="videoContainer">
            <video id="myVideo" :src="videoUrl"  width="full" height="600" poster="/img/PosterV.png" controls>
                <!-- <source src="/assets/video/v1.mp4" type="video/mp4"> -->
            </video>
            <!-- <i class="fas fa-play play-pause" id="playPauseIcon"></i> -->
        </div>
    <div class="bod">
      <h3>บทที่ 1 </h3>
      <p>พัฒนาบุคลากรข้าราชการไทย</p>
    </div>
    <div class="button-container">
      <button class="pretest-button">
      <i class="far fa-file-alt"></i><span class="hover-text">แบบทดสอบก่อนเรียน</span>
    </button>
    <div class="share-container">
      <button id="shareButton" style="font-size: small;"><i class="fas fa-share"></i> แชร์</button>
      <ul id="shareOptions" class="share-options">
        <li><a href="#" id="copyLink"><i class="fas fa-copy"></i> คัดลอกลิงค์</a></li>
        <li><a href="#" id="shareFacebook"><i class="fab fa-facebook-square"></i> แชร์ไปยังเฟสบุ๊ค</a></li>
        <li><a href="#" id="shareTwitter"><i class="fab fa-twitter"></i> แชร์ไปยังทวิตเตอร์</a></li>
      </ul>
    </div>
  </div>
    
  
  
  
  
  
  
    <!-- 🍓ส่วน List video 🍓-->
    <div class="container_VD">
      <div class="video-item" v-for="item in items">
        <div class="thumbnail">
          <div class="img_VD">
            <img :src="'/img/' + item.image" alt="">
            <!-- <img src="/img/cardKL1.jpg" alt=""> -->
          </div>
        </div>
        <div class="details">
          <h3>{{ item.subject }}</h3>
          <h7>{{ item.name }}</h7>
          <p>กลุ่มงาน บค.การรับข้าราชการใหม่</p>
          <p><a href="javascript:void(0);" @click="playVideo(item.video)">เข้าชม</a></p>
        </div>
      </div>
    </div>
  
  
   
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const items = ref(
  [
    { id: '1', subject: 'บทที่ 1', name: 'ข้าราชการใหม่1', image: 'cardKL1.jpg', video: 'v1.mp4'},
    { id: '2', subject: 'บทที่ 2', name: 'ข้าราชการใหม่2', image: 'cardKL2.jpg', video: 'v2.mp4' },
    { id: '3', subject: 'บทที่ 3', name: 'ข้าราชการใหม่3', image: 'cardKL3.jpg', video: 'v2.mp4' },
  
  ])
  
  const videoUrl = ref("/video/v1.mp4");
  
  // Function to change video URL
  const playVideo = (videoSrc: string) => {
    videoUrl.value = "/video/" + videoSrc;
  };
  
  </script>
  