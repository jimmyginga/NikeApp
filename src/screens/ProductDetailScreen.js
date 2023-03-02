import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { useSelector } from 'react-redux';

export default function ProductDetailScreen() {
  const product = useSelector(state => state.products.selectedProduct)
  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.warn("deu certo", product.images);
  };
  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ url: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20, marginBottom: 100 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonTxt}>ADD TO CART</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 20,
    marginVertical: 10,
  },
  description: {
    marginVertical: 10,
    lineHeight: 30,
    fontSize: 18,
    fontWeight: "300",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    width: "90%",
    bottom: 30,
    padding: 20,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 100,
    alignItems: "center",
  },
  buttonTxt: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
