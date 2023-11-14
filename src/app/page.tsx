'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default function Home() {
  const gltfLoader: GLTFLoader = new GLTFLoader()
  let mixer: THREE.AnimationMixer
  let model: THREE.Group
  let camera: THREE.PerspectiveCamera
  let canvas: HTMLElement
  let fov: number
  let animationId: number

  useEffect(() => {
    // canvas取得
    if (typeof window === 'object') {
      canvas = document.getElementById('canvas')!
    }
    //シーン初期化
    const scene = new THREE.Scene()
    //レンダラー初期化
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas || undefined,
      antialias: false,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    // リサイズ処理
    const onResize = () => {
      // modelセット位置(Z・Y軸)レスポンシブ対応
      let modelPositionY: number
      let modelPositionZ: number
      // アスペクト比率
      let aspectRatio: number = window.innerWidth / window.innerHeight
      // カメラの角度・モデルセット位置(レスポンシブ対応)
      if (aspectRatio > 1.7) {
        fov = 75
        modelPositionY = 0.1
        modelPositionZ = -0.9
      } else if (aspectRatio > 1.1) {
        fov = 75
        modelPositionY = 0.15
        modelPositionZ = -0.9
      } else if (aspectRatio > 1) {
        fov = 75
        modelPositionY = 0
        modelPositionZ = 0
      } else if (aspectRatio > 0.7) {
        fov = 75
        modelPositionY = 0.3
        modelPositionZ = -1.5
      } else if (aspectRatio > 0.6) {
        fov = 75
        modelPositionY = 0
        modelPositionZ = -1.5
      } else {
        fov = 100
        modelPositionY = 1.2
        modelPositionZ = -2
      }
      // 3Dモデルインポート
      gltfLoader.load('./models/scene.gltf', (gltf) => {
        model = gltf.scene
        model.scale.set(0.003, 0.003, 0.003)
        model.rotation.x = Math.PI / 2
        model.position.set(0, modelPositionY, modelPositionZ)
        scene.add(model)

        mixer = new THREE.AnimationMixer(model)
        const clips = gltf.animations
        clips.forEach((clips) => {
          const action = mixer.clipAction(clips)
          action.play()
        })
      })
      console.log('リサイズ')
      // サイズを取得
      const width = window.innerWidth
      const height = window.innerHeight

      // カメラ初期化
      camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 10)
      camera.position.set(0, 0, 0)

      // レンダラーのサイズを調整する
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)

      // カメラのアスペクト比を正す
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    // 初期化のため実行
    onResize()
    window.addEventListener('resize', onResize)

    //const clock = new THREE.Clock()

    //アニメーション
    const animation = () => {
      // PCの処理性能によって時間変わるため各ローカルで時間取得処理したい
      // const elapsedTime = clock.getElapsedTime()
      renderer.render(scene, camera)
      if (mixer) {
        mixer.update(0.01)
      }
      animationId = requestAnimationFrame(animation)
    }
    animation()

    // クリーンアップ関数
    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <main className="flex w-full h-full min-h-screen flex-col items-center justify-between overflow-hidden">
      <canvas id="canvas"></canvas>
    </main>
  )
}
