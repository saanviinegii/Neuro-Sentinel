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
export function insertUser(
  name: string,
  embedding: string
) {

  db.transaction(tx => {

    tx.executeSql(

      `
      INSERT INTO users
      (name, embedding)
     
      VALUES (?, ?)
      `,

      [name, embedding],

      () => {
        console.log('User Saved')
      },

      error => {
        console.log(error)
      }
    )
  })
}
export function initializeDatabase() {

  db.transaction(tx => {

    tx.executeSql(

      `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        embedding TEXT
      );
      `

    )

  })
}