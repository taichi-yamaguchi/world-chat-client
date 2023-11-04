// prettier-ignore
"use client"
import Image from 'next/image'
import { useEffect } from 'react'
import * as THREE from 'three'

export default function Home() {
  let canvas: HTMLElement
  useEffect(() => {
    if (canvas) return
    canvas = document.getElementById('canvas')!
    //シーン
    const scene = new THREE.Scene()
    //カメラ
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    //レンダラー
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas || undefined,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    // document.body.appendChild(renderer.domElement)

    //立方体作成
    const geometory = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometory, material)
    cube.position.z = -5
    cube.rotation.set(10, 10, 10)
    scene.add(cube)

    //ライト
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 0.2)
    pointLight.position.set(1, 2, 3)
    scene.add(pointLight)

    //アニメーション
    const clock = new THREE.Clock()
    const animation = () => {
      const elapsedTime = clock.getElapsedTime()
      cube.rotation.x = elapsedTime
      cube.rotation.y = elapsedTime
      window.requestAnimationFrame(animation)
      renderer.render(scene, camera)
    }
    animation()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <canvas id="canvas"></canvas>
    </main>
  )
}
