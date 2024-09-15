<template>
    <ion-page>
        <ion-content>
            <slot name="content"/>
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