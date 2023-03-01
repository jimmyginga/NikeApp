import { StyleSheet, View } from "react-native";
import products from "./src/data/products";
import ProductsScreen from "./src/screens/ProductsScreen";
import ProductDetailScreen from './src/screens/ProductDetailScreen';

console.log("prods", products);
export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductsScreen /> */}
      <ProductDetailScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
