import React,{useEffect}
from 'react'

import {
View,
Text
}
from 'react-native'

export default function SplashScreen(){

return(

<View
style={{

flex:1,
backgroundColor:'black',
justifyContent:'center',
alignItems:'center'

}}>

<Text
style={{
color:'#00ffcc',
fontSize:30,
fontWeight:'bold'
}}>

NeuroLock Sentinel

</Text>

</View>

)

}