import CryptoJS from 'crypto-js'

const SECRET_KEY = 'NEUROLOCK_SECRET'

export function encryptData(data: string) {

  return CryptoJS.AES.encrypt(
    data,
    SECRET_KEY
  ).toString()
}

export function decryptData(cipher: string) {

  const bytes = CryptoJS.AES.decrypt(
    cipher,
    SECRET_KEY
  )

  return bytes.toString(CryptoJS.enc.Utf8)
}