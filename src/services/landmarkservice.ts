export interface LandmarkData {

  leftEyeOpen: boolean

  rightEyeOpen: boolean

  headAngle: number

  smileProbability: number
}

export function analyzeLandmarks(face: any): LandmarkData {

  return {

    leftEyeOpen:
      face.leftEyeOpenProbability > 0.5,

    rightEyeOpen:
      face.rightEyeOpenProbability > 0.5,

    headAngle:
      face.yawAngle,

    smileProbability:
      face.smilingProbability
  }
}