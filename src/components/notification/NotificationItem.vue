<template>
    <div class="notifications-item"><img
            :src="notification.src"
            alt="img">
        <div class="text">
            <p>{{notification.notificationMessage}}</p>
        </div>
    </div>
</template>
<script>
    export default {   
        name: "NotificationItem", 
        data(){
            return {
                ImagePaths : new Map([
                    ["New Product" , "https://media.istockphoto.com/vectors/male-hand-holding-megaphone-with-new-product-speech-bubble-banner-vector-id1154954910?k=6&m=1154954910&s=612x612&w=0&h=uG8AstGU1do53zDialj0cpfU4uiR5rs6Ee0UTQ8d1MQ="],
                    ["New Review" , "https://static01.nyt.com/images/2019/11/29/business/29onlinereviews-digital/29onlinereviews-superJumbo.jpg"],
                ])
            }
        },
        props: {
            notification : Object
        },
        created(){            
            let notificationType = this.notification.notificationType;
            console.log(this.notification.notificationType);     
            this.notification.src = this.ImagePaths.get(notificationType);          
        }
    }
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
  .notifications-item {  
    font-family: Montserrat;  
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 6px 9px;
    margin-bottom: 0px;
    display: flex;    
    cursor: pointer
  }
  .notifications-item:hover {
    background-color: #eee
  }
  .notifications-item img {
    display: block;
    width: 70px;
    height: 70px;
    margin-right: 9px;
    border-radius: 50%;
    margin-top: 2px
  }
  .notifications-item .text p {
    margin-top: 12px;
    color: rgb(21, 19, 19);
    font-size: 13px
  }
</style>