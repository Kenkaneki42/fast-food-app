<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="danger"><span><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 21 20" class="sc-ion-buttons-md"><path fill="none" stroke="crimson" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.1" d="M5 15h14M5 9h14" class="sc-ion-buttons-md"></path></svg></span></ion-menu-button>
                </ion-buttons>

                <slot name="header-content"/>
                
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
import {IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
export default {
    props: ['pageTitle'],
    components:{
        IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
    }
}
</script>