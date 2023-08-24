/**
 * This Vue component displays a pagination element with built-in navigation functionality.
 * It uses Vue 3's script setup syntax and TypeScript.
 *
 * The main object in this component is `Props`, which defines the props accepted by this component.
 * This `Props` object includes the following properties:
 *
 * - `currentPage`: The current page number.
 * - `totalPage`: The total number of pages.
 *
 * Different computed Vue properties and methods are defined in the script body to handle the functionality and state management.
 *
 * For example, `displaypages` is computed property which gives an array of pages to be displayed.
 * `route` and `router` are aiding with Vue Router's navigation.
 * `pageNate` method is used to perform the navigation.
 *
 * The HTML template section of the component constructs the pagination UI using Vue Directives and the methods defined in the script.
 * It includes the navigation arrows and individual page numbers as interactive elements.
 * A 'for' loop is used to iterate over the `displaypages` array and construct each page number.
 *
 * Finally, the scoped CSS styles at the bottom apply styling to the pagination component.
 */

<script setup lang="ts">
type Props = {
 currentPage: number
 totalPage: number
}

const props = defineProps<Props>()

const displaypages = computed(() => {
 console.log(props.totalPage)
 const pages: number[] = []
 if(props.currentPage === 1){
  return [1,2,3,4,5]
 }

 if(props.currentPage > props.totalPage){
  return [
   props.totalPage-4,
   props.totalPage-3,
   props.totalPage-2,
   props.totalPage-1,
   props.totalPage
  ]
 }

 if(props.currentPage % 5 === 1){
  return [
   props.currentPage,
   props.currentPage+1,
   props.currentPage+2,
   props.currentPage+3,
   props.currentPage+4,
  ]
 }
 for(let num=props.currentPage; num<props.totalPage+1; num++){
  if (num % 5 === 1) break
  pages.push(num)
 }
 if(pages.length < 5){
  for(let num=props.currentPage-1; 0<num; num--){
   if (pages.length === 5)break
   pages.push(num)
  }
 }
 // 昇順に並び替え
 pages.sort(function(a, b) {
  return a - b;
 });
 return pages
})

const route = useRoute()
const router = useRouter()
const nextPage = () => {
 if ( props.currentPage >= props.totalPage) return
 router.push({ path: route.path, query: { page: props.currentPage + 1 }})
}

const prevPage = () => {
 if ( props.currentPage <= 1) return
 router.push({ path: route.path, query: { page: props.currentPage - 1 }})
}

const selectPage = (page: number) => {
 router.push({ path: route.path, query: { page: page }})
}
</script>

<template>
 <div class="flex items-center justify-center space-x-3">
  <div class="w-8 h-8 cursor-pointer flex items-center justify-center border border-[#CED4DA] rounded" @click="prevPage()">
    <svg class="text-[#000000]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z" fill="currentColor"></path></svg>
  </div>
  <div
    class="border cursor-pointer border-[#CED4DA] w-8 h-8 rounded flex items-center justify-center text-[14px]"
    v-for="(value, index) of displaypages"
    :key="index"
    :class="{'bg-[#3494E8] text-white border-none': value === props.currentPage}"
    @click="selectPage(value)"
  >
   {{value}}
  </div>
  <div class="w-8 rounded cursor-pointer text-[#000000] h-8 flex items-center justify-center border border-[#CED4DA]"  @click="nextPage()">
    <svg class="text-[#000000]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z" fill="currentColor"></path></svg>
  </div>
 </div>
</template>

<style scoped>

</style>
