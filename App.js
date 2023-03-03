import { StyleSheet, Text, View } from 'react-native';
import styles from './styles/style';
import BottomNav from './components/BottomNav';


export default function App() {
  return (
    <View style={styles.container}>
      <BottomNav />
    </View>
  );
}


