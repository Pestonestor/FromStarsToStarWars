for(i=1;i<800;i++){
  let star=document.createElement('div')
  star.style.backgroundColor=`rgb(${Math.floor(Math.random()*35+220)},
  ${Math.floor(Math.random()*35+220)},
  ${Math.floor(Math.random()*35+220)})`
  star.style.opacity=Math.random()/2+.5
  star.className=`twinkle ${Math.pow(Math.random(),2)*3>2?'light':''}`
  star.style.animationName=Math.random()>.99?'twinkle':''
  star.style.left=`${Math.random()*100}%`
  star.style.top=`${Math.floor(Math.random()*800)}px`
  let dimension=Math.floor(Math.pow(Math.random(), 2) * 3) + 1
  star.style.width=`${dimension}px`
  star.style.height=`${dimension}px`
  star.style.animationDuration=`${Math.random()}s`
document.querySelector('#container').appendChild(star)
}

for(i=0;i<7;i++){
let cloud=document.createElement('div')
cloud.className='cloud'
let r=Math.floor(Math.random()*115+135)
let g=Math.floor(Math.random()*155+80)
let b=Math.floor(Math.random()*30+225)
cloud.style.backgroundColor=`rgb(${r},${g},${b})`
cloud.style.boxShadow=`0px 0px 50px 100px rgb(${r},${g},${b})`
cloud.style.left=`${Math.floor(Math.random()*400)}px`
cloud.style.top=`${Math.floor(Math.random()*800)}px`
let dimension=Math.floor(Math.random()*100) + 50
cloud.style.width=`${dimension}px`
cloud.style.height=`${dimension}px`

document.querySelector('#container').appendChild(cloud)
}