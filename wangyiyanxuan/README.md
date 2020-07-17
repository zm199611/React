## em
相对于自己的font-size

## rem
html 的font-size
1. font-size设置多少
2. 如何由设计稿快速还原


DPR:device piex ratio  设备真实的像素  / 1px = 2/3
css 1px 在不同的设备上面  渲染出来的像素是不一样的  2px(iphone6) 3px(iphone x)
1. meta  init-scale:0.5 所有的元素缩放两倍
一个元素本来 20 x 20
必须写成40 x 40
所以设计稿必须放大两倍  这样量取的时候 量取的尺寸就是扩大两倍之后的尺寸


2. 等比缩放
屏幕划分 10等分
750 / 10 = 75
1125 / 10 = 112.5
一份就是1 rem ，html:font-size 75px 或者是112.5px