<template >
    <base-layout>
        <template  #content>
            <section>
              <div class="container-fluid d-flex justify-content-center mt-5 mb-3">
                <img src="../../resources/like.png" alt="" class="img-fluid" style="height: 200px; width: 200px;">
              </div>
              <h2 class="mulish text-center">Order Received!</h2>
              <p class="description text-center mx-3 mulish-500 mt-3"> Your order <span style="color: #D61921">No 19049585</span> has successfully take and now being processed. Kindly wait for our notification regarding your order.
              </p>
            </section>
            <section class="footer w-100">
              <div class="container d-flex justify-content-center">
                <button class="btn btn-danger checkoutButton w-100 py-3">Track Order
                </button>
              </div>
              <div class="container d-flex justify-content-center">
                <div class="container-addmore text-center pb-4">
                  <a class="mulish" href="/home">Back to Home</a>
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