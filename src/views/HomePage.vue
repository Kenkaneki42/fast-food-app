<template>
  <base-layout>
      <template #content>   
        <ion-content :fullscreen="true">
          <div>
            <ion-grid>
              <ion-row>
                <ion-col size="auto">
                  <ion-toolbar >
                      <ion-buttons slot="start">
                          <ion-menu-button color="danger"><span><svg xmlns="http://www.w3.org/2000/svg" width="2em"  height="2em" viewBox="0 0 24 24" class="sc-ion-buttons-md"><path fill="none" stroke="crimson"  stroke-linecap="round" stroke-linejoin="round" stroke-width="3.1"  d="M5 15h14M5 9h14" class="sc-ion-buttons-md"/><circle cx="19" cy="9" r="2.7" fill="#ffc409"/></svg></span></ion-menu-button>
                      </ion-buttons>
                      <slot name="header-content"/>
                  </ion-toolbar>
                </ion-col>
                <ion-col class="title">
                  <img class="homeCrown" src="../../resources/crown.png" alt="crown">
                  <ion-label class="homePoints mulish">0 Points</ion-label>
                  <ion-icon :src="chevForOutSvg"></ion-icon>
                </ion-col>
                <ion-col class = "profile-position" size="auto">
                  <img class="homeProfilePicture me-2" src="../../resources/ProfilePicture.jpg" alt="My Photo" />
                </ion-col>
              </ion-row>
            </ion-grid>
          </div>
          <ion-grid>
            <ion-row>
              <ion-col class="p-0" size="auto">
                <img class = "logo" src="../../resources/HomeIcon.png" alt="">
              </ion-col>
              <ion-col>
                <p class = "greetings mulish">Anneoyong Chou!</p>
                <h5 class = "greetings2 mulish me-4" >What do you want to eat?</h5>
              </ion-col>
            </ion-row>
           </ion-grid>
              <ion-searchbar class = "searchBar mulish" showCancelButton="focus" placeholder='try our new Steak Fries Veggies'></ion-searchbar>
           <div>
            <ion-grid class="grid">
              <ion-row class="row">
                <ion-col class = "col-8">
                  <h3 class="custom-text-primary mulish">Special Offers!</h3>
                </ion-col>
                <ion-col class="col-4 custom-col-2">
                  <ion-label class="view-all mulish">View All</ion-label>
                  <ion-icon :src="chevForOutSvg"></ion-icon>
                </ion-col>
              </ion-row>
            </ion-grid>
           </div>
           <div class="ticket-flyers">
            <div class="items">
              <img class = "bannerImage1" src="../../resources/frieschickensauce.jpg">
            </div>
            <div class="items">
              <img src="../../resources/specialFriedChicken.jpg" alt="" class="bannerImage2">
            </div>
            <div class="items">
              <img class = "bannerImage1" src="../../resources/frieschickensauce.jpg">
            </div>
            <div class="items">
              <img src="../../resources/specialFriedChicken.jpg" alt="" class="bannerImage2">
            </div>
           </div>
           <div class = "text-margin">
            <h3 class="custom-text-primary mulish">Category</h3>
           </div>
           <div class="food-category">
            <figure class="food"><img src="../../resources/friedChickenShowcase.jpg" alt="profile-sample2">
              <figcaption>
                <p class="title1">Chicken</p>
                <p class="title2">9 Recipes</p>
              </figcaption><a href="#"></a>
            </figure>
            <figure class="food"><img src="../../resources/Seafood.jpg" alt="profile-sample7"/>
              <figcaption>
                <p class="title1">Seafoods</p>
                <p class="title2">6 Recipes</p>
              </figcaption><a href="#"></a>
            </figure>
            <figure class="food"><img src="../../resources/friedChickenShowcase.jpg" alt="profile-sample2">
              <figcaption>
                <p class="title1">Chicken</p>
                <p class="title2">9 Recipes</p>
              </figcaption><a href="#"></a>
            </figure>
            <figure class="food"><img src="../../resources/Seafood.jpg" alt="profile-sample7"/>
              <figcaption>
                <p class="title1">Seafoods</p>
                <p class="title2">6 Recipes</p>
              </figcaption><a href="#"></a>
            </figure>
           </div>
           <div class = "text-margin mt-4 mb-2">
            <h3 class="custom-text-primary mulish ">What's New</h3>
           </div>
           <div class="whats-new-section ">
            <img src="../../resources/whatsnew.jpg" alt="">
           </div>
           <div class = "text-margin mt-4 mb-2">
            <h3 class="custom-text-primary mulish">Most Popular</h3>
           </div>
           <div class="most-popular-section">
            <div class="custom-container mb-5 pb-5">
              <div class="row row-cols-2 row-cols-lg-4 mx-3a gy-2">
                <div class="col-6 col-lg-3 p-0">
                  <div class="card mx-1 d-flex justify-content-center">
                    <div class="image-position">
                      <img src="../../resources/steakveggiefries.png" alt="">
                    </div>
                    <div class="card-description ps-3 product-title mulish">
                      Steak Veggie Fries
                    </div>
                    <div class="card-description ps-3 product-description mulish">
                      Meat
                    </div>
                    <div class="price-ratings ps-3">
                      <div class="row row-cols-2 pb-3 mt-3 mb-2">
                        <div class="col-6 d-flex align-items-center">
                          <h5 class ="text-danger price mulish m-0 p-0 ">P 175</h5>
                        </div>
                        <div class="col-6 d-flex align-items-center">
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="halfstar" :src="halfStar"></ion-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 p-0">
                  <div class="card mx-1 d-flex justify-content-center">
                    <div class="image-position">
                      <img src="../../resources/chickensalad.png" alt="">
                    </div>
                    <div class="card-description ps-3 product-title mulish">
                      Chicken Salad
                    </div>
                    <div class="card-description ps-3 product-description mulish">
                      Chicken
                    </div>
                    <div class="price-ratings ps-3">
                      <div class="row row-cols-2 pb-3 mt-3 mb-2">
                        <div class="col-6 d-flex align-items-center">
                          <h5 class ="text-danger price mulish m-0 p-0 ">P 172</h5>
                        </div>
                        <div class="col-6 d-flex align-items-center">
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="halfstar" :src="halfStar"></ion-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 p-0">
                  <div class="card mx-1 d-flex justify-content-center text-truncate">
                    <div class="image-position">
                      <img src="../../resources/icecream.png" alt="">
                    </div>
                    <div class="card-description ps-3 product-title mulish text-truncate">
                      Sorvetes Primavera Indaiatuba
                    </div>
                    <div class="card-description ps-3 product-description mulish">
                      Dessert
                    </div>
                    <div class="price-ratings ps-3">
                      <div class="row row-cols-2 pb-3 mt-3 mb-2">
                        <div class="col-6 d-flex align-items-center">
                          <h5 class ="text-danger price mulish m-0 p-0 ">P 185</h5>
                        </div>
                        <div class="col-6 d-flex align-items-center">
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="halfstar" :src="halfStar"></ion-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 col-lg-3 p-0">
                  <div class="card mx-1 d-flex justify-content-center">
                    <div class="image-position">
                      <img src="../../resources/tenderloin.png" alt="">
                    </div>
                    <div class="card-description ps-3 product-title mulish">
                      Fried Chicken
                    </div>
                    <div class="card-description ps-3 product-description mulish">
                      Chicken
                    </div>
                    <div class="price-ratings ps-3">
                      <div class="row row-cols-2 pb-3 mt-3 mb-2">
                        <div class="col-6 d-flex align-items-center">
                          <h5 class ="text-danger price mulish m-0 p-0 ">P 175</h5>
                        </div>
                        <div class="col-6 d-flex align-items-center">
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="fullstar" :src="fullStar"></ion-icon>
                          <ion-icon class="halfstar" :src="halfStar"></ion-icon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </div>
            <ion-fab slot="fixed" vertical="bottom" horizontal="end">
              <ion-button class="mx-2 my-2 custom-color" @click="$router.push('/ordernow')">
                <div class="px-3 py-3 custom-text-size">Order Now!</div>
              </ion-button>
            </ion-fab>
        </ion-content>
      </template>
  </base-layout>
</template>

<script setup>
import {IonCard, IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonSearchbar, IonCol, IonGrid, IonRow,  IonFab, IonFabButton } from '@ionic/vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const chevForOut = '<svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="0.5em" viewBox="-2 -1 13 14" class="s-ion-icon"><path fill="crimson" d="M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6L4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0"></path></svg>';

function encodeChevForOut(chevForOut){
  const encodeData = btoa(chevForOut);
  return `data:image/svg+xml;base64,${encodeData}`;
}

const chevForOutSvg = encodeChevForOut(chevForOut);

const fullStarSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#ffbf2a" stroke="#ffbf2a" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.587 8.236l2.598-5.232a.911.911 0 0 1 1.63 0l2.598 5.232l5.808.844a.902.902 0 0 1 .503 1.542l-4.202 4.07l.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75l-4.202-4.07a.902.902 0 0 1 .503-1.54z"/></svg>';

function encodefullStarSvg(fullStarSvg){
  const encodeData = btoa(fullStarSvg);
  return `data:image/svg+xml;base64,${encodeData}`;
}

const fullStar = encodefullStarSvg(fullStarSvg);

const halfStarSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>';

function encodeHalfStarSvg(halfStarSvg){
  const encodeData = btoa(halfStarSvg);
  return `data:image/svg+xml;base64,${encodeData}`;
}

const halfStar = encodeHalfStarSvg(halfStarSvg);
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
.greetings2{
  font-size: 1.5rem !important;
  margin-top: -4px;
  margin-bottom: -8px;
}
.title{
  display:flex;
  align-items:center;
}
.homeCrown{
  margin-right: 20px;
  margin-left: 18px !important; 
  height: 25px;
  width: 25px;
}
.profile-position{
  display:flex;
  justify-content:end;
  align-items: center;
}
.homeProfilePicture{
  height: 4.5vh;
  width: 4.5vh;
  border-radius: 50%;
}
.homePoints{
  font-size:15px;
  color: rgb(10, 10, 10);
    padding-right: 5px;
}

.custom-text-primary{
  margin-top: 5px !important;
  margin-left: 15px;
  margin-bottom: 0px !important;
  font-size: 19px;
}
.text-margin{
  margin-left:13px;
  margin-top: 20px;
}
.custom-col-2{
  display: flex;
  justify-content: end;
  align-items: center;
  top: 2px;
  right: 14px
}

</style>
