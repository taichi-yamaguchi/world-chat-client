const checkAspectRatio = (aspectRatio: number): [number, number, number] => {
  // 視野角
  let cameraFov: number
  // カメラ位置(Y,Z)
  let cameraPositionY: number
  let cameraPositionZ: number
  if (aspectRatio > 2.1) {
    cameraFov = 75
    cameraPositionY = -0.15
    cameraPositionZ = 0.9
  } else if (aspectRatio > 2) {
    cameraFov = 75
    cameraPositionY = -0.1
    cameraPositionZ = 0.9
  } else if (aspectRatio > 1.7) {
    cameraFov = 75
    cameraPositionY = -0.2
    cameraPositionZ = 0.9
  } else if (aspectRatio > 1.1) {
    cameraFov = 75
    cameraPositionY = 0
    cameraPositionZ = 1
  } else if (aspectRatio > 1) {
    cameraFov = 75
    cameraPositionY = 0
    cameraPositionZ = 1
  } else if (aspectRatio > 0.7) {
    cameraFov = 75
    cameraPositionY = -0.2
    cameraPositionZ = 1.5
  } else if (aspectRatio > 0.6) {
    cameraFov = 75
    cameraPositionY = 0
    cameraPositionZ = 1.5
  } else {
    cameraFov = 100
    cameraPositionY = -1.3
    cameraPositionZ = 2
  }

  return [cameraFov, cameraPositionY, cameraPositionZ]
}

export default checkAspectRatio
