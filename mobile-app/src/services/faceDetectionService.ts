export async function detectFace(frame: any) {
  try {
    // future MediaPipe logic here

    return {
      detected: true,
      confidence: 0.96
    }

  } catch (error) {
    console.log(error)

    return {
      detected: false
    }
  }
}