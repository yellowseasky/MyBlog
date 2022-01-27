import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

let imgs = []; // 该页面需要处理的图片


// 处理每个图片
function setImage(img) {
  // 先暂时使用缓存图片,浏览器只会加载一遍并缓存,后面使用缓存图就不用继续加载了
  img.dom.src = defaultGif;
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  if(rect.top >= -rect.height && rect.top <= clientHeight) {
    // 在视口范围内,则开始加载图片
    img.dom.src = img.src
    // 移除已经加载的图片
    imgs = imgs.filter(i => i !== img)

  }
}


// 希望，调用该函数，就可以设置那些合适的图片
function setImages() {
  for (const img of imgs) {
    setImage(img)
  }
}



// 处理滚动事件
function handleScroll() {
  setImages()
}


eventBus.$on("mainScroll", debounce(handleScroll, 100)
)

export default {
  inserted(el, bindings){
    imgs.push({
      dom: el,
      src: bindings.value,
      isHandle: false
    })
    // 一开始进入立即处理
    setImages(imgs)
  },
  unbind(el) {
    // unbind：只调用一次，指令与元素解绑时调用
    imgs = imgs.filter(item => item.dom !== el)
  }
}