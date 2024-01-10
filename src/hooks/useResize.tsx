// import React from 'react'

// export default function useResize() {
//   window.addEventListener('resize', onResize)
//   let fov: number
//   console.log('リサイズ')
//   // modelセット位置(Z・Y軸)レスポンシブ対応
//   let modelPositionY: number
//   let modelPositionZ: number

//   // 画面サイズを取得
//   const width = window.innerWidth
//   const height = window.innerHeight

//   // アスペクト比率
//   let aspectRatio: number = width / height

//   // カメラの位置(レスポンシブ対応)
//   if (aspectRatio > 2.1) {
//     fov = 75
//     modelPositionY = -0.15
//     modelPositionZ = 0.9
//   } else if (aspectRatio > 2) {
//     fov = 75
//     modelPositionY = 0
//     modelPositionZ = 0.9
//   } else if (aspectRatio > 1.7) {
//     fov = 75
//     modelPositionY = -0.2
//     modelPositionZ = 0.9
//   } else if (aspectRatio > 1.1) {
//     fov = 75
//     modelPositionY = 0
//     modelPositionZ = 1
//   } else if (aspectRatio > 1) {
//     fov = 75
//     modelPositionY = 0
//     modelPositionZ = 0
//   } else if (aspectRatio > 0.7) {
//     fov = 75
//     modelPositionY = -0.4
//     modelPositionZ = 1.5
//   } else if (aspectRatio > 0.6) {
//     fov = 75
//     modelPositionY = 0
//     modelPositionZ = 1.5
//   } else {
//     fov = 100
//     modelPositionY = -1.3
//     modelPositionZ = 2
//   }

//   // カメラ初期化
//   camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 10)
//   camera.position.set(0, modelPositionY, modelPositionZ)

//   // レンダラーのサイズを調整する
//   renderer.setPixelRatio(window.devicePixelRatio)
//   renderer.setSize(width, height)

//   // カメラのアスペクト比を正す
//   camera.aspect = aspectRatio
//   camera.updateProjectionMatrix()

//   function onResize = () => {

//   }
// }
