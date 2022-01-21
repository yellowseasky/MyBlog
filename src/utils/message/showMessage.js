import getComponentRootDom from '../getComponentRootDom'
import Icon from '@/components/Icon'
import styles from './message.module.less'

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型  info  error  success  warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面正中
 */

export default function (options = {}) {
  const content = options.content;
  const type = options.type || 'info';
  const duration = options.duration || 2000;
  const container = options.container || document.body

  // 创建生成弹出框的dom元素
  const div = document.createElement("div");
  // 获取icon组件的dom元素
  const iconDom = getComponentRootDom(Icon, {
    type 
  })
  // 
  div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><div>${content}</div>`;
  
  // 设置样式
  const typeClassName = styles[`message-${type}`]; //类型样式名
  div.className = `${styles.message} ${typeClassName}`; // 弹出框根据类型改变颜色

  // 将div添加到容器中
  // 容器的position是否被改动过
  if(options.container) {
    if(getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  
  container.appendChild(div);

  // 浏览器强行渲染
  div.clientHeight; // 导致reflow重排

  // div回归正常的位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`

  // 弹出框消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    div.addEventListener(
      "transitionend",
      function () {
        div.remove();
        // 运行回调函数
        options.callback && options.callback();
      },
      {once: true} // 只运行一次
    )
  }, duration);

}