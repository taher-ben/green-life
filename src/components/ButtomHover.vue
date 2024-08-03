<template>
    <div>
        <router-link :to="link" class="inline-flex items-center">
            <font-awesome-icon :icon="['fas', 'angle-left']" />
            <h4 class="ps-4 duration-500 hover:ps-1">{{ Hovertext }}</h4>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"ButtomHover",
    data(){
        return{
        }
    },
    props:{
        link:{
            type: String,
            default: "/"
        },
        Hovertext:{
            type: String,
            default: "Next"
        }
    }
}
</script>