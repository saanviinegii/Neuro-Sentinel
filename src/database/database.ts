import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
  {
    name: 'neurolock.db',
    location: 'default'
  },
  () => console.log('Database Connected'),
  error => console.log(error)
)

export default db