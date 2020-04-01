// these are ES6 style imports
import React from 'react'; // only one default export per module
import { Home } from './app/views/Home.js';
// /* App class will have all methods objects and values from React.Component, we specify that we want render()
export default class App extends React.Component {
  render() {
    return (
      <Home /> // don't wrap in a view since that's provided by our home component
    );
  }
}
//*/

// below is originally how this was
// export default function App() { 
//   return (
//     <View style={styles.container}>
//       <Text>Aye whattup fam open up mf App.js to edit this boi</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#afc', //afc is a cool background color
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


//Props are not suitable for holding things that change state
//props = static
//state = dynamic
