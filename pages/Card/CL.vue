<template>


    <!-- 🎯หน้ากลุ่มงาน🎯  -->
  
    <div class="navbar1 navbar-light bg-light">
      <div class="navbar-content1">
        <h4 class="navbar-brand1"><a>กลุ่มงานอัตรากำลัง</a></h4>
        <div class="Group">
          <p>โลกแห่งการเรียนรู้ ไม่มีวันจบสิ้น ยิ่งเรียนยิ่งรู้ ยิ่งเพิ่มพลังทางปัญญา</p>
        </div>
        <div class="image-navbar-brand1">
          <img src="/img/PG1.png" alt="E-Learning KM">
        </div>
      </div>
    </div>
  
  
    <!-- 🎯สร้างการ์ดสำหรับคลังความรู้🎯 -->
    <!-- ส่วนบน -->
    <section class="courses">
      <div class="container">
        <h2><i class="fa fa-book" style="font-size:30px;"></i> หลักสูตรการฝึกอบรมงานทั่วไป </h2>
        <p>รวมเนื้อหางานของกลุ่ม "อัตรากำลัง" พร้อมแบบฝึกก่อนเรียนทดสอบประสิทธิภาพก่อนเรียน</p>
  
        <div id="app">
          <div class="All">
            <h2 v-if="!showAllItems">
              <i class="fa fa-reorder"></i> เนื้อหา
              <a href="#" class="see-more" @click.prevent="toggleCards">ดูเพิ่มเติม <i class="fa fa-angle-right"></i></a>
            </h2>
            <h2 v-else>
              <i class="fa fa-angle-down"></i> เนื้อหาทั้งหมด
              <a href="#" class="see-more" @click.prevent="toggleCards">ย้อนกลับ <i class="fa fa-angle-down"></i></a>
            </h2>
          </div>
          <!--       
  {{ store.count }}
  <div @click="store.increment">aaa</div> -->
  
          <!-- ส่วนแผ่นการ์ด -->
          <div class="courses-grid">
            <div class="course-card" data-toggle="modal" data-target="#myModal" v-for="item in displayedItems "
              :key="item.id" @click="modalItem = item.modalItem">
              <div class="img">
                <img :src="'/img/' + item.image" alt="">
              </div>
              <h3>{{ item.subject }}</h3>
              <p>{{ item.name }}</p>
              <div><a href="#" @click.prevent="goToLV(item.id)"class="btn">เข้าชม</a></div>
  
            </div>
  
            <!-- ส่วนหน้าต่างย่อยในการ์ด -->
            <div class="modal" id="myModal">
              <div class="modal-dialog">
                <div class="modal-content">
  
                  <!-- ส่วนหน้าต่างย่อยในการ์ด (ส่วนบน)  -->
                  <div class="modal-header">
                    <img src="/img/haederCon.png" alt="Header Image">
                    <h4 class="modal-title">{{ modalItem.name }}</h4>
                    <i class="fa fa-close close-icon" data-dismiss="modal"></i>
                  </div>
                  <div class="modal-body">
                    <div class="section">
                      <div class="section-title">
                        <i class="fa fa-book"></i>
                        <h5>{{ modalItem.title }}</h5>
                      </div>
                      <div class="section-content">
                        <p>{{ modalItem.content }}</p>
                      </div>
                    </div>
                    <div class="section">
                      <div class="section-title">
                        <i class="fa fa-users"></i>
                        <h5>{{ modalItem.teacher }}</h5>
                      </div>
                      <div class="section-content">
                        <p>{{ modalItem.teacher_name }}</p>
                      </div>
                    </div>
                    <div class="section">
                      <div class="section-title">
                        <i class="fa fa-pencil"></i>
                        <h5>{{ modalItem.toppic }}</h5>
                      </div>
                      <div class="section-content">
                        <ul>
                          <li v-for="sub in modalItem.toppic_sub" :key="sub">{{ sub }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- ส่วนหน้าต่างย่อยในการ์ด ส่วนล่าง (btn เปิด-ปิด)  -->
                  <div class="modal-footer">
                    <a href="#">
                      <button type="button" class="btn btn-success">Open</button>
                    </a>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  
  </template>
  
  
  
  <script setup lang="ts">

  
  // definePageMeta({
  //   layout: 'defaultcl'
  // })
  const items = ref(
    [
      {
        id: '1',
        subject: 'การทำงบประมานของกลุ่มเงินเดือน',
        name: 'งบประมาณข้าราชการ',
        image: 'cardKL1.jpg',
        modalItem: {
          name: 'งบประมาณข้าราชการ',
          title: 'เป้าหมายการเรียนรู้',
          content: '1. เพื่อให้เรียนรู้จากการฝึกปฏิบัติในการวางแผนกลยุทธ์อันเข้าใจสามารถวิเคราะห์หลักการและแนวทางการวางแผนกลยุทธ์และมีทักษะในการวางแผนกลยุทธ์ในการบริหารงานของส่วนราชการ',
          teacher: 'วิทยากร',
          teacher_name: 'ภัทรภร ประสารแสง',
          toppic: 'ประเด็นความรู้',
          toppic_sub: [
            'แนะนำรายวิชา',
            'หลักการจัดโครงสร้างการบริหารราชการไทย',
            'โครงสร้างระบบราชการตามรัฐธรรมนูญแห่งราชอาณาจักรไทย',
            'อำนาจและหน้าที่ของการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น (ต่อ)',
  
          ]
  
        },
      },
      {
        id: '2',
        subject: 'การทำงบประมานของกลุ่มเงินเดือน',
        name: 'งบประมาณข้าราชการ',
        image: 'cardKL2.jpg',
        modalItem: {
          name: 'งบประมาณข้าราชการ',
          title: 'เป้าหมายการเรียนรู้',
          content: '1. เพื่อให้เรียนรู้จากการฝึกปฏิบัติในการวางแผนกลยุทธ์อันเข้าใจสามารถวิเคราะห์หลักการและแนวทางการวางแผนกลยุทธ์และมีทักษะในการวางแผนกลยุทธ์ในการบริหารงานของส่วนราชการ',
          teacher: 'วิทยากร',
          teacher_name: 'ภัทรภร ประสารแสง',
          toppic: 'ประเด็นความรู้',
          toppic_sub: [
            'แนะนำรายวิชา',
            'หลักการจัดโครงสร้างการบริหารราชการไทย',
            'โครงสร้างระบบราชการตามรัฐธรรมนูญแห่งราชอาณาจักรไทย',
            'อำนาจและหน้าที่ของการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น ',
  
          ]
  
        }
  
      },
      {
        id: '3',
        subject: 'การทำงบประมานของกลุ่มเงินเดือน',
        name: 'งบประมาณข้าราชการ',
        image: 'cardKL3.jpg',
        modalItem: {
          name: 'งบประมาณข้าราชการ',
          title: 'เป้าหมายการเรียนรู้',
          content: '1. เพื่อให้เรียนรู้จากการฝึกปฏิบัติในการวางแผนกลยุทธ์อันเข้าใจสามารถวิเคราะห์หลักการและแนวทางการวางแผนกลยุทธ์และมีทักษะในการวางแผนกลยุทธ์ในการบริหารงานของส่วนราชการ',
          teacher: 'วิทยากร',
          teacher_name: 'ภัทรภร ประสารแสง',
          toppic: 'ประเด็นความรู้',
          toppic_sub: [
            'แนะนำรายวิชา',
            'หลักการจัดโครงสร้างการบริหารราชการไทย',
            'โครงสร้างระบบราชการตามรัฐธรรมนูญแห่งราชอาณาจักรไทย',
            'อำนาจและหน้าที่ของการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
  
  
          ]
  
        }
      },
      {
        id: '4',
        subject: 'การทำงบประมานของกลุ่มเงินเดือน',
        name: 'งบประมาณข้าราชการ',
        image: 'cardKL1.jpg',
        modalItem: {
          name: 'งบประมาณข้าราชการ',
          title: 'เป้าหมายการเรียนรู้',
          content: '1. เพื่อให้เรียนรู้จากการฝึกปฏิบัติในการวางแผนกลยุทธ์อันเข้าใจสามารถวิเคราะห์หลักการและแนวทางการวางแผนกลยุทธ์และมีทักษะในการวางแผนกลยุทธ์ในการบริหารงานของส่วนราชการ',
          teacher: 'วิทยากร',
          teacher_name: 'ภัทรภร ประสารแสง',
          toppic: 'ประเด็นความรู้',
          toppic_sub: [
            'แนะนำรายวิชา',
            'หลักการจัดโครงสร้างการบริหารราชการไทย',
            'โครงสร้างระบบราชการตามรัฐธรรมนูญแห่งราชอาณาจักรไทย',
            'อำนาจและหน้าที่ของการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น (ต่อ)',
  
          ]
  
        },
      },
      {
        id: '5',
        subject: 'การทำงบประมานของกลุ่มเงินเดือน',
        name: 'งบประมาณข้าราชการ',
        image: 'cardKL1.jpg',
        modalItem: {
          name: 'งบประมาณข้าราชการ',
          title: 'เป้าหมายการเรียนรู้',
          content: '1. เพื่อให้เรียนรู้จากการฝึกปฏิบัติในการวางแผนกลยุทธ์อันเข้าใจสามารถวิเคราะห์หลักการและแนวทางการวางแผนกลยุทธ์และมีทักษะในการวางแผนกลยุทธ์ในการบริหารงานของส่วนราชการ',
          teacher: 'วิทยากร',
          teacher_name: 'ภัทรภร ประสารแสง',
          toppic: 'ประเด็นความรู้',
          toppic_sub: [
            'แนะนำรายวิชา',
            'หลักการจัดโครงสร้างการบริหารราชการไทย',
            'โครงสร้างระบบราชการตามรัฐธรรมนูญแห่งราชอาณาจักรไทย',
            'อำนาจและหน้าที่ของการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น (ต่อ)',
  
          ]
  
        },
      },
      {
        id: '6',
        subject: 'การทำงบประมานของกลุ่มเงินเดือน',
        name: 'งบประมาณข้าราชการ',
        image: 'cardKL1.jpg',
        modalItem: {
          name: 'งบประมาณข้าราชการ',
          title: 'เป้าหมายการเรียนรู้',
          content: '1. เพื่อให้เรียนรู้จากการฝึกปฏิบัติในการวางแผนกลยุทธ์อันเข้าใจสามารถวิเคราะห์หลักการและแนวทางการวางแผนกลยุทธ์และมีทักษะในการวางแผนกลยุทธ์ในการบริหารงานของส่วนราชการ',
          teacher: 'วิทยากร',
          teacher_name: 'ภัทรภร ประสารแสง',
          toppic: 'ประเด็นความรู้',
          toppic_sub: [
            'แนะนำรายวิชา',
            'หลักการจัดโครงสร้างการบริหารราชการไทย',
            'โครงสร้างระบบราชการตามรัฐธรรมนูญแห่งราชอาณาจักรไทย',
            'อำนาจและหน้าที่ของการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น (ต่อ)',
  
          ]
  
        },
      },
      {
        id: '7',
        subject: 'การทำงบประมานของกลุ่มเงินเดือน',
        name: 'งบประมาณข้าราชการ',
        image: 'cardKL1.jpg',
        modalItem: {
          name: 'งบประมาณข้าราชการ',
          title: 'เป้าหมายการเรียนรู้',
          content: '1. เพื่อให้เรียนรู้จากการฝึกปฏิบัติในการวางแผนกลยุทธ์อันเข้าใจสามารถวิเคราะห์หลักการและแนวทางการวางแผนกลยุทธ์และมีทักษะในการวางแผนกลยุทธ์ในการบริหารงานของส่วนราชการ',
          teacher: 'วิทยากร',
          teacher_name: 'ภัทรภร ประสารแสง',
          toppic: 'ประเด็นความรู้',
          toppic_sub: [
            'แนะนำรายวิชา',
            'หลักการจัดโครงสร้างการบริหารราชการไทย',
            'โครงสร้างระบบราชการตามรัฐธรรมนูญแห่งราชอาณาจักรไทย',
            'อำนาจและหน้าที่ของการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น',
            'ความสัมพันธ์ระหว่างการบริหารราชการส่วนกลาง ส่วนภูมิภาค และส่วนท้องถิ่น (ต่อ)',
  
          ]
  
        },
      },
  
  
    ]);
  
  const modalItem = ref({
    name: '',
    title: '',
    content: '',
    teacher: '',
    teacher_name: '',
    toppic: '',
    toppic_sub: [
      '',
  
    ]
  
  });
  
  //สคริปต์ย่อ-เก็บการ์ด
  const showAllItems = ref(false);
  const displayedItems = ref(items.value.slice(0, 4));
  const toggleCards = () => {
    showAllItems.value = !showAllItems.value;
    if (showAllItems.value) {
      displayedItems.value = items.value;
    } else {
      displayedItems.value = items.value.slice(0, 4);
    }
  };
  
  
  const goToLV = (id: string) => {
    if (id === '1') {
      window.location.href = '/ListVD/LV'; // เปลี่ยนไปที่หน้า testV2 ถ้า id เป็น '1'
    } else if (id === '2') {
      window.location.href = '/test'; // เปลี่ยนไปที่หน้า G1 ถ้า id เป็น '2'
    }
  };
  
  
  </script>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //
  // const route = useRoute();
  
  // When accessing /posts/1, route.params.id will be 1
  // console.log(route.params.id);
  
  // let videoUrl = "/video/v" + route.params.id + ".mp4";
  // console.log(videoUrl);
  
  // const visibleItems = computed(() => {
  // return isShowAll ? items.value : items.value.slice(0, 1);
  // })
  
  // modalItem: {},
  // showAll: false
  // }
  // },
  // computed: {
  // visibleItems() {
  // return this.showAll ? this.items : this.items.slice(0, 4);
  // }
  // },
  // methods: {
  
  
  // showAll() {
  // this.showAll = !this.showAll;
  // const seeMoreLink = document.querySelector('.see-more');
  // seeMoreLink.innerHTML = this.showAll ? 'ย้อนกลับ <i class="fas fa-angle-down"></i>' : 'ดูเพิ่มเติม <i
    class="fa fa-angle-right"></i>';
  // }
  // }
  // }