<template>
    <div class="full">
        <div class="shop">
            <h3>{{shop.shopName}}</h3>
        </div>
        <div class="map-view">
            <mapbox-map style="height: 600px"
                access-token="pk.eyJ1IjoicGFyMHMiLCJhIjoiY2s4YWxxa3Y0MDNnNjNqcXRjbHAwcGtucyJ9.P53jjAPr1iSjtfa2dSjJkA"
                map-style="mapbox://styles/mapbox/streets-v11" :center="[38.7578, 8.9806]" :zoom="11">                
                <mapbox-marker  v-for="(shop, i) in shops" :key="i" :lng-lat="[shop.lng,shop.lat]">                    
                    <p class="custom-marker" @click=showDetail(shop)><i class="fas fa-shopping-cart"></i></p>
                </mapbox-marker>                               
            </mapbox-map>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return {
            shop : {
                shopName : "ClickOne"
            },
            shops : [
                {
                    shopName : "Merkato",
                    lng : 38.7396,
                    lat : 9.0306
                },
                {
                    shopName : "Piassa",
                    lng : 38.7596,
                    lat : 9.0306
                }
            ]
        }
    },
    methods : {
        showDetail : function(shop){
            this.shop = shop;
        }
    }
}
</script>

<style>
    .full{
        margin-top: 20px;
        padding: 10px;
        display: flex;
        width: 100%;
    }
    .shop{
        flex: 2;
        background-color: red;
    }
    .map-view{        
        flex: 3;
    }
    .custom-marker {
        padding: 1em;
        background-color: #fff;
        border-radius: 5px;
    }
    .fa-shopping-cart {
        color: #FE5245;
    }
</style>