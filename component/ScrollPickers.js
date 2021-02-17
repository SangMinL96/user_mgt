import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import ScrollPicker from 'react-native-picker-scrollview';

const days = Array.from({ length: 31 }).map((_, index) => (index + 1).toString());
const months = Array.from({ length: 12 }).map((_, index) => (index + 1).toString());
const years = Array.from({ length: 2020 })
  .map((_, index) => (index + 1).toString())
  .concat(['----']);
const data = [days];

function ScrollPickers({ navigation }) {
    const sp = useRef()
    console.log(sp.scrollToIndex(2))
  return (
    <ScrollPicker
      ref={(ev)=>sp(ev)}
      dataSource={years}
      selectedIndex={0}
      itemHeight={50}
      wrapperHeight={250}
      wrapperColor={'#ffffff'}
      highlightColor={'#000000'}
      renderItem={(data, index, isSelected) => {
        return (
          <View style={{ height: 200 }}>
            <Text>{data}</Text>
          </View>
        );
      }}
      onValueChange={(data, selectedIndex) => {
        console.log(data);
      }}
    />
  );
}

export default ScrollPickers;

// console.log(days.filter(item=>item !== ""))
// export default class ScrollPickers extends Component {
//   render() {
//     return (
//       <ScrollPicker
//         ref={(sp) => {
//           this.sp = sp;
//         }}
//         dataSource={years}
//         selectedIndex={0}
//         itemHeight={50}
//         wrapperHeight={250}
//         wrapperColor={'#ffffff'}
//         highlightColor={'#000000'}
//         renderItem={(data, index, isSelected) => {
//           return (
//             <View style={{height:200}}>
//               <Text>{data}</Text>
//             </View>
//           );
//         }}
//         onValueChange={(data, selectedIndex) => {
//           console.log(data)
//         }}
//       />
//     );
//   }
//   someOtherFunc(){
//     this.sp.scrollToIndex(2);   // select 'c'
//     let selectedValue = this.sp.getSelected();  // returns 'c'
// }
// }
// import React, { useEffect, useRef, useState } from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// const days = Array.from({ length: 31 }).map((_, index) => (index + 1).toString())
// const months = Array.from({ length: 12 }).map((_, index) => (index + 1).toString())
// const years = Array.from({ length: 2020 }).map((_, index) => (index + 1).toString()).concat(['----'])
// const data = [days, months, years]
// data.forEach(values => {
//   values.unshift('', '')
//   values.push('', '')
// })
// const ITEM_HEIGHT = 40
// export default function ScrollPickers() {
//   const [text, setText] = useState('')
//   const now = new Date()
//   const [day, setDay] = useState(now.getDay().toString())
//   const [month, setMonth] = useState(now.getMonth().toString())
//   const [year, setYear] = useState(now.getFullYear().toString())
//   const lists = useRef([])
//   const onValueChange = (index, value) => {
//     switch (index) {
//       case 0: setDay(value); break;
//       case 1: setMonth(value); break;
//       case 2: setYear(value); break;
//       default: break;
//     }
//   }
//   useEffect(() => {
//     setText([day, month, year].filter(item => item !== '----').join('/'))
//   }, [day, month, year])
//   const values = [day, month, year]
//   const timer = useRef()
//   return (
//     <View style={styles.container}>
//       <Text>{text}</Text>
//       <View style={styles.modal}>
//         {data.map((items, index) => (
//           <FlatList
//             ref={(ref) => {
//               lists.current[index] = ref
//             }}
//             style={{ flex: 1, width: 100 }}
//             key={index}
//             data={items}
//             showsHorizontalScrollIndicator={false}
//             showsVerticalScrollIndicator={false}
//             initialScrollIndex={Number(values[index]) - 1}
//             getItemLayout={(_, curr) => ({ length: ITEM_HEIGHT, offset: ITEM_HEIGHT * curr, index: curr })}
//             onScroll={({ nativeEvent: { contentOffset: { y } } }) => {
//               clearTimeout(timer.current)
//               timer.current = setTimeout(() => {
//                 const selectedIndex = Math.round(y / ITEM_HEIGHT)
//                 onValueChange(index, data[index][selectedIndex + 2])
//                 lists.current[index].scrollToOffset({ offset: selectedIndex * ITEM_HEIGHT, animated: true })
//               }, 100);
//             }}
//             keyExtractor={(item, keyIndex) => item || `e${keyIndex}`}
//             renderItem={({ item }) => (
//               <View style={styles.cell}>
//                 <Text style={values[index] === item ? styles.active : styles.inactive}>{item}</Text>
//               </View>
//             )}
//           />
//         ))}
//         <View style={styles.line1} />
//         <View style={styles.line2} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width:"80%",
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modal: {
//     height: ITEM_HEIGHT * 5,
//     backgroundColor: 'white',
//     flexDirection: 'row',
//   },
//   active: {
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   inactive: {
//     color: 'gray',
//   },
//   cell: {
//     height: ITEM_HEIGHT,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   line1: {
//     height: 1,
//     backgroundColor: 'black',
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: ITEM_HEIGHT * 2,
//   },
//   line2: {
//     height: 1,
//     backgroundColor: 'black',
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: ITEM_HEIGHT * 3,
//   },
// });
