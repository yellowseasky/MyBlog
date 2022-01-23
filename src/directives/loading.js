import loadingUrl from '@/assets/loading.svg'
import styles from './loading.module.less';

// 得到el中loading效果的img元素
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading]")
}

// 创建loading元素
function createLoadingImg() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loadingUrl
  img.className = styles.loading;
  return img
}

export default function (el, binding) {
  const curImg = getLoadingImage(el);
  if(binding.value) {
    // 需要显示loading
    if(!curImg) {
      // 证明没有img元素则添加img元素
      el.appendChild(createLoadingImg())
    }
  } else {
    // 删除img元素
    if(curImg) {
      // 如果有img元素则删除
      curImg.remove();
    }
  }
}