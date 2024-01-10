'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import checkAspectRatio from '../common/checkAspectRatio'
import AuthGuard from '@/components/AuthGuard'

const Home = () => {
  const modelRef = useRef<THREE.Group | null>(null)

  useEffect(() => {
    const gltfLoader: GLTFLoader = new GLTFLoader()
    let modelElement: THREE.Group
    let canvas: HTMLElement | null = null
    let mixer: THREE.AnimationMixer
    let camera: THREE.PerspectiveCamera
    let animationId: number
    if (typeof window === 'object') {
      canvas = document.getElementById('canvas')
    }
    // シーン初期化
    const scene = new THREE.Scene()
    // レンダラー初期化
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas || undefined,
      antialias: false,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    gltfLoader.load('./models/scene.gltf', (gltf) => {
      modelElement = modelRef.current!
      modelElement = gltf.scene
      modelElement.scale.set(0.003, 0.003, 0.003)
      modelElement.rotation.x = Math.PI / 2
      modelElement.position.set(0, 0, 0)
      scene.add(modelElement)

      mixer = new THREE.AnimationMixer(modelElement)
      const clips = gltf.animations
      clips.forEach((clip) => {
        const action = mixer.clipAction(clip)
        action.play()
      })
    })

    // リサイズ処理
    const onResize = () => {
      // 画面サイズを取得
      const width = window.innerWidth
      const height = window.innerHeight

      // アスペクト比率
      const aspectRatio: number = width / height
      const [fov, positionY, positionZ] = checkAspectRatio(aspectRatio)

      // カメラ初期化
      camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 10)
      camera.position.set(0, positionY, positionZ)

      // レンダラーのサイズを調整する
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)

      // カメラのアスペクト比を正す
      camera.aspect = aspectRatio
      camera.updateProjectionMatrix()
    }

    // 初期化のため実行
    onResize()
    window.addEventListener('resize', onResize)

    // アニメーション
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
    <AuthGuard>
      <main className="flex w-full h-full min-h-screen flex-col items-center justify-between overflow-hidden">
        <canvas id="canvas"></canvas>
      </main>
    </AuthGuard>
  )
}
export default Home
