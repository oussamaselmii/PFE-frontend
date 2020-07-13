<template>
  <div class="container-fluid" >
        
<vueper-slides autoplay :dragging-distance="50" >
  <vueper-slide
    v-for="(slide, i) in slides"
    :key="i"
    :image="slide.image"
    :title="slide.title"
    :content="slide.content"
    :link="slide.link" />
    <template v-slot:pause>
    <i class="icon pause_circle_outline"></i>
  </template>
</vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
components: { VueperSlides, VueperSlide},
data() {
    return {
        slides: [
  {
    title: 'El Teide Volcano, Spain',
    content: 'Photo by Max Rive',
    // You can also provide a URL for the image.
    image:"https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
  },
  {
    title: 'El Teide Volcano, Spain',
    content: 'Photo by Max Rive',
    // You can also provide a URL for the image.
    image: require('C:/xampp/htdocs/PFE/back/backend/public/uploads/logos/logopng.png'),
    link: 'https://www.maxrivephotography.com/index/C0000rU1RKCHdqwI/G0000X57AtIzuRX0/I0000Gvr9HqdtyXk'
  },
],
    }
},
}
</script>

<style>

</style>