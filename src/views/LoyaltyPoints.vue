<template >
    <base-layout>
        <template  #content>
            <div class="row row-cols-2 mt-2">
                <div class="col-auto  ms-2">
                    <ion-buttons slot="start">
                          <ion-menu-button color="danger"><span><svg xmlns="http://www.w3.org/2000/svg" width="2em"  height="2em" viewBox="0 0 24 24" class="sc-ion-buttons-md"><path fill="none" stroke="crimson"  stroke-linecap="round" stroke-linejoin="round" stroke-width="3.1"  d="M5 15h14M5 9h14" class="sc-ion-buttons-md"/><circle cx="19" cy="9" r="2.7" fill="#ffc409"/></svg></span></ion-menu-button>
                      </ion-buttons>
                      <slot name="header-content"/>
                </div>
                <slot name="header-content"/>
                <div class="col-6 d-flex align-items-center">
                    <ion-label class="our-foods mulish">Loyalty Points</ion-label>
                </div>
            </div>
            <section>
              <div class="container mx-2 pt-4">
                <div class="row row-cols-3 w-100">
                  <div class="col-2 p-0 d-flex align-items-center">
                    <img class="loyaltyCrown mx-1" src="../../resources/crown.png" alt="crown">
                  </div>
                  <div class="col-7 p-0 d-flex align-items-center" >
                    <ion-label class="tier mulish w-100 px-4 ">Beginner Tier</ion-label>
                  </div>
                  <div class="col-2 p-0 d-flex align-items-center justify-content-center w-25">
                    <ion-label class="view-all mulish w-100 d-flex align-items-center justify-content-center">View All</ion-label>
                    <ion-icon class="d-flex align-items-center justify-content-center" :src="chevForOutSvg1"></ion-icon>
                  </div>
                </div>
              </div>
              <p class="m-3 description">Earn points by purchasing from our store. Vestibulum ante ipsum primis in faubicus orci luctus et.</p>
              <div class="radialcontainer my-5">
                <div class="indicator">
                  <div class ="d-flex justify-content-center">
                    <div class="centr">
                    </div>
                    <div class="centrV"></div>
                    <span class="mulish">0 / 160 </span>
                  </div>
                </div>
              </div>
              <div class="container mx-2">
                <div class="row row-cols-2 w-100">
                  <div class="col-6 p-0 d-flex align-items-center" >
                    <ion-label class="rewards mulish w-100 px-2">Rewards</ion-label>
                  </div>
                  <div class="col-5 p-0 d-flex align-items-center justify-content-end">
                    <p class="view-all mulish m-0 d-flex align-items-center">How it Works</p>
                  </div>
                  <div class="col-1 p-0 d-flex align-items-center justify-content-end">
                    <ion-icon :src="chevForOutSvg1"></ion-icon>
                  </div>
                </div>
              </div>
              <div class="filter-section">
                <div class="filterbuttons ms-2" id="filterButtons">
                    <button class="custom-button mulish mt-3" type="button" v-for="button in buttons" :key="button.text" :class="[button.text === 'All' ? 'active' : '']" @click="activateButton(button)">
                        {{ button.text }}
                    </button>
                </div>
            </div>
            <div class="card-container">
              <div class="card mx-3 my-3 ">
                <div class="row row-cols-2">
                  <div class="col-3 p-0 ms-2">
                    <div class="custom-img d-flex align-items-center ms-1 my-2">
                        <img src="../../resources/steakveggiefries.png" alt="">
                    </div>
                  </div>
                  <div class="col-7 ms-3 p-0 py-3">
                    <p class="m-0 mulish label">Steak Veggie Fries</p>
                    <p class="m-0 label2 mb-2">Meat</p>
                    <div class="row row-cols-3">
                      <div class="col-2 p-0">
                        <img class="tierCrown" src="../../resources/crown.png" alt="crown">
                      </div>
                      <div class="col-7 p-0" >
                        <ion-label class="custom-points mulish w-100">20 points</ion-label>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
            </div>
            </section>
        </template>
    </base-layout>
</template>

<script setup>
import {IonCard, IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonSearchbar, IonCol, IonGrid, IonRow,  IonFab, IonFabButton } from '@ionic/vue';

const chevForOut1 = '<svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="0.5em" viewBox="0 0 14 14" class="s-ion-icon"><path fill="crimson" d="M4.47 2.22a.75.75 0 0 0 0 1.06L7.19 6L4.47 8.72a.75.75 0 0 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06L5.53 2.22a.75.75 0 0 0-1.06 0"></path></svg>';

function encodeChevForOut(chevForOut1){
  const encodeData = btoa(chevForOut1);
  return `data:image/svg+xml;base64,${encodeData}`;
}
import { ref } from 'vue';

const buttons = [
  { text: 'All' },
  { text: 'Beginner' },
  { text: 'Intermediate' },
  { text: 'Loyal' }
];

const activeButton = ref(buttons[0]);

function activateButton(button) {
  activeButton.value = button;
}

const chevForOutSvg1 = encodeChevForOut(chevForOut1);
</script>

<style scope>
  .view-all{
    font-size: 14px;    
  }
  .loyaltyCrown{
    height: 50px;
    width: 50px;
  }
  .tier{
    font-size:15px;
  }
  .description{
    font-size:14px;
    color: #90979D;
  }
  .rewards{
    font-size:20px;
  }
  .custom-img{
    width: 100px;
    height: 80px;
  }
  .custom-img img{
    width: 100px;
    height: 70px;
  }
  .label{
    font-size: 14px;
  }
  .label2{
    font-size: 12px;
  }
  .tierCrown{
    height: 20px;
    width: 23px;
    margin-left: 10px;
  }
  .custom-points{
    font-size: 16px;
    color: #D61921;
  }
</style>