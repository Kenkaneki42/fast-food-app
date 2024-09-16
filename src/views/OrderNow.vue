<template>
    <base-layout>
        <template  #content>
            <div class="row row-cols-3 mt-2 d-flex ion-justify-content-around">
                <div class="col-auto">
                    <ion-buttons slot="start">
                          <ion-menu-button color="danger"><span><svg xmlns="http://www.w3.org/2000/svg" width="2em"  height="2em" viewBox="0 0 24 24" class="sc-ion-buttons-md"><path fill="none" stroke="crimson"  stroke-linecap="round" stroke-linejoin="round" stroke-width="3.1"  d="M5 15h14M5 9h14" class="sc-ion-buttons-md"/><circle cx="19" cy="9" r="2.7" fill="#ffc409"/></svg></span></ion-menu-button>
                      </ion-buttons>
                      <slot name="header-content"/>
                </div>
                <slot name="header-content"/>
                <div class="col-6 d-flex align-items-center">
                    <ion-label class="our-foods mulish">Our Foods</ion-label>
                </div>
                <div class="col-3 d-flex align-items-center justify-content-end">
                    <span class="bag"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 5 256 256"><path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-88 96a48.05 48.05 0 0 1-48-48a8 8 0 0 1 16 0a32 32 0 0 0 64 0a8 8 0 0 1 16 0a48.05 48.05 0 0 1-48 48"></path></svg></span>
                </div>
            </div>
            <div class="custom-container mx-2">
                <ion-searchbar class = "searchBar mulish" showCancelButton="focus" placeholder='try our new Steak Fries Veggies'></ion-searchbar>
                <!-- <form class="search-container">
                    <input type="text" id="search-bar" placeholder="What can I help you with today?">
                    <a><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"></a>
                </form> -->
            </div>
            <div class="filter-section">
                <div class="filterbuttons ms-2 d-flex" id="filterButtons">
                    <button class="custom-button mulish ms-2" type="button" v-for="button in buttons" :key="button.text" :class="[button.text === 'All' ? 'active' : '']" @click="activateButton(button)">
                        {{ button.text }}
                    </button>
                </div>
            </div>
            <div class="most-popular-section">
            <div class="custom-container mt-4 mb-3">
              <div class="row row-cols-2 row-cols-lg-4 mx-3a gy-2">
                <div class="col-6 col-lg-3 p-0">
                <a href="/addtobag" style="text-decoration:none; ">
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
                </a>
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
           <div class="most-popular-section mb-5">
            <div class="custom-container">
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
        </template>
    </base-layout>
</template>
<script setup>
import {IonCard, IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonSearchbar, IonCol, IonGrid, IonRow,  IonFab, IonFabButton, IonIcon} from '@ionic/vue';
import { ref } from 'vue';

const buttons = [
  { text: 'All' },
  { text: 'Breakfast' },
  { text: 'Chicken' },
  { text: 'Seafood' }
];

const activeButton = ref(buttons[0]);

function activateButton(button) {
  activeButton.value = button;
}

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

</script>
<style>
    .our-foods{
        font-size: 25px;
    }
    .bag{
        fill: #D61921;
    }
</style>