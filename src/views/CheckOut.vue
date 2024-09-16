<template>
  <base-layout>
      <template  #content>
          <section clas="mb-5">
              <div class="row row-cols-3 mt-2 d-flex pt-2">
              <div class="col-1 p-0 ms-4 d-flex align-items-center">
                  <a href="/addtobag">
                      <button type="button" class="btn d-flex align-items-center backButton">
                      <ion-icon :src="chevBack"></ion-icon>
                  </button>
                  </a>
              </div>
              <slot name="header-content"/>
              <div class="col-7 ms-1 d-flex align-items-center">
                  <ion-label class="our-foods mulish">Order Summary</ion-label>
              </div>
          </div>
          </section>       
          <section>
              <section>
                <div class="container-fluid">
                  <div class="row row-cols-2">
                    <div class="col-11 p-0">
                        <div class="container-fluid p-0">
                          <div class="ms-3">
                            <div class="card-container">
                                <div class="card my-3">
                                    <div class="card-body">
                                        <p class="m-0 beverageTitle mulish">Chou Tzuyu</p>
                                        <p class="m-0 label beverageSelect mt-2">+63 912 345 6789</p>   
                                        <p class="m-0 label beverageSelect">chou.tzu-yu@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-1 p-0 d-flex align-items-center">
                      <ion-icon style="font-size: 40px; color: #ffbf2a;" :src="ellipsisVert"></ion-icon>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row row-cols-2">
                    <div class="col-11 p-0">
                      <div class="container-fluid p-0">
                        <div class="ms-3">
                          <div class="card-container">
                              <div class="card mb-3">
                                  <div class="card-body">
                                     <div class="row row-cols-2">
                                      <div class="col-10">
                                        <p class="m-0 beverageTitle mulish">My Home Address</p>
                                        <p class="m-0 label beverageSelect mt-2">No. 21 St. Agustin Street Brgy. De Jose</p>   
                                        <p class="m-0 label beverageSelect">Delgado City 2234 Philippines</p>
                                      </div>
                                      <div class="col-2">
                                        <div class="wrapper d-flex justify-content-end me-1">
                                            <input type="checkbox" class="radiobox" id="check">
                                            <label for="check" class="check"></label>
                                        </div>
                                      </div>
                                     </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-1 p-0 d-flex align-items-center">
                      <ion-icon style="font-size: 40px; color: #ffbf2a;" :src="ellipsisVert"></ion-icon>
                    </div>
                  </div>
                </div>
                <div class="container-fluid">
                  <div class="row row-cols-2">
                    <div class="col-11 p-0">
                      <div class="container-fluid p-0">
                        <div class="ms-3">
                          <div class="card-container">
                              <div class="card mb-3">
                                  <div class="card-body">
                                     <div class="row row-cols-2">
                                      <div class="col-10">
                                        <p class="m-0 beverageTitle mulish">Work/Office</p>
                                        <p class="m-0 label beverageSelect mt-2">3rd flr Aneyong Bldg Seareal St. Joaquin</p>   
                                        <p class="m-0 label beverageSelect">City 3456 Philippines</p>
                                      </div>
                                      <div class="col-2">
                                        <div class="wrapper d-flex justify-content-end me-1">
                                            <input type="checkbox" class="radiobox" id="check">
                                            <label for="check" class="check"></label>
                                        </div>
                                      </div>
                                     </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-1 p-0 d-flex align-items-center">
                      <ion-icon style="font-size: 40px; color: #ffbf2a;" :src="ellipsisVert"></ion-icon>
                    </div>
                  </div>
                </div>
              </section>
              <section class="mx-3">
                <p class="beverages mulish mx-0">Orders</p>
                  <div class="card-container mb-5">
                    <div class="row row-cols-2">
                     <div class="col-11 pe-0">
                      <div class="card">
                        <div class="container-fluid">
                          <div class="row row-cols-2 my-3">
                            <div class="col-4 m-0 p-0">
                              <div class="container-fluid d-flex align-items-center p-0 m-0">
                                <img class=" img-fluid" src="../../resources/steakveggiefries.png" alt="">
                              </div>
                            </div>
                            <div class="col-4 p-0 m-0">
                              <p class="m-0 mulish label w-100 mb-2">Steak Fries Veggies</p>
                                <p class="m-0 label2">1x Tomato Sauce</p>
                                <p class="m-0 label2">1x Regular Coke</p>
                                <p class="m-0 label2">1x Fried Chicken</p>
                            </div>
                          </div>
                          <div class="container-fluid p-1 mb-3">
                            <div class="row row-cols-2 p-0">
                              <div class="col-6 p-0">
                                <div class="container-fluid">
                                  <p class = "price2 m-0 mulish text-align-center">P 185</p>
                                </div>
                              </div>
                              <div class="col-6">
                                <div class="container-fluid m-0">
                                  <div class="row row-cols-3 d-flex align-items-center ms-1">
                                    <div class="col-4 p-0 d-flex align-items-center justify-content-center ">
                                      <div class="container-fluid d-flex justify-content-center">
                                        <button class="btn btn-secondary iterationbuttons d-flex align-items-center justify-content-center">
                                          <ion-icon :src = "removeProduct"></ion-icon>
                                        </button>
                                      </div>
                                    </div>
                                    <div class="col-4 p-0 d-flex align-items-center justify-content-center w-auto">
                                      <div class="container-fluid d-flex justify-content-center">
                                        <p class="m-0 mt-1 w-100 mulish">1</p>
                                    </div>
                                  </div>
                                  <div class="col-4 p-0 d-flex align-items-center justify-content-center ">
                                    <div class="container-fluid d-flex justify-content-center">
                                      <button class="btn btn-secondary iterationbuttons d-flex align-items-center justify-content-center ">
                                        <ion-icon :src = "addProduct"></ion-icon>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-1 p-0 d-flex align-items-center">
                    <ion-icon style="font-size: 40px; color: #ffbf2a;" :src="ellipsisVert"></ion-icon>
                  </div>
                </div>
              </div>
              </section>
              <section class="payment-option mx-3">
                <p class="beverages mulish mx-0 my-2">Payment Option</p>
                <div class="card-container">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row row-cols-2">
                        <div class="col-10">
                          <p class="m-0 beverageTitle mulish">Cash On Delivery</p>
                          <p class="m-0 label beverageSelect mt-2">Pay when you receive the order</p>   
                        </div>
                        <div class="col-2">
                          <div class="wrapper d-flex justify-content-end me-1">
                            <input type="checkbox" class="radiobox" id="check">
                            <label for="check" class="check"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-container">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row row-cols-2">
                        <div class="col-10">
                          <p class="m-0 beverageTitle mulish">Loyalty Points <span style="color: red;">(0 points)</span></p>
                          <p class="m-0 label beverageSelect mt-2">Pay using your earned loyalty points</p>   
                        </div>
                        <div class="col-2">
                          <div class="wrapper d-flex justify-content-end me-1">
                            <input type="checkbox" class="radiobox" id="check">
                            <label for="check" class="check"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-container">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row row-cols-2">
                        <div class="col-10">
                          <img src="../../resources/PayPal.png" style="width: 100px;" alt="" class="img-fluid">
                          <p class="m-0 label beverageSelect mt-2">A new tab will open to access your account</p>   
                        </div>
                        <div class="col-2">
                          <div class="wrapper d-flex justify-content-end me-1">
                            <input type="checkbox" class="radiobox" id="check">
                            <label for="check" class="check"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-container">
                  <div class="card mb-3">
                    <div class="card-body">
                      <div class="row row-cols-2">
                        <div class="col-10">
                          <img src="../../resources/paynamics.png" style="width: 100px;" alt="" class="img-fluid">
                          <p class="m-0 label beverageSelect mt-2">Choose paynamics available from you</p>   
                        </div>
                        <div class="col-2">
                          <div class="wrapper d-flex justify-content-end me-1">
                            <input type="checkbox" class="radiobox" id="check">
                            <label for="check" class="check"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div class="section">
                <div class="container-fill">
              </div>
              <div class="footer w-100 p-3">
                <div class="container-fluid">
                  <div class="row row-cols-2">
                    <div class="col-4 d-flex align-items-center p-0">
                      <div class="container-fluid p-0">
                        <p class="m-0 label mt-2">Grand Total:</p>   
                        <p class="m-0 beverageTitle mulish">P 244</p>
                      </div>
                    </div>
                    <div class="col-8 d-flex align-items-center py-1 pe-0">
                      <button class="btn btn-danger px-4 w-100 h-100 custom-text-size" @click="$router.push('/orderConfirmation')">Place Order</button>
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
import {IonCard, IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonSearchbar, IonCol, IonGrid, IonRow,  IonFab, IonFabButton, IonIcon, IonRadio, IonRadioGroup,IonModal} from '@ionic/vue';
import { ref } from 'vue';

const buttons = [
{ text: 'All' },
{ text: 'Breakfast' },
{ text: 'Chicken' },
{ text: 'Seafood' }
];

const modal = ref();

const dismiss = () => modal.value.$el.dismiss();

import {
ellipsisVertical,
chevronDownOutline,
chevronBackOutline,
checkmark,
heartOutline,
add,
remove,
} from "ionicons/icons";

const ellipsisVert = ellipsisVertical;

const check = checkmark;

const addProduct = add;

const chevronDown = chevronDownOutline;

const removeProduct = remove;

const heart = heartOutline;

const chevBack = chevronBackOutline;

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

const halfStarSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 19"><path fill="currentColor" d="M21.951 9.67a1 1 0 0 0-.807-.68l-5.699-.828l-2.548-5.164A.98.98 0 0 0 12 2.486v16.28l5.097 2.679a1 1 0 0 0 1.451-1.054l-.973-5.676l4.123-4.02a1 1 0 0 0 .253-1.025" opacity="0.5"/><path fill="currentColor" d="M11.103 2.998L8.555 8.162l-5.699.828a1 1 0 0 0-.554 1.706l4.123 4.019l-.973 5.676a1 1 0 0 0 1.45 1.054L12 18.765V2.503a1.03 1.03 0 0 0-.897.495"/></svg>';

function encodeHalfStarSvg(halfStarSvg){
const encodeData = btoa(halfStarSvg);
return `data:image/svg+xml;base64,${encodeData}`;
}

const halfStar = encodeHalfStarSvg(halfStarSvg);
</script>
<style>
  .btn-danger{
    background-color: #D61921;
    border-radius: 15px;
  }
  .container-addmore{
      margin-top: 22px;
      font-size: 15px;
      text-decoration: none;
  }
  .container-addmore a{
      color:#D61921;;
      text-decoration: none;
  }
  .checkoutButton{
      padding: 10px 30px;
      border-radius: 18px;
      font-size: 15px
  }
  .our-foods{
      font-size: 25px;
  }
  .bag{
      fill: #D61921;
  }
  .backButton{
      font-size: 20px;
      color:rgb(78, 77, 77);
      border-radius: 15px;
      background-color:rgb(197, 197, 197);
      padding: 8px 8px;
      box-shadow: 1px 2px 6px rgb(224, 224, 224);
  } 
  .heartButton{
      border-radius:20px;
  }
  .picture{
      position: relative;
  }
  .picture img{
      height: 229px;
  }
  .b{
      display: flex;
      justify-content: center;
  }
  .heartButton{
      position: absolute;
      left: 50%;
      transform: translate(233%, 452%);
      background-color:white;
      box-shadow: 1px 2px 6px rgb(224, 224, 224);
      --bs-btn-border-color: white;
  }
  .heartButton .hearticon{
      padding: 12px;
      color: #D61921;
      --ionicon-stroke-width: 50px;
      font-size: 20px;
  }
  .cardwithLike{
      display: flex;
      justify-content: center;
  }
  .star{
      color: #ffbf2a;
      font-size: 19px;
  }
  .title{
      font-size: 15px;
  }
  .price1{
      font-size: 25px;
      color: #D61921;
  }
  .iterationbuttons{
      padding: 6px 6px;
      border-radius: 10px;
      background-color: rgb(197, 197, 197);
      --bs-btn-border-color: rgb(197, 197, 197);
  }
  .iterationbuttons ion-icon{
      color: #D61921;
      --ionicon-stroke-width: 70px;
      font-size: 15px;
  }
  .beverages{
      font-size: 22px;
  }
  .beverages .our-foods{
      font-size: 20px;
  }
  .chevDown{
      font-size: 20px;
      color: #D61921;
  }
  .beverageTitle{
      font-size: 15px;
  }
  .beverageSelect{
      font-size: 15px;
      color: rgb(180, 180, 180);
  }
  .custom-beverage-buttons{
      border-radius: 15px;
      font-size: 14px;
  }
  .warning{
      color: rgb(255, 255, 255);
      --background-color: #ffbf2a;
      background: #ffbf2a;
  }
  .custom-beverage-buttons.white{
      --bs-btn-border-color: rgb(151, 151, 151);
  }
  .addons{
      margin: 0px 15px;
  }
  .addons .our-foods{
      font-size: 20px;
  }
  .price2{
      font-size: 18px;
      color: #D61921;
  }
  .radiobox{
      appearance: none;
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-content: center;
      border-radius: 50%;        
  }

  .radiobox:after{
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      content: "\f111";
      padding-top: 2px;
      font-size: 11px;
      color: #ffbf2a;
      display: none;
  }
  .radiobox:hover{
      background-color: #a5a5a5;
  }
  .radiobox:checked{
      background-color: white;
  }
  .radiobox:checked:after{
      display:block
  }
  .custon-float-button{
      --border-radius: 18px;
      width: 350px !important;
  }
  .container-fill{
      height: 100px;
  }
  ion-modal#example-modal {
  --width: fit-content;
  --min-width: 327px;
  --height: 305px;
  --border-radius: 15px;
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
}

ion-modal#example-modal h1 {
  margin: 20px 20px 10px 20px;
}

ion-modal#example-modal ion-icon {
  margin-right: 6px;

  width: 48px;
  height: 48px;

  padding: 4px 0;

  color: #aaaaaa;
}

ion-modal#example-modal .wrapper {
  margin-bottom: 10px;
}
.like{
  height: 100px;
  width: 100px;
}
.footer{
  background-color:white;
  position: fixed;
  bottom:0;
}
</style>